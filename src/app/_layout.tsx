import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Isso remove a barra superior do Expo
      }}
    />
  );
}