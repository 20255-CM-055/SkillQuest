
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   FlatList,
//   Text,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Animated,
//   ScrollView,
//   ImageBackground,
//   ToastAndroid,
// } from 'react-native';
// import { TouchableOpacity, Pressable } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as Clipboard from 'expo-clipboard';

// const TypingIndicator = () => {
//   const dot1 = useRef(new Animated.Value(0)).current;
//   const dot2 = useRef(new Animated.Value(0)).current;
//   const dot3 = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const animateDot = (dot, delay) => {
//       return Animated.loop(
//         Animated.sequence([
//           Animated.timing(dot, { toValue: -5, duration: 300, delay, useNativeDriver: true }),
//           Animated.timing(dot, { toValue: 0, duration: 300, useNativeDriver: true }),
//         ])
//       ).start();
//     };
//     animateDot(dot1, 0);
//     animateDot(dot2, 150);
//     animateDot(dot3, 300);
//   }, []);

//   return (
//     <View style={styles.typingContainer}>
//       <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot1 }] }]} />
//       <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot2 }] }]} />
//       <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot3 }] }]} />
//     </View>
//   );
// };

// export default function ChatbotScreen({ navigation }) {
//   const [messages, setMessages] = useState([{ type: 'bot', text: 'Hi, Echo here, Your AI assitant!!' }]);
//   const [userInput, setUserInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [inputBottomMargin, setInputBottomMargin] = useState(10);
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setInputBottomMargin(0));
//     const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setInputBottomMargin(10));
//     return () => {
//       keyboardShowListener.remove();
//       keyboardHideListener.remove();
//     };
//   }, []);

//   const scrollToBottom = () => {
//     flatListRef.current?.scrollToEnd({ animated: true });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

  

//   const sendMessage = async () => {
//   if (!userInput.trim()) return;
//   const userMessage = { type: 'user', text: userInput };
//   setMessages(prev => [...prev, userMessage]);
//   setUserInput('');
//   setIsTyping(true);
//   const startTime = Date.now();

//   try {
//     const response = await fetch('http://192.168.0.2:5000/chat', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message: userInput }),
//     });

//     const data = await response.json();
//     let botReply = data.reply || `Error: ${data.error || 'Unexpected response'}`;

 
//     // botReply = botReply.split('\n').slice(0, 5).join('\n').slice(0, 300);
//       botReply = botReply.trim();
//     const endTime = Date.now();
//     const responseTime = ((endTime - startTime) / 1000).toFixed(2);

//     setTimeout(() => {
//       setMessages(prev => [...prev, { type: 'bot', text: botReply, responseTime, liked: null }]);
//       setIsTyping(false);
//     }, 1000);
//   } catch (error) {
//     console.error('Request failed:', error);
//     setMessages(prev => [...prev, { type: 'bot', text: '❌ Error reaching server.' }]);
//     setIsTyping(false);
//   }
// };

//   const handleLikeDislike = (messageIndex, type) => {
//     setMessages(prevMessages =>
//       prevMessages.map((msg, index) =>
//         index === messageIndex && msg.type === 'bot'
//           ? { ...msg, liked: msg.liked === type ? null : type }
//           : msg
//       )
//     );
//   };

//   const handleLongPressFeedback = (feedbackType) => {
//     ToastAndroid.show(feedbackType === 'good' ? 'Good response' : 'Bad response', ToastAndroid.SHORT);
//   };

// const renderMessageText = (text) => {
//   const codeRegex = /```([\s\S]*?)```/g;
//   const headingRegex = /(^#+\s*(.*)$|^[A-Z ]+\n)/gm;
//   const starBoldRegex = /\*([^\*]+)\*/g;

//   const parts = [];
//   let lastIndex = 0;
//   let match;

//   while ((match = codeRegex.exec(text)) !== null) {
//     if (match.index > lastIndex) {
//       parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
//     }
//     parts.push({ type: 'code', content: match[1].trim() });
//     lastIndex = codeRegex.lastIndex;
//   }

//   if (lastIndex < text.length) {
//     parts.push({ type: 'text', content: text.slice(lastIndex) });
//   }

//   const renderedParts = [];

//   parts.forEach((part, idx) => {
//     if (part.type === 'code') {
//       renderedParts.push(
//         <View key={`code-${idx}`} style={styles.codeBlockWrapper}>
//           <ScrollView style={styles.codeScrollWrapper} horizontal>
//             <ScrollView style={{ maxHeight: 300 }}>
//               <Text selectable style={styles.codeText}>{part.content}</Text>
//             </ScrollView>
//           </ScrollView>
//           <TouchableOpacity
//             style={styles.copyButton}
//             onPress={() => {
//               Clipboard.setStringAsync(part.content);
//               ToastAndroid.show('Code copied!', ToastAndroid.SHORT);
//             }}
//           >
//             <Ionicons name="copy-outline" size={20} color="#007AFF" />
//           </TouchableOpacity>
//         </View>
//       );
//     } else {
//       const subParts = [];
//       let last = 0;
//       let subMatch;

//       while ((subMatch = headingRegex.exec(part.content)) !== null) {
//         if (subMatch.index > last) {
//           subParts.push({ type: 'text', content: part.content.slice(last, subMatch.index) });
//         }
//         const headingText = subMatch[2] || subMatch[0].trim();
//         subParts.push({ type: 'heading', content: headingText });
//         last = headingRegex.lastIndex;
//       }

//       if (last < part.content.length) {
//         subParts.push({ type: 'text', content: part.content.slice(last) });
//       }

//       subParts.forEach((sp, subIdx) => {
//         if (sp.type === 'heading') {
//           renderedParts.push(
//             <Text key={`heading-${idx}-${subIdx}`} style={styles.headingText}>
//               {sp.content}
//             </Text>
//           );
//         } else {
//           const segments = [];
//           let lastBold = 0;
//           let boldMatch;

//           while ((boldMatch = starBoldRegex.exec(sp.content)) !== null) {
//             if (boldMatch.index > lastBold) {
//               segments.push({ type: 'text', content: sp.content.slice(lastBold, boldMatch.index) });
//             }
//             segments.push({ type: 'bold', content: boldMatch[1] });
//             lastBold = starBoldRegex.lastIndex;
//           }

//           if (lastBold < sp.content.length) {
//             segments.push({ type: 'text', content: sp.content.slice(lastBold) });
//           }

//           segments.forEach((seg, segIdx) => {
//             if (seg.type === 'bold') {
//               renderedParts.push(
//                 <Text key={`bold-${idx}-${subIdx}-${segIdx}`} style={styles.boldText}>
//                   {seg.content}
//                 </Text>
//               );
//             } else {
//               renderedParts.push(
//                 <Text key={`text-${idx}-${subIdx}-${segIdx}`} style={styles.messageText}>
//                   {seg.content}
//                 </Text>
//               );
//             }
//           });
//         }
//       });
//     }
//   });

//   return renderedParts;
// };

//   const renderItem = ({ item, index }) => (
//     <View style={[styles.messageRow, { justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start' }]}>
//       <View style={item.type === 'user' ? styles.rightAlign : styles.leftAlign}>
//         <View style={item.type === 'user' ? styles.userBubble : styles.botBubble}>
//           {item.type === 'bot' ? renderMessageText(item.text) : <Text style={styles.messageText}>{item.text}</Text>}
//         </View>
//         {item.type === 'bot' && item.responseTime && (
//           <View style={styles.botMessageFooter}>
//             <View style={styles.iconContainer}>
//               <Pressable onPress={() => handleLikeDislike(index, 'up')} onLongPress={() => handleLongPressFeedback('good')} style={styles.footerIconButton}>
//                 <Ionicons name={item.liked === 'up' ? 'thumbs-up' : 'thumbs-up-outline'} size={18} color={'snow'} />
//               </Pressable>
//               <Pressable onPress={() => handleLikeDislike(index, 'down')} onLongPress={() => handleLongPressFeedback('bad')} style={styles.footerIconButton}>
//                 <Ionicons name={item.liked === 'down' ? 'thumbs-down' : 'thumbs-down-outline'} size={18} color={'snow'} />
//               </Pressable>
//               <Text style={styles.responseTimeTextRight}>⏱: {item.responseTime}s</Text>
//             </View>
//           </View>
//         )}
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ImageBackground source={require('../assets/bg1.jpeg')} style={styles.backgroundImage} imageStyle={{ opacity: 1 }}>
//         <View style={styles.overlay} />
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={28} color="white" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>What can I do for you?</Text>
//         </View>

//         <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={80}>
//           <View style={{ flex: 1 }}>
//             <FlatList
//               ref={flatListRef}
//               data={messages}
//               renderItem={renderItem}
//               keyExtractor={(_, index) => index.toString()}
//               contentContainerStyle={{ padding: 12 }}
//               showsVerticalScrollIndicator={false}
//               keyboardShouldPersistTaps="handled"
//               onContentSizeChange={scrollToBottom}
//               ListFooterComponent={
//                 isTyping && (
//                   <View style={[styles.messageRow, { justifyContent: 'flex-start' }]}>
//                     <View style={styles.leftAlign}>
//                       <View style={styles.botBubble}>
//                         <TypingIndicator />
//                       </View>
//                     </View>
//                   </View>
//                 )
//               }
//             />
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//               <View style={[styles.inputWrapper, { paddingBottom: inputBottomMargin }]}>
//                 <View style={styles.inputRow}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Ask something..."
//                     value={userInput}
//                     onChangeText={setUserInput}
//                     onSubmitEditing={sendMessage}
//                     returnKeyType="send"
//                   />
//                   <TouchableOpacity onPress={sendMessage} style={styles.iconButton}>
//                     <Ionicons name="send" size={22} color="#007AFF" />
//                   </TouchableOpacity>
//                 </View>
//                 <Text style={styles.helperText}>Echo is listening to your query…</Text>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     safeArea: { flex: 1, backgroundColor: '#000' },
//   backgroundImage: { flex: 1 },
//   overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 },
//   header: { flexDirection: 'row', alignItems: 'center', padding: 14, paddingHorizontal: 16 },
//   headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
//   container: { flex: 1 },
//   messageRow: { flexDirection: 'row', alignItems: 'flex-end', marginVertical: 4 },
//   leftAlign: { flexDirection: 'column', alignItems: 'flex-start' },
//   rightAlign: { flexDirection: 'row', alignItems: 'flex-end' },
//   userBubble: {
//     backgroundColor: '#DCF8C6',
//     padding: 12,
//     borderRadius: 18,
//     borderBottomRightRadius: 4,
//     maxWidth: '100%',
//     elevation: 2,
//   },
//   botBubble: {
//     backgroundColor: '#E5E5EA',
//     padding: 12,
//     borderRadius: 18,
//     borderBottomLeftRadius: 4,
//     maxWidth: '95%',
//     elevation: 2,
//     marginLeft: 2,
//   },
//   messageText: { fontSize: 16, color: '#000' },
//   inputWrapper: { paddingHorizontal: 10, paddingBottom: 10 },
//   inputRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 50,
//     paddingHorizontal: 10,
//     backgroundColor: '#f9f9f9',
//     height: 55,
//   },
//   input: { flex: 1, paddingVertical: 8, paddingHorizontal: 10, fontSize: 16 },
//   iconButton: { padding: 6 },
//   helperText: { color: 'snow', fontSize: 13, marginTop: 4, paddingLeft: '25%' },
//   typingContainer: { flexDirection: 'row', alignItems: 'center', height: 20 },
//   typingDotCircle: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: '#555',
//     marginHorizontal: 3,
//   },
//   codeScrollWrapper: {
//     backgroundColor: '#1e1e1e',
//     borderRadius: 8,
//     padding: 12,
//     marginTop: 6,
//     marginBottom: 6,
//     maxWidth: '100%',
//     maxHeight: 300,
//   },
//   codeText: {
//     color: '#f8f8f2',
//     fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   codeBlockWrapper: { position: 'relative', marginTop: 6, marginBottom: 6 },
//   copyButton: {
//     position: 'absolute',
//     top: 6,
//     right: 6,
//     padding: 4,
//     backgroundColor: '#ffffffcc',
//     borderRadius: 6,
//     zIndex: 1,
//   },
//   botMessageFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//     width: '99%',
//     paddingLeft: 12,
//   },
//   iconContainer: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
//   footerIconButton: { padding: 4, marginRight: 8 },
//   responseTimeTextRight: { fontSize: 12, color: 'snow', marginLeft: 4, marginRight: 8 },
//   headingText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: 8,
//     marginBottom: 4,
//   },
//   boldText: {
//   fontWeight: 'bold',
//   color: 'black', // red shade for visual pop
//   fontSize: 16,
// },

// });

// -----------------

import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  ScrollView,
  ImageBackground,
  ToastAndroid,
  Image,
} from 'react-native';
import { TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as ImagePicker from 'expo-image-picker';

const TypingIndicator = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDot = (dot, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(dot, { toValue: -5, duration: 300, delay, useNativeDriver: true }),
          Animated.timing(dot, { toValue: 0, duration: 300, useNativeDriver: true }),
        ])
      ).start();
    };
    animateDot(dot1, 0);
    animateDot(dot2, 150);
    animateDot(dot3, 300);
  }, []);

  return (
    <View style={styles.typingContainer}>
      <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot1 }] }]} />
      <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot2 }] }]} />
      <Animated.View style={[styles.typingDotCircle, { transform: [{ translateY: dot3 }] }]} />
    </View>
  );
};

export default function ChatbotScreen({ navigation }) {
  const [messages, setMessages] = useState([{ type: 'bot', text: 'Hi, Echo here, Your AI assistant!!' }]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [inputBottomMargin, setInputBottomMargin] = useState(10);
  const flatListRef = useRef(null);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setInputBottomMargin(0));
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setInputBottomMargin(10));
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const userMessage = { type: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);
    const startTime = Date.now();

    try {
      const response = await fetch('http://192.168.0.2:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      let botReply = data.reply || `Error: ${data.error || 'Unexpected response'}`;
      botReply = botReply.trim();

      const endTime = Date.now();
      const responseTime = ((endTime - startTime) / 1000).toFixed(2);

      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: botReply, responseTime, liked: null }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Request failed:', error);
      setMessages(prev => [...prev, { type: 'bot', text: '❌ Error reaching server.' }]);
      setIsTyping(false);
    }
  };

  const handleLikeDislike = (messageIndex, type) => {
    setMessages(prev =>
      prev.map((msg, idx) =>
        idx === messageIndex && msg.type === 'bot'
          ? { ...msg, liked: msg.liked === type ? null : type }
          : msg
      )
    );
  };

  const handleLongPressFeedback = (feedbackType) => {
    ToastAndroid.show(feedbackType === 'good' ? 'Good response' : 'Bad response', ToastAndroid.SHORT);
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      ToastAndroid.show('Camera permission denied.', ToastAndroid.SHORT);
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      base64: false,
    });

    if (!result.cancelled) {
      setMessages(prev => [...prev, { type: 'camera', uri: result.assets[0].uri }]);
    }
  };

  const renderMessageText = (text) => {
    const codeRegex = /```([\s\S]*?)```/g;
    const headingRegex = /(^#+\s*(.*)$|^[A-Z ]+\n)/gm;
    const starBoldRegex = /\*([^\*]+)\*/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
      }
      parts.push({ type: 'code', content: match[1].trim() });
      lastIndex = codeRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.slice(lastIndex) });
    }

    const renderedParts = [];

    parts.forEach((part, idx) => {
      if (part.type === 'code') {
        renderedParts.push(
          <View key={`code-${idx}`} style={styles.codeBlockWrapper}>
            <ScrollView style={styles.codeScrollWrapper} horizontal>
              <ScrollView style={{ maxHeight: 300 }}>
                <Text selectable style={styles.codeText}>{part.content}</Text>
              </ScrollView>
            </ScrollView>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => {
                Clipboard.setStringAsync(part.content);
                ToastAndroid.show('Code copied!', ToastAndroid.SHORT);
              }}
            >
              <Ionicons name="copy-outline" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
        );
      } else {
        const subParts = [];
        let last = 0;
        let subMatch;

        while ((subMatch = headingRegex.exec(part.content)) !== null) {
          if (subMatch.index > last) {
            subParts.push({ type: 'text', content: part.content.slice(last, subMatch.index) });
          }
          const headingText = subMatch[2] || subMatch[0].trim();
          subParts.push({ type: 'heading', content: headingText });
          last = headingRegex.lastIndex;
        }

        if (last < part.content.length) {
          subParts.push({ type: 'text', content: part.content.slice(last) });
        }

        subParts.forEach((sp, subIdx) => {
          if (sp.type === 'heading') {
            renderedParts.push(
              <Text key={`heading-${idx}-${subIdx}`} style={styles.headingText}>{sp.content}</Text>
            );
          } else {
            const segments = [];
            let lastBold = 0;
            let boldMatch;

            while ((boldMatch = starBoldRegex.exec(sp.content)) !== null) {
              if (boldMatch.index > lastBold) {
                segments.push({ type: 'text', content: sp.content.slice(lastBold, boldMatch.index) });
              }
              segments.push({ type: 'bold', content: boldMatch[1] });
              lastBold = starBoldRegex.lastIndex;
            }

            if (lastBold < sp.content.length) {
              segments.push({ type: 'text', content: sp.content.slice(lastBold) });
            }

            segments.forEach((seg, segIdx) => {
              if (seg.type === 'bold') {
                renderedParts.push(
                  <Text key={`bold-${idx}-${subIdx}-${segIdx}`} style={styles.boldText}>{seg.content}</Text>
                );
              } else {
                renderedParts.push(
                  <Text key={`text-${idx}-${subIdx}-${segIdx}`} style={styles.messageText}>{seg.content}</Text>
                );
              }
            });
          }
        });
      }
    });

    return renderedParts;
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.messageRow, { justifyContent: item.type === 'user' || item.type === 'camera' ? 'flex-end' : 'flex-start' }]}>
      <View style={item.type === 'user' || item.type === 'camera' ? styles.rightAlign : styles.leftAlign}>
        <View style={item.type === 'user' ? styles.userBubble : item.type === 'bot' ? styles.botBubble : styles.userBubble}>
          {item.type === 'bot'
            ? renderMessageText(item.text)
            : item.type === 'camera'
            ? <Image source={{ uri: item.uri }} style={{ width: 200, height: 200, borderRadius: 10 }} />
            : <Text style={styles.messageText}>{item.text}</Text>
          }
        </View>
        {item.type === 'bot' && item.responseTime && (
          <View style={styles.botMessageFooter}>
            <View style={styles.iconContainer}>
              <Pressable onPress={() => handleLikeDislike(index, 'up')} onLongPress={() => handleLongPressFeedback('good')} style={styles.footerIconButton}>
                <Ionicons name={item.liked === 'up' ? 'thumbs-up' : 'thumbs-up-outline'} size={18} color={'snow'} />
              </Pressable>
              <Pressable onPress={() => handleLikeDislike(index, 'down')} onLongPress={() => handleLongPressFeedback('bad')} style={styles.footerIconButton}>
                <Ionicons name={item.liked === 'down' ? 'thumbs-down' : 'thumbs-down-outline'} size={18} color={'snow'} />
              </Pressable>
              <Text style={styles.responseTimeTextRight}>⏱: {item.responseTime}s</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../assets/bg1.jpeg')} style={styles.backgroundImage} imageStyle={{ opacity: 1 }}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>What can I do for you?</Text>
        </View>

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={80}>
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ padding: 12 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              onContentSizeChange={scrollToBottom}
              ListFooterComponent={
                isTyping && (
                  <View style={[styles.messageRow, { justifyContent: 'flex-start' }]}>
                    <View style={styles.leftAlign}>
                      <View style={styles.botBubble}>
                        <TypingIndicator />
                      </View>
                    </View>
                  </View>
                )
              }
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={[styles.inputWrapper, { paddingBottom: inputBottomMargin }]}>
                <View style={styles.inputRow}>
                  <TextInput
                    style={styles.input}
                    placeholder="Ask something..."
                    value={userInput}
                    onChangeText={setUserInput}
                    onSubmitEditing={sendMessage}
                    returnKeyType="send"
                  />
                  <TouchableOpacity onPress={openCamera} style={styles.iconButton}>
                    <Ionicons name="camera-outline" size={22} color="#007AFF" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={sendMessage} style={styles.iconButton}>
                    <Ionicons name="send" size={22} color="#007AFF" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.helperText}>Echo is listening to your query…</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#000' },
  backgroundImage: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 14, paddingHorizontal: 16 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  container: { flex: 1 },
  messageRow: { flexDirection: 'row', alignItems: 'flex-end', marginVertical: 4 },
  leftAlign: { flexDirection: 'column', alignItems: 'flex-start' },
  rightAlign: { flexDirection: 'row', alignItems: 'flex-end' },
  userBubble: {
    backgroundColor: '#DCF8C6',
    padding: 12,
    borderRadius: 18,
    borderBottomRightRadius: 4,
    maxWidth: '100%',
    elevation: 2,
  },
  botBubble: {
    backgroundColor: '#E5E5EA',
    padding: 12,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    maxWidth: '95%',
    elevation: 2,
    marginLeft: 2,
  },
  messageText: { fontSize: 16, color: '#000' },
  inputWrapper: { paddingHorizontal: 10, paddingBottom: 10 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    height: 55,
  },
  input: { flex: 1, paddingVertical: 8, paddingHorizontal: 10, fontSize: 16 },
  iconButton: { padding: 6 },
  helperText: { color: 'snow', fontSize: 13, marginTop: 4, paddingLeft: '25%' },
  typingContainer: { flexDirection: 'row', alignItems: 'center', height: 20 },
  typingDotCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#555',
    marginHorizontal: 3,
  },
  codeScrollWrapper: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
    marginBottom: 6,
    maxWidth: '100%',
    maxHeight: 300,
  },
  codeText: {
    color: '#f8f8f2',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
  codeBlockWrapper: { position: 'relative', marginTop: 6, marginBottom: 6 },
  copyButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 4,
    backgroundColor: '#ffffffcc',
    borderRadius: 6,
    zIndex: 1,
  },
  botMessageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '99%',
    paddingLeft: 12,
  },
  iconContainer: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  footerIconButton: { padding: 4, marginRight: 8 },
  responseTimeTextRight: { fontSize: 12, color: 'snow', marginLeft: 4, marginRight: 8 },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
    marginBottom: 4,
  },
  boldText: {
  fontWeight: 'bold',
  color: 'black', // red shade for visual pop
  fontSize: 16,
},

});



