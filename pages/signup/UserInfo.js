import {
    StyleSheet, ScrollView, Text, SafeAreaView, TextInput, View
} from 'react-native';
import React, { useState } from 'react';
import WideButton from '../../components/WideButton';
import { Dropdown } from 'react-native-element-dropdown';
  

const allRegions = [
    { label: 'United States', value: 'USA' },
    { label: 'South Korea', value: 'KOR' },
    { label: 'Japan', value: 'JPN' },
];

const UserInfo = ({ navigation }) => {
    // Style the navigation header up top
    React.useEffect(() => {
        navigation.setOptions({
            title: "",
            headerShadowVisible: false,
            headerTintColor: 'black',
        });
    }, [navigation]);

    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    // Birthday fields
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");

    const [validFields, setValidFields] = useState(true);

    const onSubmit = () => {
        const validBday = (
            month.length===2 && day.length===2 && year.length===4
        )
        
        if (name && validBday && region) {
            setValidFields(true)
            navigation.navigate('Welcome', { navFrom: 'signup' })
        }
        else {
            setValidFields(false)
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
            {/* keyboardShouldPersistTaps lets keyboard disappear when you tap outside text input */}
            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={styles.titleText}>Let us get to know about you</Text>

                <Text style={styles.labelText}>Type in how you want to be called</Text>
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Text style={styles.labelText}>Type in your birthday</Text>
                {/* 3 Separate fields for MM-DD-YYYY birthdate */}
                <View style={styles.datePickerContainer}>
                    <TextInput 
                        style={styles.dateInput}
                        underlineColorAndroid="transparent"
                        placeholder="MM"
                        autocomplete="birthdate-month"
                        inputMode="numeric"
                        maxLength={2}
                        value={month}
                        onChangeText={(text) => {setMonth(text)}}
                    />
                    <TextInput 
                        style={styles.dateInput}
                        underlineColorAndroid="transparent"
                        placeholder="DD"
                        autocomplete="birthdate-day"
                        inputMode="numeric"
                        maxLength={2}
                        value={day}
                        onChangeText={(text) => setDay(text)}
                    />
                    <TextInput 
                        style={styles.dateInput}
                        underlineColorAndroid="transparent"
                        placeholder="YYYY"
                        autocomplete="birthdate-year"
                        inputMode="numeric"
                        maxLength={4}
                        value={year}
                        onChangeText={(text) => setYear(text)}
                    />
                </View>

                <Text style={styles.labelText}>Choose your region</Text>
                <Dropdown 
                    style={styles.dropdown} 
                    labelField="label"
                    valueField="value"
                    data={allRegions} 
                    value={region}
                    onChange={item => {setRegion(item.value)}} 
                />


                {/* Show red error msg if user hit 'Next' button, but fields are invalid */}
                {/* Fields are invalid if email not in right format, or 2 passwords don't match */}
                {!validFields && (
                    <Text style={styles.errorMsg}>
                        Please fill out all fields
                    </Text>
                )}

                {/* Only make button usable if all fields filled out */}
                {(name && month && day && year && region) ? (
                    <WideButton text="Next" useGradient={true} onPressFunc={onSubmit}/>
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
    datePickerContainer: {
        flexDirection: 'row',
    },
    dateInput: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        marginBottom: 40,
        marginRight: 15,
        paddingHorizontal: 5,
    },
    errorMsg: {
        color: 'red',
        marginBottom: 20,
    },
    dropdown: {
        borderBottomWidth: 1,
        marginBottom: 40
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


export default UserInfo;