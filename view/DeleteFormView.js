import React from "react";
import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import * as viewModel from "../viewModel/DeleteViewModel";

export default function DeleteFormView() {
  const [genre, setGenre] = useState("");
  const [id, setId] = useState(0);
  const [all, setAll] = useState(0);
  const [genreStatus, setGenreStatus] = useState(0);
  const [idStatus, setIdStatus] = useState(0);

  const deleteGenre = () => {
    viewModel.deleteGenreForm(genre).then((status) => {
      if (status) {
        setGenreStatus(1);
      } else {
        setGenreStatus(-1);
      }
    });
  };

  const deleteId = () => {
    viewModel.deleteIdForm(id).then((status) => {
      if (status) {
        setIdStatus(1);
      } else {
        setIdStatus(-1);
      }
    });
  };

  const deleteAll = () => {
    viewModel.deleteAllForm().then((status) => {
      if (status) {
        setAll(1);
      } else {
        setAll(-1);
      }
    });
  };

  return (
    <View>
      {all == 1 && (
        <Text style={[styles.whiteText, styles.inputStyle]}>
          All books deleted succesfully
        </Text>
      )}
      {all == -1 && (
        <Text style={[styles.whiteText, styles.inputStyle]}>
          Error occured while deleting all
        </Text>
      )}
      <Pressable onPress={deleteAll}>
        <Text style={styles.whiteText}>Delete all</Text>
      </Pressable>
      <View>
        {genreStatus == 1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            All genre books deleted succesfully
          </Text>
        )}
        {genreStatus == -1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Error occured while deleting genre books
          </Text>
        )}
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
        {idStatus == 1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Id book deleted succesfully
          </Text>
        )}
        {idStatus == -1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Error occured while deleting id book
          </Text>
        )}
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
