import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { NotesContext } from "../store/NotesContext";
import { ThemeContext } from "../store/ThemeProvider";

const Notes = ({ notes }) => {
  const { deleteNote } = useContext(NotesContext);
  const { theme, isDark } = useContext(ThemeContext);

  if (!notes || notes.length === 0) {
    return (
      <View
        style={[
          styles.notesContainer,
          isDark && { backgroundColor: theme.card },
        ]}
      >
        <Text style={[styles.emptyText, isDark && { color: theme.text }]}>
          No notes present
        </Text>
      </View>
    );
  }

  const confirmDelete = (index) => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteNote(index),
      },
    ]);
  };

  const handleEdit = () => {
    Alert.alert("Edit Note", "Are you sure you want to edit this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Edit",
        style: "destructive",
        onPress: () => {
          Alert.alert("working on it...");
        },
      },
    ]);
  };

  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => (
        <View
          style={[
            styles.notesContainer,
            isDark && { backgroundColor: theme.card },
          ]}
        >
          <Text style={[styles.title, isDark && { color: theme.text }]}>
            {item.title}
          </Text>
          <Text
            style={[styles.content, isDark && { color: theme.text }]}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {item.content}
          </Text>
          <Text style={[styles.cratedAt, isDark && { color: theme.subtext }]}>
            Created At : {item.cratedAt}
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable title="Edit" onPress={() => handleEdit()}>
              <Text
                style={[styles.buttonText, isDark && { color: theme.text }]}
              >
                Edit
              </Text>
            </Pressable>
            <Pressable title="Delete" onPress={() => confirmDelete(item.id)}>
              <Text
                style={[styles.buttonText, isDark && { color: theme.text }]}
              >
                Delete
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    ></FlatList>
  );
};

export default Notes;

const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    paddingVertical: 5,
  },
  cratedAt: {
    fontSize: 12,
    color: "#666",
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    paddingRight: 10,
  },
});
