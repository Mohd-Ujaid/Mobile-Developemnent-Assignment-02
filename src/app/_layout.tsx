import { Stack } from "expo-router";
import { NotesProvider } from "../store/NotesContext";
import { ThemeProvider } from "../store/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </NotesProvider>
    </ThemeProvider>
  );
}
