import { View, Image, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/*
Props:
picUrl: String
gradientColors: [String]
size: int
*/
const AvatarCircle = ({ picUrl, gradientColors, size }) => {
    // Styles located in here to use props
    const containerStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
    };
    const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: size / 2
    };
    const gradientContainerStyle = {
        flex: 1,
        padding: size / 26
    }
    const imageViewStyle = {
        flex: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: size / 26
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={gradientContainerStyle}
            >
                <View style={imageViewStyle}>
                    <Image source={{ uri: picUrl }} style={imageStyle} />
                </View>
            </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        aspectRatio: 1, // To maintain aspect ratio
    },
});


export default AvatarCircle;