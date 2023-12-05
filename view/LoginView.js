import { useState } from "react";
import { TextInput, View, Pressable, Text, StyleSheet } from "react-native";
import TokenService from "../.Shared/authService";

export default function loginView({ setAuthentication, setRegister }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const getAuthorization = () => {
    const loginData = {
      username: login,
      password: password,
    };
    TokenService.saveToken(loginData);
    setAuthentication(TokenService.isAuthenticated());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="login"
        onChange={(e) => setLogin(e.target.value)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <Pressable onPress={getAuthorization}>
        <Text style={styles.button}>Log in</Text>
      </Pressable>
      <Pressable onPress={() => setRegister(true)}>
        <Text style={styles.button}>register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bd2619",
    height: "20vh",
    width: "50vw",
  },
  header: {
    margin: 2,
    color: "white",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    margin: 2,
    color: "white",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#bd2619",
    color: "#ffffff",
    backgroundColor: "#61120c",
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 3,
    width: 100,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 20,
  },
});
