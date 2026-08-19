import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "@/context/ThemeContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </ThemeProvider>
  );
}
