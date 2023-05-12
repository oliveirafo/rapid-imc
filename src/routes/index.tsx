import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../config/styles/theme';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppRoutes from './app.routes';
import { VisibilityContext } from '../context/visibilitycontext';
import * as NavigationBar from 'expo-navigation-bar';


export default function Routes () {

  const {setIsVisible}: any = useContext(VisibilityContext);

  function showNotification (msg: string, type: string) {
    const toast = useToast();
    toast.show(`${msg}`, {
      type: `${type}`,
      placement: "top",
      duration: 2000,
      animationType: "slide-in",
      textStyle: {fontSize: 20},
    })
  };

  useEffect(() => {
    async function navigationBar () {
      const visibility = await NavigationBar.getVisibilityAsync()
      setIsVisible(visibility)
    };
    navigationBar()
  }, [])

  useEffect(() => {
    async function checkDatabase () {
      try {
          const resp = await AsyncStorage.getItem('@savedata:historic')
          const prev = resp ? JSON.parse(resp) : []
          if (prev.length > 0) {
              if ((prev['dateAt'] !== undefined) || (prev['gender'] !== undefined)) {
                await AsyncStorage.clear()
                showNotification('Seu aplicativo foi atualizado.', 'sussess')
              };
          }
      } 
      catch {
        console.log('Erro ao corrigir bugs, contate o desenvolvedor')
      } 
    };

    checkDatabase();
  }, []);

  return(
    <NavigationContainer>
      <ThemeProvider theme={theme} >
        <ToastProvider>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#e6e6e6'}/>
          <AppRoutes />
        </ToastProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
};

