import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile, Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFF0'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserProfile;