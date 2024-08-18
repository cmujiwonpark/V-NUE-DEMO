import React, {useState} from 'react';
import { 
    StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView,
    View, Text, TouchableOpacity, StatusBar, Image, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SafeAreaAndroid from "../components/SafeViewAndroid";
import AvatarCircle from '../components/AvatarCircle';


// This is the main chat room users interact with, TODO
const MessagingScreen = ({ navigation, route }) => {

    // Grab params from route
    const creatorName = route.params.creatorName;
    const profilePictureURL = route.params.profilePictureURL;
    const profileRingColor = route.params.profileRingColor;

    // Style the navigation header up top
    React.useEffect(() => {
        navigation.setOptions({
            // Replace builtin header w/ custom header altogether
            header: () => (
                customHeader(creatorName, profilePictureURL, profileRingColor, navigation)
            )
        });
    }, [navigation]);

    const [msg, setMsg] = useState("");

    return (
        <SafeAreaView style={ SafeAreaAndroid({ additionalPadding: 10 }) }>
            {/* Use KeyboardAvoidingView to make TextInput pop up above 
                the keyboard when user is typing out a msg */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset='160'
                style={styles.container}
            >
                {/* Area w/ all the chat bubbles */}
                <ScrollView 
                    keyboardShouldPersistTaps="handled" 
                    style={styles.messagesContainer}>
                    <Text style={{marginTop: 20}}>
                        TODO: Insert text bubbles here! {"\n"}Might replace this ScrollView w/ FlatList?
                    </Text>
                </ScrollView>

                {/* Bottom bar where user types & sends msgs */}
                <View style={styles.bottomContainer}>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            placeholder="Start typing..."
                            value={msg}
                            onChangeText={(text) => setMsg(text)}
                        />
                        <TouchableOpacity 
                            style={styles.sendButton}
                            // TODO: Make the send button actually do something useful
                            onPress={() =>console.log("Current Msg: "+msg)}
                        >
                            <Image source={require('../assets/send-button.png')} style={styles.sendIcon} />
                        </TouchableOpacity>
                    </View>  
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};


function customHeader(name, pfpUrl, ringColors, navigation) {
    const containerStyles = {
        flexDirection: "row",
        // Height is 140, add height of status bar if this is an android device
        height: Platform.OS === "android" ? StatusBar.currentHeight + 140 : 140,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 23
    }
    const leftContainerStyles = {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    }
    const textContainerStyles = {
        marginLeft: 10,
    }
    const nameTextStyles = {
        fontSize: 16,
        fontWeight: '600',
        color: '#2680E9',
        marginBottom: 5,
    }
    const bottomRowStyles = {
        flexDirection: 'row',
    }
    const oshiIconStyles = {
        aspectRatio: .9, //Keep icon from being stretched/cropped
        width: 12
    }
    const subscriberTextStyles = {
        fontSize: 12,
        color: '#2680E9',
    }
    const rightIconStyles = {
        marginLeft: 'auto'
    }

    return (
        <SafeAreaView style={containerStyles}>
            <View style={leftContainerStyles}>
                <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-chevron-back" size={30} color="black" />
                </TouchableOpacity>
                <AvatarCircle 
                    picUrl={pfpUrl} 
                    gradientColors={ringColors} 
                    size={60} />
                <View style={textContainerStyles}> 
                    <Text style={nameTextStyles}>{name}</Text>
                    <View style={bottomRowStyles}>
                        <Image source={require('../assets/vnue-logo-gradient.png')} style={oshiIconStyles} />
                        {/* TODO: Make this number non-hardcoded!! */}
                        <Text style={subscriberTextStyles}> + 23</Text>
                    </View>
                </View>
            </View>

            {/* TODO: Implement onPress() functionality */}
            <TouchableOpacity style={rightIconStyles}>
                <Ionicons name="ios-menu-outline" size={30} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesContainer: {
        paddingHorizontal: 23,
        backgroundColor: '#EAEAEA'
    },
    bottomContainer: {
        paddingHorizontal: 23,
        paddingTop: 13,
        backgroundColor: 'white'
    },
    textInputContainer: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 20,
    },
    sendButton: {
        marginLeft: 'auto',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 5,
    },
    sendIcon: {
        aspectRatio: 1.7,
        height: 28,
    }
});

export default MessagingScreen;