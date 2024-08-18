import {
  StyleSheet, ScrollView, Text, SafeAreaView, TextInput
} from 'react-native';
import React, { useState } from 'react';
import WideButton from '../../components/WideButton';

/* 
Pages:
EmailPassword.js
VerifyEmail.js
UserInfo.js
*/

const EmailPassword = ({ navigation }) => {
    // Style the navigation header up top
    React.useEffect(() => {
        navigation.setOptions({
            title: "",
            headerShadowVisible: false,
            headerTintColor: 'black',
        });
    }, [navigation]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validFields, setValidFields] = useState(true);

    const onSubmit = () => {
        // Validate email & password
        // If all good, navigate to next page
        // If something's up, display red error msg

        const emailRegex = new RegExp(
            '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
        );
        let validEmail = emailRegex.test(email);
        let passwordsMatch = (password===confirmPassword)
        if (validEmail && passwordsMatch) {
            setValidFields(true)
            navigation.navigate('VerifyEmail')
        }
        else {
            setValidFields(false)
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
            {/* keyboardShouldPersistTaps lets keyboard disappear when you tap outside text input */}
            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={styles.titleText}>Let's create your account</Text>

                <Text style={styles.labelText}>Type in your email address</Text>
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.labelText}>Set up a password</Text>
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

                <Text style={styles.labelText}>Confirm your password</Text>
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Re-enter password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                {/* Show red error msg if user hit 'Next' button, but fields are invalid */}
                {/* Fields are invalid if email not in right format, or 2 passwords don't match */}
                {!validFields && (
                    <Text style={styles.errorMsg}>
                        Invalid email or passwords don't match. Please check your fields.
                    </Text>
                )}

                {/* Only make button usable if all fields filled out */}
                {(email && password && confirmPassword) ? (
                    <WideButton text="Next" onPressFunc={onSubmit} useGradient={true} />
                ) : (
                    <WideButton text="Next" useGradient={true}/>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
    },
    titleText: {
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
    errorMsg: {
        color: 'red',
        marginBottom: 20,
    },
    nextButton: {
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default EmailPassword;