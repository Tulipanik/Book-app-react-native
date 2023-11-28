import { View, Pressable, Text, StyleSheet } from "react-native";
import SearchingFormsView from "./SearchingFormsView";
import AddFormView from "./AddFormView";
import DeleteFormView from "./DeleteFormView";
import { useState } from "react";
export default function FormsView({ style, books, setBooks, setTableHead }) {
  const [search, setSearch] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  return (
    <View style={style}>
      <Pressable onPress={() => setSearch(!search)}>
        <Text style={[styles.whiteText, styles.buttons]}>Searching tab</Text>
      </Pressable>
      {search && (
        <SearchingFormsView
          books={books}
          setBooks={setBooks}
          setTableHead={setTableHead}
        />
      )}
      <Pressable onPress={() => setEdit(!edit)}>
        <Text style={[styles.whiteText, styles.buttons]}>Editing tab</Text>
      </Pressable>
      {edit && <AddFormView />}
      <Pressable onPress={() => setDel(!del)}>
        <Text style={[styles.whiteText, styles.buttons]}>Deleting tab</Text>
      </Pressable>
      {del && <DeleteFormView />}
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "#ffffff",
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
