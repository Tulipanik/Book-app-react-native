import { useState } from "react";
import { TextInput, View, Pressable, Text, StyleSheet } from "react-native";
import * as useAuthViewModel from "../viewModel/authViewModel";

export default function RegisterView({ setRegister }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const registration = () => {
    const registerData = {
      username: login,
      password: password,
    };
    console.log(registerData);
    const register = useAuthViewModel.register(registerData);
    console.log(register);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration</Text>
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
      <Pressable onPress={registration}>
        <Text style={styles.button}>Register</Text>
      </Pressable>
      <Pressable onPress={() => setRegister(false)}>
        <Text style={styles.button}>log in</Text>
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
