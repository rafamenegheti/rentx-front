import React from "react";
import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components'
import { StatusBar } from "react-native";

import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import { Home } from "./src/screens/Home";
import theme from "./src/styles/theme";
import { CarDetails } from "./src/screens/CarDetails";

export default function App() {
  const [fonstsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fonstsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
    {/* <Home /> */}
    <CarDetails />
    </ThemeProvider>
  );
}

