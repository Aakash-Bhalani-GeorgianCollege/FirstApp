import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import SettingsPage from './src/components/SettingsPage';
import HomePage from './src/components/HomePage';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';
import Contact from './src/components/Contact';
import SearchWeather from './src/components/SearchWeather';
import { LIGHT_COLORS } from './src/styles/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Noto-Sans': require('./assets/Noto_Sans/NotoSans-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
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
          component={SettingsPage}
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