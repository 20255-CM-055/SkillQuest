const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const USERS_FILE = 'users.json';
const CURRENT_USER_FILE = 'currentUser.json';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'koppadidivya01@gmail.com',        // 🔁 Replace with your Gmail
    pass: 'quqn pwft xski udzs'      // 🔁 Replace with your Gmail app password (not regular password)
  }
});

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function parseBody(req, callback) {
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', () => {
    try {
      callback(JSON.parse(body));
    } catch {
      callback({});
    }
  });
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/reset-password.html')) {
    const filePath = path.join(__dirname, 'reset-password.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading reset-password.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/signup') {
    parseBody(req, body => {
      // const { name, age, email, password } = body;
      const { name, age, email, password, profileImage } = body;

      if (!email || !password || !name || !age) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'All fields required' }));
      }

      const users = readUsers();
      if (users.find(u => u.email === email)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'User already exists' }));
      }

      const newUser = {
        id: crypto.randomUUID(),
        name,
        age,
        email,
        password: hashPassword(password),
        resetToken: null,
        resetTokenExpiry: null
      };

      users.push(newUser);
      writeUsers(users);
      fs.writeFileSync(CURRENT_USER_FILE, JSON.stringify(newUser, null, 2));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'User registered successfully' }));
    });

  } else if (req.method === 'POST' && req.url === '/login') {
    parseBody(req, body => {
      const { email, password } = body;
      const user = readUsers().find(
        u => u.email === email && u.password === hashPassword(password)
      );

      if (user) {
        fs.writeFileSync(CURRENT_USER_FILE, JSON.stringify(user, null, 2));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } 
      else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
      }
    });

  } else if (req.method === 'POST' && req.url === '/forgot-password') {
    parseBody(req, async body => {
      const { email } = body;
      const users = readUsers();
      const user = users.find(u => u.email === email);

      const token = crypto.randomBytes(20).toString('hex');
      const resetLink = `http://192.168.0.2:3002/reset-password.html?token=${token}`;
      console.log('🔗 Reset Link:', resetLink);

      if (!user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Please signup first.' }));
      }

      user.resetToken = token;
      user.resetTokenExpiry = Date.now() + 3600000;
      writeUsers(users);

      try {
        await transporter.sendMail({
          from: '"Password Reset" <your_email@gmail.com>', // 🔁 Replace with your Gmail
          to: email,
          subject: 'Reset Your Password',
          html: `<p>Click the link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`
        });

        console.log('✅ Email sent via Gmail');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Reset link sent to your email' }));
      } catch (error) {
        console.error('❌ Email send error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Email send failed' }));
      }
    });

  } else if (req.method === 'POST' && req.url === '/reset-password') {
    parseBody(req, body => {
      const { token, newPassword } = body;

      if (!token || !newPassword) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Token and new password required' }));
      }

      const users = readUsers();
      const user = users.find(
        u => u.resetToken === token && u.resetTokenExpiry > Date.now()
      );

      if (!user) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Invalid or expired token' }));
      }

      console.log(`🔑 Resetting password for ${user.email}, new password: ${newPassword}`);

      user.password = hashPassword(newPassword);
      user.resetToken = null;
      user.resetTokenExpiry = null;
      writeUsers(users);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Password reset successful' }));
    });

  } else if (req.method === 'POST' && req.url === '/change-password') {
    parseBody(req, body => {
      const { email, oldPassword, newPassword } = body;

      if (!email || !oldPassword || !newPassword) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'All fields are required' }));
      }

      const users = readUsers();
      const user = users.find(u => u.email === email);

      if (!user || user.password !== hashPassword(oldPassword)) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Incorrect old password' }));
      }

      user.password = hashPassword(newPassword);
      writeUsers(users);
      fs.writeFileSync(CURRENT_USER_FILE, JSON.stringify(user, null, 2));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Password changed successfully' }));
    });

  } else if (req.method === 'GET' && req.url === '/get-profile') {
    try {
      const currentUser = JSON.parse(fs.readFileSync(CURRENT_USER_FILE, 'utf8'));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(currentUser));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Error loading profile' }));
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3002, () => {
  console.log('🚀 Server running on http://192.168.0.2:3002');
});
