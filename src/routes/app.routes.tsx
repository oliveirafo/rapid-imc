import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/';
import Historic from '../screens/historic';
import ModalConfirm from '../screens/modalConfirm';
import Chart from '../screens/charts';
import Result from '../screens/result';

import { Banner } from '../components/pubBanner';


const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return(
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#e6e6e6' },
          //gestureDirection: 'horizontal',
          //gestureEnabled: true,
          animation: 'slide_from_right',
      }}
    >    
        {/*<Stack.Screen 
          name='progressiveBar' component={ProgressiveBar}
          options={{
            headerShown: false,
            animation: 'default',
        }} 
      />*/}
        <Stack.Screen
          name='home' component={Home}
          options={{
            headerShown: false,
            title: "CALCULE SEU IMC",
            //animation: 'none',
          }}
        />
        <Stack.Screen
          name='historic' component={Historic}
          options={{
            headerShown: true,
            title: "Histórico",
            //animation: 'none',

          }}
        />
        <Stack.Screen
          name='modal' component={ModalConfirm}
          options={{
            headerShown: false,
            animation: 'fade',
            presentation: 'modal',
            gestureEnabled: true,
          }}
        />
        <Stack.Screen 
          name='chart' component={Chart}
          options={{
            headerShown: true,
            //animation: 'none',
            title: "Estatísticas",

          }}
        />
        <Stack.Screen 
          name='resultado' component={Result}
          options={{
            headerShown: false,
            //animation: 'none',
            title: "Resultado",
          }} 
        />

      
    </Stack.Navigator>
  )
};

export default AppRoutes
