import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AvatarCircle from './AvatarCircle';

/* 
Creator prop is like the one in DummyData,
Might need to simplify this obj later!

isOshi: boolean
*/
const HomeCreatorRow = ({ creator, isFriend, isOshi }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate('Add Friend', {
                creator: creator,
                isFriend: isFriend,
                isOshi: isOshi
            })} 
        >
            <AvatarCircle 
                picUrl = {creator.profilePictureURL}
                gradientColors = {creator.profileRingColor}
                size = {58}
            />
            <Text style={styles.text}>{creator.name}</Text>

            {/* Include app logo if this is user's oshi */}
            {isOshi && 
                <Image source={require('../assets/vnue-logo-gradient.png')} style={styles.oshiIcon} />
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 7,
    },
    text: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: '600',
        color: 'black', // Default text color
    },
    oshiIcon: {
        marginLeft: 'auto',
        aspectRatio: .9, //Keep icon from being stretched/cropped
        width: 16
    }
});

export default HomeCreatorRow;