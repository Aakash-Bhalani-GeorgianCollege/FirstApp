import { SafeAreaView, StyleSheet, View } from 'react-native';
import FlexBox2 from './src/components/FlexBox2'
import { DARK_COLORS } from './src/styles/Colors';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';
import FlexBox1 from './src/components/FlexBox1';
import Contact from './src/components/Contact';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FavoriteScreen/> */}
      <Contact/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});