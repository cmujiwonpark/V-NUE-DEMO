import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const TitleText = ({ text, useGradient }) => {
    if (useGradient) {
        return (
            <MaskedView
                style={styles.mask}
                maskElement={
                    <Text style={styles.text}>{text}</Text>
                }
            >
                {/* Shows behind the mask, gradient colors */}
                  <LinearGradient
                      colors={['#9561FB', '#519DF6']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.gradientContainer}
                  />
            </MaskedView>
        );
      }
    
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', // Default text color
  },
  mask: {
    flex: 1, 
    flexDirection: 'row', 
    height: '100%', 
    paddingBottom: 20,
  },
  gradientContainer: {
    flex: 1,
    height: 37
  }
});

export default TitleText;