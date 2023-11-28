import React from "react";
import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

export default function DeleteFormView() {
  const [genre, setGenre] = useState("");
  const [id, setId] = useState(0);

  const deleteGenre = () => {};

  const deleteId = () => {};

  const deleteAll = () => {};
  return (
    <View>
      <Pressable onPress={deleteAll}>
        <Text style={styles.whiteText}>Delete all</Text>
      </Pressable>
      <View>
        <Text style={styles.whiteText}>Searching genre</Text>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Write Genre"
          onChange={(e) => setGenre(e.target.value)}
        ></TextInput>
        <Pressable onPress={deleteGenre}>
          <Text style={styles.whiteText}>Submit</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.whiteText}>Searching id</Text>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Write id"
          onChange={(e) => setId(e.target.value)}
        ></TextInput>
        <Pressable onPress={deleteId}>
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
