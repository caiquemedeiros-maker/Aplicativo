import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("./assets/images.jpg")}
        style={styles.fotoPerfil}/>

      <Text style={styles.titulo}>Meu Perfil 👋</Text>

      

      <Text style={styles.info}>
        Nome: Caique Silva de Medeiros
      </Text>

      <Text style={styles.info}>
        Email: caiquesilvamedeiros123@gmail.com
      </Text>
      

      <TouchableOpacity
      style={styles.botaoSair}
      onPress={() => navigation.navigate("Login")}
>
      <Text style={styles.textoBotao}>Sair</Text>
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
    color: "#0d8b08",
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 8
  
  },

  info: {
    width: "100%",
    fontSize: 25,
    backgroundColor: "#6aeb6f",
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,

  },

  fotoPerfil: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#2E7D32",
    marginTop: 25,
    marginBottom: 5,
    alignSelf: "center",
    marginRight: 70
    
  },

botaoSair: {
  width: "100%",
  backgroundColor: "#2E7D32",
  padding: 15,
  borderRadius: 15,
  alignItems: "center",
  marginBottom: 25,
},
textoBotao: {
  color: "#ffffff",
  fontSize: 25,
  fontWeight: "bold",
  alignItems: "center",
}
}
);