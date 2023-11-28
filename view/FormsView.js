import { View, Pressable, Text } from "react-native";
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
        <Text>Searching tab</Text>
      </Pressable>
      {search && (
        <SearchingFormsView
          books={books}
          setBooks={setBooks}
          setTableHead={setTableHead}
        />
      )}
      <Pressable onPress={() => setEdit(!edit)}>
        <Text>Editing tab</Text>
      </Pressable>
      {edit && <AddFormView />}
      <Pressable onPress={() => setDel(!del)}>
        <Text>Deleting tab</Text>
      </Pressable>
      {del && <DeleteFormView />}
    </View>
  );
}
