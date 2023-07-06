import { StyleSheet, View } from 'react-native';
import FlexBox2 from './src/components/FlexBox2'
import CityWeatherDetails from './src/components/CityWeatherDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlexBox2/> */}
      <CityWeatherDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
