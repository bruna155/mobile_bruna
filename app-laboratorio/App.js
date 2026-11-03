import { StyleSheet, Text, View } from 'react-native';
const aluno = {
nome: 'Ana Beatriz',
idade: 23,
cidade: "Cruzeiro do Oeste",

};
export default function App() {
  const nome = "Bruna Maciel"
  return (
    <View style={styles.container}>
      <Text>{aluno.nome}</Text>
      <Text>{aluno.idade}</Text>
      <Text>{aluno.cidade}</Text>
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
