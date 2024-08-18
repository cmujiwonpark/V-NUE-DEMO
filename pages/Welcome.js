import {
    StyleSheet, View, Text, Image
} from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import WideButton from '../components/WideButton';

const Welcome = ({ navigation, route }) => {
    const navFrom = route.params ? route.params.navFrom : "";

    const navBegin = () => {
        navigation.navigate('MainTabs');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.hiText}>Hi, Dan!</Text>
            
            {/* Display diff text depending if user just signed up or logged in */}
            {(navFrom==="signup") ? 
                gradientText("Welcome to V-nue")
                :
                gradientText("Welcome back to\nV-nue")
            }
            
            <View style={styles.avatarContainer}>
                    <Image source={require('../assets/dalle.png')} style={styles.dalleImg} />
                    <Image source={require('../assets/dude.png')} style={styles.dudeImg} />
                    <Image source={require('../assets/yumi.png')} style={styles.yumiImg} />
            </View>
            <Text style={styles.descriptionText}>
                Connect with your Oshi directly{"\n"}and message them one on one.
            </Text>
            
            <WideButton text="Begin" onPressFunc={navBegin} useGradient={true}/>
        </View>
    );
};

// This is just the gradient text saying "Welcome to V-nue".
function gradientText( text ) {
    const setHeight = 90;
    const maskStyles = {
        flex: 1, 
        flexDirection: 'row', 
        height: setHeight, 
        paddingBottom: 50,
    };
    const textStyles = {
        fontSize: 30,
        fontWeight: 'bold',
        height: setHeight,
    };
    const gradientContainerStyles = {
        flex: 1,
        height: setHeight
    };

    return (
        <MaskedView
            style={maskStyles}
            maskElement={
                <Text style={textStyles}>{text}</Text>
            }
        >
            {/* Shows behind the mask, gradient colors */}
                <LinearGradient
                    colors={['#529CF5', '#5C30B5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={gradientContainerStyles}
                />
        </MaskedView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
        backgroundColor: 'white',
    },
    hiText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 115,
    },
    avatarContainer: {
        marginVertical: 40,
    },
    dalleImg: {
        width: 112,
        height: 112,
        marginHorizontal: 10,
        marginLeft: 40,
    },
    dudeImg: {
        width: 143,
        height: 143,
        marginHorizontal: 40,
        marginLeft: 170,
        marginVertical: -50,
    },
    yumiImg: {
        width: 180,
        height: 180,
        marginHorizontal: 10,
        marginLeft: 15,
    },
    descriptionText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
});

export default Welcome;