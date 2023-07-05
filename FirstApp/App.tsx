import { StyleSheet, View } from 'react-native';
import FlexBox2 from './src/components/FlexBox2'

export default function App() {
  return (
    <View style={styles.container}>
      <FlexBox2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
