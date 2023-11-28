import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ViewApp from "./view/View";
import FormsView from "./view/FormsView";

export default function App() {
  const [books, setBooks] = useState([]);
  const [tableHead, setTableHead] = useState(["id", "title", "autor", "genre"]);

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 60,
  },
  menu: {
    flex: 1,
    width: "30%",
    backgroundColor: "#bd2619",
    color: "#ffffff",
    paddingLeft: 10,
  },
});
