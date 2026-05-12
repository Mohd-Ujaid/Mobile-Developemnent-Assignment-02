import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NotesContext } from "../store/NotesContext";
import { ThemeContext } from "../store/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link } from "expo-router";

const Addnotes = () => {
  const { theme, isDark } = useContext(ThemeContext);
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;
    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          isDark && { backgroundColor: theme.background },
        ]}
      >
        <View>
            <Pressable style={styles.backButton}>
          <Link href="/index" >
              <Ionicons
                name="arrow-back"
                size={24}
                color={isDark ? theme.text : theme.text}
              />
          </Link>
            </Pressable>

          <Text style={[styles.title, isDark && { color: theme.text }]}>
            Add Notes
          </Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
          >
            <TextInput
              placeholder="Enter Your Title Here"
              value={title}
              onChangeText={setTitle}
              style={[
                styles.inputTitle,
                isDark && { backgroundColor: theme.card, color: theme.text },
              ]}
              placeholderTextColor={isDark ? theme.text : theme.text}
            />
            <TextInput
              placeholder="Enter Your Content Here "
              value={content}
              onChangeText={setContent}
              style={[
                styles.inputContent,
                isDark && { backgroundColor: theme.card, color: theme.text },
              ]}
              placeholderTextColor={isDark ? theme.text : theme.text}
              multiline
            />
          </KeyboardAvoidingView>

          <Pressable
            style={[
              styles.saveButton,
              isDark && { backgroundColor: theme.text },
            ]}
            onPress={handleSave}
          >
            <Text
              style={[
                styles.saveButtonText,
                isDark && { color: theme.background },
              ]}
            >
              Save
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Addnotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  backButton: {
    position: "relative",
    top: 31,
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },

  inputTitle: {
    fontSize: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  inputContent: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    textAlignVertical: "top",
    minHeight: 300,
  },
  saveButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
