import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Bruna Maciel',
  idade: 17,
  cidade: 'Cascavel',
  nota1: 8.5,
  nota2: 10.0,
};

const media = calcularMedia(eu);

function calcularMedia(aluno) {
  return (aluno.nota1 + aluno.nota2) / 2;
}

function situacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  }
  return 'Em recuperação';
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.tituloTopo}>BOLETIM ESCOLAR</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>Nome:</Text>
          <Text style={styles.valor}>{eu.nome}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Idade:</Text>
          <Text style={styles.valor}>{eu.idade} anos</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Cidade:</Text>
          <Text style={styles.valor}>{eu.cidade}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Média:</Text>
          <Text style={styles.valor}>{media.toFixed(1)}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>Situação:</Text>
          <Text style={[styles.valor, media >= 6 ? styles.aprovado : styles.recuperacao]}>
            {situacao(media)}
          </Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Desenvolvido em Aula - Programação Mobile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  topo: {
    backgroundColor: '#2c3e50',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  tituloTopo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdde1',
    paddingVertical: 12,
  },
  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  valor: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  aprovado: {
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  recuperacao: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  rodape: {
    backgroundColor: '#34495e',
    padding: 20,
    alignItems: 'center',
  },
  textoRodape: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});