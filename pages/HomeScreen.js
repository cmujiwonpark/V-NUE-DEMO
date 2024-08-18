// React builtin imports
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// Project imports
import TitleText from '../components/TitleText';
import SectionHeaderText from '../components/SectionHeaderText'
import HomeCreatorRow from '../components/HomeCreatorRow';
import HomeUserRow from '../components/HomeUserRow';
import HorizontalRule from '../components/HorizontalRule';
import HomeNewCreatorCard from '../components/HomeNewCreatorCard';
import SafeAreaAndroid from "../components/SafeViewAndroid";
import { CREATORS, USER } from '../DummyData';

const HomeScreen = () => {
    // Loop thru dummy data, create components for each creator
    const friendRows = CREATORS.map((c) => <HomeCreatorRow key={c.id} 
                                                            creator={c} 
                                                            isFriend={true} 
                                                            isOshi={false} />);
    const newCreators = CREATORS.map((c) => <HomeNewCreatorCard key={c.id} creator={c} />);

    return (
        <SafeAreaView style={ SafeAreaAndroid({additionalPadding: 10}) }>
            <ScrollView style={styles.container}>
                <TitleText text="Home" useGradient={true} />
                <SectionHeaderText text="My Profile" />
                <HomeUserRow user={USER} />

                <HorizontalRule />
            
                <SectionHeaderText text="My Oshi" />
                <HomeCreatorRow creator={CREATORS[0]} isFriend={true} isOshi={true} />

                <HorizontalRule />
            
                <SectionHeaderText text="New to V-NUE" />
                <ScrollView horizontal={true} style={{marginHorizontal: -23}}>{newCreators}</ScrollView>

                <HorizontalRule />

                <SectionHeaderText text="Friends" />
                {friendRows}
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

export default HomeScreen;