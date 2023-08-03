import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import SettingsScreen from './src/screens/SettingsScreen';
import HomePage from './src/components/HomePage';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';
import Contact from './src/components/Contact';
import { LIGHT_COLORS } from './src/styles/Colors';
import SearchWeather from './src/components/SearchWeather';
import Onbording from './src/screens/Onbording';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);


  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Noto-Sans': require('./assets/Noto_Sans/NotoSans-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();

    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  if (!fontLoaded) {
    return null;
  }

  if (showSplash) {
    // Show the splash screen while loading fonts and assets
    return <Onbording />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'Noto-Sans',
            fontSize: 12,
          },
          tabBarActiveTintColor: LIGHT_COLORS.PRIMARY_TEXT_COLOR,
          tabBarInactiveTintColor: LIGHT_COLORS.TERTIARY_TEXT_COLOR,
          tabBarStyle: {
            backgroundColor: LIGHT_COLORS.PRIMARY_BACKGROUND_COLOR,
            borderTopWidth: 0,
            borderTopColor: LIGHT_COLORS.SECONDARY_BACKGROUND_COLOR,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/home.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={CityWeatherDetails}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/details.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchWeather}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/search.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/favorites.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/settings.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/contact.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;