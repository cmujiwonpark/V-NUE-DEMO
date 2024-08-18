import { Text, StyleSheet } from 'react-native';

const SectionHeaderText = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black', // Default text color
    paddingVertical: 5,
  },
});

export default SectionHeaderText;