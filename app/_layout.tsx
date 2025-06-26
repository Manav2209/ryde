
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import "./globals.css";
import 'react-native-reanimated';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'



SplashScreen.preventAutoHideAsync(); // prevent auto hide

export default function RootLayout() {



  useEffect(() => {
    const prepare = async () => {
      // preload assets here if needed
      await new Promise(resolve => setTimeout(resolve, 2000)); // fake loading
      await SplashScreen.hideAsync(); // hide splash screen
    };
    prepare();
  }, [])
  
  
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack screenOptions={
        {
          headerShown :false
        }
      }>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{headerShown : false}}/>
      </Stack>
      </ClerkProvider>
      
    
  );
}
