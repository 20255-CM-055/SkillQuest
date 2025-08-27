// import React from 'react';
// import { Pressable } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import CoursesScreen from '../screens/CoursesScreen';
// import HomeScreen1 from '../screens/app/index';
// import QuizScreen from '../screens/app/quiz';
// import ResultsScreen from '../screens/app/results';
// import ProfileScreen from '../screens/app/profile';
// import GetStartedScreen from '../screens/GetStartedScreen';
// import ProfileScreenMain from '../screens/ProfileScreen';
// import QuizDataScreen from '../screens/QuizDataScreen';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function QuizStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="QuizMain" component={HomeScreen1} />
//       <Stack.Screen name="QuizData" component={QuizDataScreen} />
//       <Stack.Screen name="QuizScreen" component={QuizScreen} />
//       <Stack.Screen name="Results" component={ResultsScreen} />
//       <Stack.Screen name="ProfileApp" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeMain" component={HomeScreen} />
//       <Stack.Screen name="Index" component={HomeScreen1} />
//     </Stack.Navigator>
//   );
// }

// function ProfileStack({ setIsLoggedIn }) {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="ProfileMain" component={ProfileScreen} />
//       <Stack.Screen name="ProfileSettings">
//         {props => <ProfileScreenMain {...props} setIsLoggedIn={setIsLoggedIn} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// }

// export default function MainNavigator({ username, setIsLoggedIn }) {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#1E90FF',
//         tabBarInactiveTintColor: '#777',
//         tabBarLabelStyle: {
//           fontSize: 15,
//           fontWeight: '600',
//           marginTop: 6,
//         },
//         tabBarItemStyle: {
//           paddingTop: 4,
//         },
//         tabBarStyle: {
//           height: 80,
//           backgroundColor: '#fff',
//           borderTopColor: '#ddd',
//           borderTopWidth: 0.5,
//           paddingBottom: 5,
//         },
//         tabBarButton: props => (
//           <Pressable android_ripple={{ color: 'transparent' }} {...props} />
//         ),
//         tabBarIcon: ({ color }) => {
//           let iconName;
//           switch (route.name) {
//             case 'Home':
//               iconName = 'home';
//               break;
//             case 'Courses':
//               iconName = 'book-open-page-variant';
//               break;
//             case 'Quiz':
//               iconName = 'clipboard-text';
//               break;
//             case 'Chatbot':
//               iconName = 'robot-happy';
//               break;
//             case 'Profile':
//               iconName = 'account-circle';
//               break;
//           }
//           return <Icon name={iconName} size={32} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeStack} />
//       <Tab.Screen name="Courses" component={CoursesScreen} />
//       <Tab.Screen name="Quiz" component={QuizStack} />
//       <Tab.Screen
//         name="Chatbot"
//         component={GetStartedScreen}
//         options={{
//           // you can override tabBarLabel or other options here
//         }}
//       />
//       <Tab.Screen name="Profile">
//         {props => <ProfileScreenMain {...props} setIsLoggedIn={setIsLoggedIn} />}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// }



// --------------------------






// import React from 'react';
// import { Pressable } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // Screens
// import HomeScreen from '../screens/HomeScreen';
// import CoursesScreen from '../screens/CoursesScreen';
// import QuizScreen from '../screens/QuizScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import GetStartedScreen from '../screens/GetStartedScreen';
// import ChatbotScreen from '../screens/ChatbotScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default function MainNavigator({ username, setIsLoggedIn }) {

//   const ChatbotStackNavigator = () => (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="GetStarted" component={GetStartedScreen} />
//       <Stack.Screen name="ChatbotMain">
//         {(props) => <ChatbotScreen {...props} username={username} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#1E90FF',
//         tabBarInactiveTintColor: '#777',
//         tabBarLabelStyle: {
//           fontSize: 15,
//           fontWeight: '600',
//           marginTop: 6,
//         },
//         tabBarItemStyle: {
//           paddingTop: 4,
//         },
//         tabBarStyle: (() => {
//           const routeName = getFocusedRouteNameFromRoute(route) ?? '';
//           if (routeName === 'ChatbotMain') {
//             return { display: 'none' };
//           }
//           return {
//             height: 80,
//             backgroundColor: '#fff',
//             borderTopColor: '#ddd',
//             borderTopWidth: 0.5,
//             paddingBottom: 5,
//           };
//         })(),
//         tabBarButton: (props) => (
//           <Pressable android_ripple={{ color: 'transparent' }} {...props} />
//         ),
//         tabBarIcon: ({ color }) => {
//           let iconName;
//           switch (route.name) {
//             case 'Home':
//               iconName = 'home';
//               break;
//             case 'Courses':
//               iconName = 'book-open-page-variant';
//               break;
//             case 'Quiz':
//               iconName = 'clipboard-text';
//               break;
//             case 'Chatbot':
//               iconName = 'robot-happy';
//               break;
//             case 'Profile':
//               iconName = 'account-circle';
//               break;
//           }
//           return <Icon name={iconName} size={32} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home">
//         {(props) => <HomeScreen {...props} username={username} />}
//       </Tab.Screen>
//       <Tab.Screen name="Courses" component={CoursesScreen} />
//       <Tab.Screen name="Quiz" component={QuizScreen} />
//       <Tab.Screen name="Chatbot" component={ChatbotStackNavigator} />
//       <Tab.Screen name="Profile">
//         {(props) => <ProfileScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// }





// -------------------

import React from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import HomeScreen1 from '../screens/app/index';
import CoursesScreen1 from '../screens/CoursesScreen1';
import QuizDataScreen from '../screens/QuizDataScreen';
import QuizScreen from '../screens/app/quiz';
import ResultsScreen from '../screens/app/results';
import ProfileScreenApp from '../screens/app/profile';
import ProfileScreenMain from '../screens/ProfileScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// HOME STACK
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="Index" component={HomeScreen1} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    <Stack.Screen name="ProfileScreenApp" component={ProfileScreenApp} />
  </Stack.Navigator>
);

// QUIZ STACK
const QuizStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="QuizMain" component={HomeScreen1} />
    <Stack.Screen name="QuizData" component={QuizDataScreen} />
    <Stack.Screen name="QuizScreen" component={QuizScreen} />
    <Stack.Screen name="Results" component={ResultsScreen} />
    <Stack.Screen name="ProfileApp" component={ProfileScreenApp} />
  </Stack.Navigator>
);

// PROFILE STACK
const ProfileStack = ({ setIsLoggedIn }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileMain" component={ProfileScreenApp} />
    <Stack.Screen name="ProfileSettings">
      {props => <ProfileScreenMain {...props} setIsLoggedIn={setIsLoggedIn} />}
    </Stack.Screen>
  </Stack.Navigator>
);

// CHATBOT STACK
const ChatbotStack = ({ username }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    <Stack.Screen name="ChatbotMain">
      {props => <ChatbotScreen {...props} username={username} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default function MainNavigator({ username, setIsLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#777',
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
          marginTop: 6,
        },
        tabBarItemStyle: {
          paddingTop: 4,
        },
        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (route.name === 'Chatbot' && routeName === 'ChatbotMain') {
            return { display: 'none' };
          }
          return {
            height: 80,
            backgroundColor: '#fff',
            borderTopColor: '#ddd',
            borderTopWidth: 0.5,
            paddingBottom: 5,
          };
        })(),
        tabBarButton: props => (
          <Pressable android_ripple={{ color: 'transparent' }} {...props} />
        ),
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Courses':
              iconName = 'book-open-page-variant';
              break;
            case 'Quiz':
              iconName = 'clipboard-text';
              break;
            case 'Chatbot':
              iconName = 'robot-happy';
              break;
            case 'Profile':
              iconName = 'account-circle';
              break;
          }
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Courses" component={CoursesScreen1} />
      <Tab.Screen name="Quiz" component={QuizStack} />
      <Tab.Screen name="Chatbot">
        {props => <ChatbotStack {...props} username={username} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {props => <ProfileScreenMain {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
