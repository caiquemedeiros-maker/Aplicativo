import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📚 PlanMente   </Text>

      <Text style={styles.texto}>
        Bem-vindo! Organize seus estudos e acompanhe suas metas.
      </Text>

      <TouchableOpacity
        
    style={styles.botao}
      onPress={() => navigation.navigate("Lista")}
        >
      <Text style={styles.textoBotao}>Minhas Tarefas 🎯</Text>
      
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.textoBotao}>Meu Perfil 👋</Text>
      </TouchableOpacity>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#91ff91",
  },

  titulo: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32",
    marginBottom: 30,
  },

  texto: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    color: "#2E7D32",
    
  },

  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});