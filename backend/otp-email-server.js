const http = require('http');
const nodemailer = require('nodemailer');

const otpStore = {}; // { email: { otp, expiresAt, lastSent } }

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Nodemailer transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'koppadidivya01@gmail.com',        // ✅ your Gmail
    pass: 'quqn pwft xski udzs'            // ✅ App Password (not your Gmail password)
  }
});

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/send-otp') {
    try {
      const { email } = await parseBody(req);
      if (!email) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Email is required' }));
      }

      const now = Date.now();
      const existing = otpStore[email];

      if (existing && now - existing.lastSent < 30000) {
        res.writeHead(429, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Please wait before requesting another OTP' }));
      }

      const otp = generateOTP();
      const expiresAt = now + 5 * 60 * 1000;
      otpStore[email] = { otp, expiresAt, lastSent: now };

      // Send OTP via Gmail
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        html: `<p>Your OTP is: <b>${otp}</b><br>It expires in 5 minutes.</p>`
      });

      console.log(`✅ OTP sent to ${email}: ${otp}`);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'OTP sent successfully' }));
    } catch (error) {
      console.error('❌ Error sending OTP:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Failed to send OTP', error: error.message }));
    }
  }

  else if (req.method === 'POST' && req.url === '/verify-otp') {
    try {
      const { email, otp } = await parseBody(req);
      if (!email || !otp) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Email and OTP are required' }));
      }

      const record = otpStore[email];

      if (record && record.otp === otp && Date.now() < record.expiresAt) {
        delete otpStore[email];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'OTP verified successfully' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid or expired OTP' }));
      }
    } catch (error) {
      console.error('❌ Error verifying OTP:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Server error while verifying OTP' }));
    }
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('✅ OTP Server running at http://192.168.0.2:3000');
});
