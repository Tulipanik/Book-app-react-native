import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";
import * as search from "../viewModel/SearchViewModel";

export default function SearchingFormsView({ books, setBooks }) {
  const [author, SetAuthor] = useState("");
  const [genre, SetGenre] = useState("");
  const [id, SetId] = useState("");

  const searchAuthor = () => {
    search.handleAuthorSearch(author).then((book) => setBooks(book));
  };

  const searchGenre = () => {
    console.log(genre);
  };

  const searchId = () => {
    search.handleIdSearch(id).then((book) => setBooks(book));
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
          <Text style={styles.whiteText}>Submit</Text>
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
          <Text style={styles.whiteText}>Submit</Text>
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
          <Text style={styles.whiteText}>Submit</Text>
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
});
