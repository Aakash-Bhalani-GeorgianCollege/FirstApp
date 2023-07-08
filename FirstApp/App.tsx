import { SafeAreaView, Settings, StyleSheet, View } from 'react-native';
import { DARK_COLORS } from './src/styles/Colors';
import SettingsPage from './src/components/SettingsPage';
import HomePage from './src/components/HomePage';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FravoriteScreen/> */}
      <SettingsPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});