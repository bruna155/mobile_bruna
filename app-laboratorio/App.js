import { StyleSheet, Text, View } from 'react-native';
// objeto: exatamente o da Aula 05
const aluno = {
  nome: "Ana Beatriz",
  turma: "3C",
  nota1: 7.5,
  nota2: 10,
};
// funcao com return: exatamente a da Aula 02
function calcularMedia(a) {
  return (a.nota1 + a.nota2) / 2;
}
function situacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  }
  return 'Em recuperacao';
}
export default function App() {
  const media = calcularMedia(aluno);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aluno.nome}</Text>
      Turma: {aluno.turma}
      <Text>Media: {media}</Text>
      <Text style={styles.situacao}>{situacao(media)}</Text>
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
