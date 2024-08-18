import React from 'react'
import {
  StyleSheet, View, Text, Image, SafeAreaView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
// Our own custom components
import SafeAreaAndroid from "../components/SafeViewAndroid";
import WideButton from '../components/WideButton';


const Landing = ({ navigation }) => {
  const navLogin = () => {
    navigation.navigate('LogIn');
  };
  const navSignup = () => {
    navigation.navigate('EmailPassword')
  }

  return (
    <>
      <SafeAreaView style={ SafeAreaAndroid({flex:0, bgColor:"#9561FB"}) } />
      <SafeAreaView style={{flex: 1, backgroundColor: "#4124F2" }}>
        <LinearGradient
          colors={["#9561FB", "#4124F2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
          <Text style={styles.titleText}>Connect {"\n"}With {"\n"}Your Favorites</Text>
          <View style={styles.imgContainer}>
            <Image source={require('../assets/gawr-gura.png')} style={styles.guraImg} />
            <Image source={require('../assets/kizuna-ai.png')} style={styles.kizunaImg} />
          </View>

          {/* Login & Signup Buttons */}
          <WideButton text="Login" onPressFunc={navLogin} />
          <WideButton text="Sign up" bgColor='#272727' textColor='white' onPressFunc={navSignup} />

          {/* Terms & Conditions Statement */}
          <Text style={styles.termsText}>
            By signing up, you agree to our Terms. 
            See how we use your data in our Privacy Policy.
          </Text>

        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23
  },
  titleText: {
    fontSize: 43,
    fontWeight: 'bold',
    lineHeight: 43,
    color: 'white',
    marginTop: 40,
  },
  imgContainer: {
    marginVertical: 40,
    flexDirection: 'row'
  },
  guraImg: {
    width: 208,
    height: 208
  },
  kizunaImg: {
    marginTop: 150,
    marginLeft: -30,
    width: 164,
    height: 164,
    alignSelf: 'flex-end'
  },
  termsText: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 10,
  }
});


export default Landing;
