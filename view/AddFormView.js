import { useEffect, useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import { addForm } from "../viewModel/ViewModel";
import BookModel from "../models/BookModel";

export default function AddFormView() {
  const [status, setStatus] = useState(0);
  const book = new BookModel({});

  const add = () => {
    console.log("witam");
    addForm(book).then((state) => {
      console.log(state);
      if (state) {
        setStatus(1);
      } else {
        setStatus(-1);
      }
    });
  };

  const update = () => {};

  return (
    <View>
      <View>
        {status == 1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Book correctly added
          </Text>
        )}
        {status == -1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Error occured while adding book
          </Text>
        )}
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Title"
          onChange={(e) => book.setTitle(e.target.value)}
        ></TextInput>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Author"
          onChange={(e) => book.setAuthor(e.target.value)}
        ></TextInput>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Genre"
          onChange={(e) => book.setGenre(e.target.value)}
        ></TextInput>
        {/* <TextInput style={[styles.whiteText, styles.inputStyle]} inputMode="numeric"></TextInput> */}
        <Pressable onPress={add}>
          <Text style={[styles.whiteText]}>Submit</Text>
        </Pressable>
      </View>
      <View>
        {status == 1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Book correctly added
          </Text>
        )}
        {status == -1 && (
          <Text style={[styles.whiteText, styles.inputStyle]}>
            Error occured while adding book
          </Text>
        )}
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Title"
          onChange={(e) => book.setTitle(e.target.value)}
        ></TextInput>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Author"
          onChange={(e) => book.setAuthor(e.target.value)}
        ></TextInput>
        <TextInput
          style={[styles.whiteText, styles.inputStyle]}
          placeholder="Genre"
          onChange={(e) => book.setGenre(e.target.value)}
        ></TextInput>
        {/* <TextInput style={[styles.whiteText, styles.inputStyle]} inputMode="numeric"></TextInput> */}
        <Pressable onPress={add}>
          <Text style={[styles.whiteText]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "#ffffff",
    fontSize: 16,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    margin: 2,
  },
});
