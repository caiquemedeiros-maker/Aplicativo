import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email === "" || senha === "") {
      alert("Preencha email e senha");
      return;
    }

    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📚PlanMente</Text>
      <Text style={styles.subtitulo}>
       Organize seus estudos e alcance seus objetivos 🎯
      </Text> 
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
    <TouchableOpacity
  style={styles.botao}
  onPress={entrar}
>
  <Text style={styles.textoBotao}>Entrar🧠</Text>
</TouchableOpacity>
</View>
      
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  padding: 25,
  backgroundColor: "#91ff91",
  },

  
  titulo: {
  fontSize: 60,
  fontWeight: "bold",
  textAlign: "center",
  color: "#0d8b08",
  marginBottom: 30,

  },
  input: {
  borderWidth: 1,
  borderColor: "#D1D5DB",
  backgroundColor: "#c7fad2",
  padding: 12,
  marginBottom: 15,
  borderRadius: 15,
  bordercolor: "#fffb00"
},

  subtitulo: {
  textAlign: "center",
  color: "#2E7D32",
  marginBottom: 30,
  fontSize: 30
  
  },

  botao: {
  backgroundColor: "#2E7D32",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
},

textoBotao: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "bold"
},

});