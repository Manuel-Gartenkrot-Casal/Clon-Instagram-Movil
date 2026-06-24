import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          title: 'Publicación',
          headerShown: true,
          headerTintColor: COLORS.darkGray,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          title: 'Publicación',
          headerShown: true,
          headerTintColor: COLORS.darkGray,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

function Placeholder() {
  return <View style={{ flex: 1, backgroundColor: COLORS.white }} />;
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 0.5,
            borderTopColor: COLORS.borderGray,
            height: 56,
            paddingVertical: 4,
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'ProfileTab') {
              return (
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?u=currentuser' }}
                  style={[styles.tabAvatar, focused && styles.tabAvatarActive]}
                />
              );
            }
            const icons = {
              HomeTab: focused ? 'home' : 'home-outline',
              Search: focused ? 'search' : 'search-outline',
              Reels: focused ? 'play-circle' : 'play-circle-outline',
              Shop: focused ? 'bag-handle' : 'bag-handle-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.darkGray,
          tabBarInactiveTintColor: COLORS.textGray,
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Search" component={Placeholder} />
        <Tab.Screen name="Reels" component={Placeholder} />
        <Tab.Screen name="Shop" component={Placeholder} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabAvatar: { width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: COLORS.borderGray },
  tabAvatarActive: { borderWidth: 2, borderColor: COLORS.darkGray },
});
