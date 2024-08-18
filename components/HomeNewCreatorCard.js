import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/*
Creator prop is like the one in DummyData,
Might need to simplify this obj later!
*/
const HomeNewCreatorCard = ({ creator }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate('Add Friend', {
                creator: creator,
                isFriend: false,
                isOshi: false
            })} 
        >
            <Image source={{ uri: creator.profilePictureURL }} style={styles.image} />
            <Text style={styles.nameText}>{creator.name}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 7,
        paddingRight: 7
    },
    image: {
        height: 123,
        width: 107,
        flex: 1,
        borderRadius: 20,
    },
    nameText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black', // Default text color
    },
});

export default HomeNewCreatorCard;