import {
    StyleSheet, View, Text, SafeAreaView
} from 'react-native';
import React from 'react';
import WideButton from '../../components/WideButton';


const VerifyEmail = ({ navigation }) => {
    // Style the navigation header up top
    React.useEffect(() => {
        navigation.setOptions({
            title: "",
            headerShadowVisible: false,
            headerTintColor: 'black',
        });
    }, [navigation]);

    const navUserInfo = () => {
        navigation.navigate("UserInfo");
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
            <View style={styles.container}>
                <Text style={styles.titleText}>Verify your email</Text>

                <Text style={styles.labelText}>
                    We've sent a confirmation email to your email address.
                </Text>

                <WideButton text="Next" onPressFunc={navUserInfo} useGradient={true} />
            </View>
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
        marginBottom: 20,
    },
});

export default VerifyEmail;