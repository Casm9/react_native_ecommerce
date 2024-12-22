import ProductList from "./src/screens/ProductListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./src/screens/BottomTabs";
import ProductDetail from "./src/screens/ProductDetail";
import { LoginContext } from "./src/contexts/UserLoginContext";
import { FavContext } from "./src/contexts/RefetchFavContext";
import { CartContext } from "./src/contexts/UserCartContext";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userLogin, setUserLogin] = useState(true);
  const [refetchFav, setRefetchFav] = useState('');
  const [userCart, setUserCart] = useState(0);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LoginContext.Provider value={{ userLogin, setUserLogin }}>
      <CartContext.Provider value={{ userCart, setUserCart }}>
        <FavContext.Provider value={{ refetchFav, setRefetchFav }}>
          <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator>
              <Stack.Screen name="bottom_tabs" component={BottomTabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="product_detail" component={ProductDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavContext.Provider>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}