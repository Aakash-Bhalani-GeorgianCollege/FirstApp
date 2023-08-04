import { SafeAreaView, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';
import { LIGHT_COLORS } from './src/styles/Colors';
import LoginScreen from './src/screens/LoginScreen';
import ContactUs from './src/components/Contact';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});