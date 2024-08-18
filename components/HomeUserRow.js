import { View, Text, StyleSheet } from 'react-native';
import AvatarCircle from './AvatarCircle';

/* 
Props:
Creator obj
- profile pic
- name/text
- gradient colors (topColor, bottomColor)
*/


const HomeUserRow = ({ user }) => {
    return (
        <View style={styles.container}>
            <AvatarCircle 
                picUrl = {user.profilePictureURL}
                gradientColors = {["#FFFFFF", "#FFFFFF"]}
                size = {58}
            />
            <Text style={styles.text}>{user.name}</Text>
        </View>
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
});

export default HomeUserRow;