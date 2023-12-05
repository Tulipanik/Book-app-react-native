import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ViewApp from "./view/View";
import FormsView from "./view/FormsView";
import LoginView from "./view/LoginView";
import RegisterView from "./view/RegisterView";
import TokenService from "./.Shared/authService";

export default function App() {
  const [books, setBooks] = useState([]);
  const [tableHead, setTableHead] = useState(["id", "title", "autor", "genre"]);
  const [authentication, setAuthentication] = useState(
    TokenService.isAuthenticated()
  );
  const [register, setRegister] = useState(false);

  return (
    <View style={styles.container}>
      {authentication ? (
        <>
          <FormsView
            style={styles.menu}
            books={books}
            setBooks={setBooks}
            setTableHead={setTableHead}
          />
          <ViewApp
            books={books}
            setBooks={setBooks}
            tableHead={tableHead}
            setTableHead={setTableHead}
          />
          <StatusBar style="auto" />
        </>
      ) : (
        <View style={styles.loginContainer}>
          {register ? (
            <RegisterView setRegister={setRegister} />
          ) : (
            <LoginView
              setAuthentication={setAuthentication}
              setRegister={setRegister}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 60,
  },
  loginContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 1,
    width: "30%",
    backgroundColor: "#bd2619",
    color: "#ffffff",
    paddingLeft: 10,
  },
});
