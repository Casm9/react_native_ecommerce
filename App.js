import ProductList from "./src/screens/ProductListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./src/screens/BottomTabs";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("events triggered", fontsLoaded);
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts are not loaded");
    return null;
  } else {
    console.log("Fonts are loaded")
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}