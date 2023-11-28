import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";
import * as search from "../viewModel/SearchViewModel";

export default function SearchingFormsView({ books, setBooks, setTableHead }) {
  const [author, SetAuthor] = useState("");
  const [genre, SetGenre] = useState("");
  const [id, SetId] = useState("");

  const searchAuthor = () => {
    search.handleAuthorSearch(author).then((book) => {
      setTableHead(book.pop());
      setBooks(book);
    });
  };

  const searchGenre = () => {
    search.handleGenreSearch(genre).then((book) => {
      setTableHead(book.pop());
      setBooks(book);
    });
  };

  const searchId = () => {
    search.handleIdSearch(id).then((book) => {
      setTableHead(book.pop());
      setBooks(book);
    });
  };

  return (
    <View>
      <View>
        <Text style={styles.whiteText}>Searching author</Text>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Write Author"
          onChange={(e) => SetAuthor(e.target.value)}
        ></TextInput>
        <Pressable onPress={searchAuthor}>
          <Text style={[styles.whiteText, styles.buttons]}>Submit</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.whiteText}>Searching genre</Text>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Write Genre"
          onChange={(e) => SetGenre(e.target.value)}
        ></TextInput>
        <Pressable onPress={searchGenre}>
          <Text style={[styles.whiteText, styles.buttons]}>Submit</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.whiteText}>Searching id</Text>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Write id"
          onChange={(e) => SetId(e.target.value)}
        ></TextInput>
        <Pressable onPress={searchId}>
          <Text style={[styles.whiteText, styles.buttons]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  whiteText: {
    color: "#ffffff",
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 5,
  },
  buttons: {
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
