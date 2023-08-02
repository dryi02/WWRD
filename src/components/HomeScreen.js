import { Button, View, StyleSheet, Text } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.button}>
          <Text>{'Home Screen'}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    },
  });