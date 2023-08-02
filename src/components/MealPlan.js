import { Button, View, StyleSheet, Text } from 'react-native';

export default function MealPlan({navigation}) {
    return (
        <View style={styles.button}>
          <Text>{'Meal Plan'}</Text>
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