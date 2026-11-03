import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nome = "Bruna Maciel"
  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
