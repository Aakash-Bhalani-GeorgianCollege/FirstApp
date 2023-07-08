import { SafeAreaView, Settings, StyleSheet, View } from 'react-native';
import { DARK_COLORS } from './src/styles/Colors';
import SettingsPage from './src/components/SettingsPage';
import HomePage from './src/components/HomePage';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';
import Contact from './src/components/Contact';
import SearchWeather from './src/components/SearchWeather';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage/>
      {/* <SearchWeather/> */}
      {/* <FavoriteScreen/> */}
      {/* <CityWeatherDetails/> */}
      {/* <SettingsPage/> */}
      {/* <Contact/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});