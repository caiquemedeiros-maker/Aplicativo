import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,
} from "react-native";

export default function ListaScreen() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;

    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  }

  function excluirTarefa(indice) {
    const novaLista = [...tarefas];
    novaLista.splice(indice, 1);
    setTarefas(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎯 Minhas Tarefas</Text>

      <Text style={styles.contador}>
        Total de tarefas: {tarefas.length}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa..."
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <ScrollView>
        {tarefas.map((item, index) => (
          <View key={index} style={styles.cardTarefa}>
            <Text style={styles.textoTarefa}>
              📚 {item}
            </Text>

            <TouchableOpacity
              onPress={() => excluirTarefa(index)}
            >
              <Text style={styles.excluir}>
                🗑️ Excluir
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#91ff91",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32",
    marginTop: 20,
    marginBottom: 20,
  },

  contador: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    color: "#1B5E20",
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  cardTarefa: {
    backgroundColor: "#6aeb6f",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  textoTarefa: {
    fontSize: 18,
    color: "#1B5E20",
  },

  excluir: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
});