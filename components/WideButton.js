import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/* 
This is a wide button almost the width of the phone screen.
Define onPress function outside this file, when you use this component

Props:
text (String): The text inside the button (ex: "Login")
bgColor (String): Hex color of the button (ex: "#272727", default is 'white')
textColor (String): Hex color of text inside button (ex: "#FFFFFF", default is 'black')
onPressFunc (Function): Function you wanna perform when user presses this button
    Ex: const log = () => {
            console.log("Sup");
        };
    Note: If no onPressFunc passed in, button is disabled, user can't press it.
useGradient (boolean): Boolean indicating whether or not button is gradient-colored.
    Note: If this is true, bgColor & textColor aren't used
*/
const WideButton = ({ text, bgColor, textColor, onPressFunc, useGradient }) => {
    const windowWidth = Dimensions.get('window').width;

    // Put styles here so we can use inputted props
    // FLAT COLOR BUTTON STYLES
    const buttonStyles = {
        marginVertical: 5,
        backgroundColor: bgColor || 'white',
        width: windowWidth-40,
        height: 48,
        borderRadius: 39,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const textStyles = {
        fontSize: 15,
        fontWeight: '600',
        color: textColor || 'black'
    };
    // GRADIENT COLOR BUTTON STYLES
    const gradientButtonStyles = {
        marginVertical: 5,
        width: windowWidth-40,
        height: 48,
        borderRadius: 39,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const gradientButtonTextStyles = {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
    }

    // Disable this button if no onPressFunc passed in.
    const disabled = onPressFunc ? false : true;

    if (useGradient) {
        if (disabled) {
            // Disabled gradient button
            return (
                <TouchableOpacity disabled={true} >
                    <LinearGradient
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: 0 }}   
                        colors={['#b1d4fc', '#c6acfa']}
                        style={gradientButtonStyles}>
                        <Text style={gradientButtonTextStyles}>{text}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        }
        // Regular gradient button
        return (
            <TouchableOpacity onPress={onPressFunc} >
                <LinearGradient
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 1, y: 0 }}   
                    colors={['#519DF6', '#9561FB']}
                    style={gradientButtonStyles}>
                    <Text style={gradientButtonTextStyles}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    
    // Flat color button
    return (
        <TouchableOpacity style={buttonStyles} disabled={disabled} onPress={onPressFunc}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
};

export default WideButton;