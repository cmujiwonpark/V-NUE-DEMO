import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AvatarCircle from './AvatarCircle';

/* 
Sample chatInfo: 
{
    creatorName: "Mousey",
    profilePictureURL: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/2e/Ironmouse_Portrait_04_2021.png/revision/latest?cb=20210807142833",
    profileRingColor: ["#F48BDD", "#519DF6"],
    latestMessagePayload: "This app is cool!",
    latestMessageTimestamp: "23/12/15"
}
*/
const ChatRow = ({ chatInfo }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={styles.container} 
            // NOTE: Edit props below when firebase schema finalized
            onPress={() => navigation.navigate('Messaging', {
                creatorName: chatInfo.creatorName,
                profilePictureURL: chatInfo.profilePictureURL,
                profileRingColor: chatInfo.profileRingColor,
            })} 
        >
            <AvatarCircle 
                picUrl = {chatInfo.profilePictureURL}
                gradientColors = {chatInfo.profileRingColor}
                size = {55}
            />

            {/* Name, date, and latest msg */}
            <View style={styles.textContainer}>
                <View style={styles.topRowTextContainer}>
                    <Text style={styles.nameText}>{chatInfo.creatorName}</Text>
                    <Text style={styles.dateText}>{chatInfo.latestMessageTimestamp}</Text>
                </View>
                <Text style={styles.messageText} numberOfLines={1}>{chatInfo.latestMessagePayload}</Text>
            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    topRowTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    nameText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },
    dateText: {
        marginLeft: 'auto',
        fontSize: 10,
        fontWeight: '500',
        color: "#5E5E5E"
    },
    messageText: {
        fontSize: 11,
        color: "#5E5E5E"
    },
});

export default ChatRow;