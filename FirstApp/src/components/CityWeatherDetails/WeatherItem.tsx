import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherItem = ({ text, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '14px',
    fontWeight: 700,
    marginBottom: 5,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 35,
  },
});

export default WeatherItem;
