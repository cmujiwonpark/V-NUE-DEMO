import {
    StyleSheet, View, Text, SafeAreaView, TextInput
} from 'react-native';
import React, { useState } from 'react';
import WideButton from '../components/WideButton';

const LogIn = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            title: "",
            headerShadowVisible: false,
            headerTintColor: 'black',
        });
    }, [navigation]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navBegin = () => {
        navigation.navigate('Welcome');
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to meet again</Text>
                
                <Text style={styles.labelText}>Type in your email address</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.labelText}>Type in your password</Text>
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                
                {(email && password) ? (
                    <WideButton text="Login" onPressFunc={navBegin} useGradient={true} />
                ) : (
                    <WideButton text="Login" useGradient={true}/>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 40
    },
    labelText: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 20
    },
    textInput: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        marginBottom: 40,
        // borderBottomColor: "#9561FB"
    },
});


export default LogIn;