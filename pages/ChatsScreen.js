// React builtin imports
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// Project imports
import TitleText from '../components/TitleText';
import SafeAreaAndroid from "../components/SafeViewAndroid";
import ChatRow from '../components/ChatRow';
import { CHATS } from '../DummyData';

const ChatsScreen = () => {

    const chatRows = CHATS.map((c) => <ChatRow key={c.id} chatInfo={c} />);

    return (
        <SafeAreaView style={ SafeAreaAndroid({additionalPadding: 10}) }>
            <ScrollView style={styles.container}>
                <TitleText text="Chats" useGradient={true} />
                {chatRows}
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
        backgroundColor: 'white'
    }
});

export default ChatsScreen;