










  // import React, { useState, useRef } from 'react';
  // import {
  //   View,
  //   Text,
  //   TextInput,
  //   TouchableOpacity,
  //   FlatList,
  //   KeyboardAvoidingView,
  //   Platform,
  //   Keyboard,
  //   ActivityIndicator,
  //   Clipboard,
  //   ToastAndroid,
  //   StyleSheet,
  // } from 'react-native';
  // import Icon from 'react-native-vector-icons/FontAwesome';
  // import LottieView from 'lottie-react-native';

  // const ChatbotScreen = () => {
  //   const [messages, setMessages] = useState([]);
  //   const [inputText, setInputText] = useState('');
  //   const [isTyping, setIsTyping] = useState(false);
  //   const flatListRef = useRef(null);

  //   const sendMessage = async () => {
  //     if (!inputText.trim()) return;

  //     const userMessage = { text: inputText.trim(), isUser: true };
  //     setMessages(prev => [...prev, userMessage]);
  //     setInputText('');
  //     Keyboard.dismiss();
  //     setIsTyping(true);

  //     const startTime = Date.now();

  //     try {
  //       const response = await fetch('http://YOUR_BACKEND_ENDPOINT/api/chatbot', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ message: userMessage.text }),
  //       });

  //       const data = await response.json();
  //       const endTime = Date.now();
  //       const responseTime = `${((endTime - startTime) / 1000).toFixed(2)}s`;

  //       const botReply = data.reply || `Error: ${data.error || 'Unexpected response'}`;

  //       setMessages(prev => [
  //         ...prev,
  //         {
  //           text: botReply,
  //           isUser: false,
  //           responseTime,
  //         },
  //       ]);
  //     } catch (error) {
  //       setMessages(prev => [
  //         ...prev,
  //         { text: `Error: ${error.message}`, isUser: false },
  //       ]);
  //     } finally {
  //       setIsTyping(false);
  //     }
  //   };

  //   const renderMessage = ({ item }) => {
  //     const codeBlockRegex = /```([\s\S]*?)```/g;
  //     const isCode = codeBlockRegex.test(item.text);

  //     return (
  //       <View style={[styles.messageContainer, item.isUser ? styles.userMsg : styles.botMsg]}>
  //         <Text style={styles.messageText}>{item.text.replace(/```/g, '')}</Text>
  //         {item.responseTime && !item.isUser && (
  //           <Text style={styles.timeText}>⏱ {item.responseTime}</Text>
  //         )}
  //         {!item.isUser && (
  //           <View style={styles.reactionRow}>
  //             <Icon name="thumbs-up" size={18} color="#4CAF50" style={styles.iconSpacing} />
  //             <Icon name="thumbs-down" size={18} color="#F44336" />
  //           </View>
  //         )}
  //         {isCode && !item.isUser && (
  //           <TouchableOpacity
  //             style={styles.copyBtn}
  //             onPress={() => {
  //               Clipboard.setString(item.text.replace(/```/g, ''));
  //               ToastAndroid.show('Code copied to clipboard', ToastAndroid.SHORT);
  //             }}>
  //             <Text style={styles.copyText}>Copy</Text>
  //           </TouchableOpacity>
  //         )}
  //       </View>
  //     );
  //   };

  //   return (
  //     <View style={styles.wrapper}>
  //       <KeyboardAvoidingView
  //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //         style={styles.inner}>
  //         <FlatList
  //           ref={flatListRef}
  //           data={messages}
  //           keyExtractor={(_, index) => index.toString()}
  //           renderItem={renderMessage}
  //           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
  //           onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
  //           contentContainerStyle={styles.chatList}
  //         />

  //         {isTyping && (
  //           <View style={styles.typingContainer}>
  //             <LottieView
  //               source={require('../assets/typing.json')}
  //               autoPlay
  //               loop
  //               style={styles.typingAnim}
  //             />
  //             <Text style={styles.typingText}>Typing...</Text>
  //           </View>
  //         )}

  //         <View style={styles.inputRow}>
  //           <TextInput
  //             style={styles.inputField}
  //             value={inputText}
  //             onChangeText={setInputText}
  //             placeholder="Ask me anything..."
  //             placeholderTextColor="#aaa"
  //             multiline
  //           />
  //           <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
  //             {isTyping ? (
  //               <ActivityIndicator color="#fff" />
  //             ) : (
  //               <Icon name="send" size={20} color="#fff" />
  //             )}
  //           </TouchableOpacity>
  //         </View>
  //       </KeyboardAvoidingView>
  //     </View>
  //   );
  // };

  // export default ChatbotScreen;

  // const styles = StyleSheet.create({
  //   wrapper: {
  //     flex: 1,
  //     backgroundColor: '#0F172A',
  //     padding: 10,
  //   },
  //   inner: {
  //     flex: 1,
  //     justifyContent: 'space-between',
  //   },
  //   chatList: {
  //     paddingBottom: 80,
  //   },
  //   messageContainer: {
  //     marginVertical: 6,
  //     padding: 12,
  //     borderRadius: 10,
  //     maxWidth: '80%',
  //     alignSelf: 'flex-start',
  //   },
  //   userMsg: {
  //     backgroundColor: '#4F46E5',
  //     alignSelf: 'flex-end',
  //   },
  //   botMsg: {
  //     backgroundColor: '#1E293B',
  //   },
  //   messageText: {
  //     color: '#fff',
  //     fontSize: 16,
  //   },
  //   timeText: {
  //     fontSize: 12,
  //     color: '#94A3B8',
  //     marginTop: 5,
  //   },
  //   reactionRow: {
  //     flexDirection: 'row',
  //     marginTop: 8,
  //   },
  //   iconSpacing: {
  //     marginRight: 12,
  //   },
  //   copyBtn: {
  //     alignSelf: 'flex-end',
  //     marginTop: 6,
  //     backgroundColor: '#475569',
  //     paddingHorizontal: 8,
  //     paddingVertical: 4,
  //     borderRadius: 6,
  //   },
  //   copyText: {
  //     color: '#E2E8F0',
  //     fontSize: 12,
  //   },
  //   typingContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginVertical: 6,
  //   },
  //   typingAnim: {
  //     width: 40,
  //     height: 40,
  //   },
  //   typingText: {
  //     color: '#CBD5E1',
  //     marginLeft: 10,
  //   },
  //   inputRow: {
  //     flexDirection: 'row',
  //     alignItems: 'flex-end',
  //     backgroundColor: '#1E293B',
  //     borderRadius: 25,
  //     paddingHorizontal: 15,
  //     paddingVertical: 10,
  //     position: 'absolute',
  //     bottom: 10,
  //     left: 10,
  //     right: 10,
  //   },
  //   inputField: {
  //     flex: 1,
  //     color: '#fff',
  //     fontSize: 16,
  //     maxHeight: 100,
  //   },
  //   sendBtn: {
  //     backgroundColor: '#2563EB',
  //     borderRadius: 25,
  //     padding: 10,
  //     marginLeft: 10,
  //   },
  // });




  import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
  Clipboard,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText.trim(), isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    Keyboard.dismiss();
    setIsTyping(true);

    const startTime = Date.now();

    try {
      const response = await fetch('http://YOUR_BACKEND_ENDPOINT/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();
      const endTime = Date.now();
      const responseTime = `${((endTime - startTime) / 1000).toFixed(2)}s`;

      const botReply = data.reply || `Error: ${data.error || 'Unexpected response'}`;

      setMessages(prev => [
        ...prev,
        {
          text: botReply,
          isUser: false,
          responseTime,
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { text: `Error: ${error.message}`, isUser: false },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessage = ({ item }) => {
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const isCode = codeBlockRegex.test(item.text);

    return (
      <View style={[styles.messageContainer, item.isUser ? styles.userMsg : styles.botMsg]}>
        <Text style={styles.messageText}>{item.text.replace(/```/g, '')}</Text>
        {item.responseTime && !item.isUser && (
          <Text style={styles.timeText}>⏱ {item.responseTime}</Text>
        )}
        {!item.isUser && (
          <View style={styles.reactionRow}>
            <Icon name="thumbs-up" size={18} color="#4CAF50" style={styles.iconSpacing} />
            <Icon name="thumbs-down" size={18} color="#F44336" />
          </View>
        )}
        {isCode && !item.isUser && (
          <TouchableOpacity
            style={styles.copyBtn}
            onPress={() => {
              Clipboard.setString(item.text.replace(/```/g, ''));
              ToastAndroid.show('Code copied to clipboard', ToastAndroid.SHORT);
            }}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('GetStartedScreen')}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chatbot</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderMessage}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
          contentContainerStyle={styles.chatList}
        />

        {isTyping && (
          <View style={styles.typingContainer}>
            <LottieView
              source={require('../assets/typing.json')}
              autoPlay
              loop
              style={styles.typingAnim}
            />
            <Text style={styles.typingText}>Typing...</Text>
          </View>
        )}

        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputField}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask me anything..."
            placeholderTextColor="#aaa"
            multiline
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
            {isTyping ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="send" size={20} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#0F172A',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  chatList: {
    paddingBottom: 80,
  },
  messageContainer: {
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMsg: {
    backgroundColor: '#4F46E5',
    alignSelf: 'flex-end',
  },
  botMsg: {
    backgroundColor: '#1E293B',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 5,
  },
  reactionRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  iconSpacing: {
    marginRight: 12,
  },
  copyBtn: {
    alignSelf: 'flex-end',
    marginTop: 6,
    backgroundColor: '#475569',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  copyText: {
    color: '#E2E8F0',
    fontSize: 12,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  typingAnim: {
    width: 40,
    height: 40,
  },
  typingText: {
    color: '#CBD5E1',
    marginLeft: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#1E293B',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  inputField: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    maxHeight: 100,
  },
  sendBtn: {
    backgroundColor: '#2563EB',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
  },
});
