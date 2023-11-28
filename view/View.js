import React, { useEffect, useState, useRef } from "react";
import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { getBooksPerPage } from "../viewModel/ViewModel";

export default function ViewApp({ books, setBooks, tableHead, setTableHead }) {
  const [page, setPage] = useState(1);
  const [tableWidth, setTableWidth] = useState(
    Dimensions.get("window").width * 0.7
  );
  const perPage = 10;

  useEffect(() => {
    const handleResize = () => {
      setTableWidth(Dimensions.get("window").width * 0.7);
    };
    Dimensions.addEventListener("change", handleResize);

    return () => {
      Dimensions.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    getBooksPerPage(page).then((book) => {
      setBooks(book);
      setTableHead(["id", "title", "autor", "genre"]);
    });
  }, [page]);

  return (
    <View style={{ width: tableWidth, borderWidth: 1, borderColor: "gray" }}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "gray" }}>
        <Row
          data={tableHead}
          textStyle={{ textAlign: "center", fontWeight: "bold" }}
          style={styles.headerStyle}
        />
        <Rows
          data={books}
          textStyle={{ textAlign: "center" }}
          style={styles.rowStyle}
        />
      </Table>
      <View style={styles.buttonContainer}>
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
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  headerStyle: {
    borderWidth: 1,
    borderColor: "gray",
  },
  rowStyle: {
    borderWidth: 1,
    borderColor: "gray",
  },
});
