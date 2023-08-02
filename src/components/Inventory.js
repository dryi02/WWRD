import { Button, View, StyleSheet, Text } from 'react-native';

export default function Inventory({navigation}) {
    return (
        <View style={styles.button}>
          <Text>{'Inventory'}</Text>
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