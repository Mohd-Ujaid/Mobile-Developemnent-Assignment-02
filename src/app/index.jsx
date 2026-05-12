import { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Notes from "../components/Notes";
import { Link } from "expo-router";

import { ThemeContext } from "../store/ThemeProvider";

import { NotesContext } from "../store/NotesContext";

const { width } = Dimensions.get("window");

export default function Index() {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  const { notes } = useContext(NotesContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleSearch = () => {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredNotes(filtered);
  };

  const notesToDisplay = searchQuery.trim() === "" ? notes : filteredNotes;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          isDark && { backgroundColor: theme.background },
        ]}
      >
        <StatusBar style={isDark ? "light" : "dark"} />

        <View>
          <Text style={[styles.title, isDark && { color: theme.text }]}>
            NotesX
          </Text>

          <View style={styles.subTitleContainer}>
            <Text style={[styles.notesTitle, isDark && { color: theme.text }]}>
              My Notes
            </Text>
            <Pressable onPress={toggleTheme}>
              {isDark ? (
                <Ionicons name="moon" size={24} color="white" />
              ) : (
                <Ionicons name="sunny" size={24} color="black" />
              )}
            </Pressable>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
          >
            <View
              style={[
                styles.searchContainer,
                isDark && { backgroundColor: theme.card },
              ]}
            >
              <TextInput
                placeholder="Search"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={[styles.searchBar, isDark && { color: theme.text }]}
                placeholderTextColor={isDark ? theme.text : theme.text}
              />
              <Pressable onPress={handleSearch}>
                <Ionicons
                  name="search"
                  size={24}
                  color={isDark ? theme.text : theme.text}
                />
              </Pressable>
            </View>
          </KeyboardAvoidingView>

          <Notes notes={notesToDisplay} />
        </View>
        <Pressable
          style={[styles.addNoteButton, isDark && { backgroundColor: "white" }]}
        >
          <Link
            href="/addnotes"
            style={[styles.addNoteButtonText, isDark && { color: "#000" }]}
          >
            +
          </Link>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
    marginTop: 16,
  },
  searchContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
    borderColor: "#ccc",
  },
  notesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  addNoteButton: {
    position: "absolute",
    bottom: 70,
    right: (width - 70) / 2,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "hsla(0, 0%, 1%, 1.00)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  addNoteButtonText: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 32,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
