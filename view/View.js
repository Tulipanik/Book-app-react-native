import React from "react";
import { useEffect, useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { getBooksPerPage } from "../viewModel/ViewModel";

export default function ViewApp({ books, setBooks }) {
  const tableHead = ["id", "title", "author", "genre", "release date"];
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    getBooksPerPage(page).then((book) => {
      setBooks(book);
    });
  }, [page]);

  return (
    <View>
      <Table borderStyle={{ borderWidth: 1, borderColor: "gray" }}>
        <Row
          data={tableHead}
          textStyle={{ textAlign: "center", fontWeight: "bold" }}
        />
        <Rows data={books} textStyle={{ textAlign: "center" }} />
      </Table>
      <View>
        <Pressable onPress={() => setPage(page - perPage)}>
          <Text style={styles.buttons}>{"<"}</Text>
        </Pressable>
        <Pressable onPress={() => setPage(page + perPage)}>
          <Text style={styles.buttons}>{">"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#bd2619",
    color: "#ffffff",
  },
});
