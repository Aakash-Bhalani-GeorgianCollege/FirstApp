import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Onbording = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Onbording.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Weather Man</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 374,
    height: 554,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontFamily: 'PadykkeExpandedOne-Regular',
    fontSize: 24,
    color: 'white',
    marginTop: 16,
  },
});

export default Onbording;
