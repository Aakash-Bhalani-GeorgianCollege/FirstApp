import { SafeAreaView, StyleSheet, View } from 'react-native';
import FlexBox2 from './src/components/FlexBox2'
import { DARK_COLORS } from './src/styles/Colors';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FavoriteScreen/>
      <CityWeatherDetails/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});