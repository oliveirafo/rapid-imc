import React, { useCallback, useState } from 'react';
import * as C from './styles'
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';
import { Dimensions, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export default function Chart () {

    const [data, setData] = useState([]);
    const toast = useToast();
    const {height} = Dimensions.get("screen");
    const navigation = useNavigation();
    
    function handleToHomePage () {
      navigation.navigate('home')
    }

    function handleGoBack () {
      navigation.goBack()
    }

    function showToast (message: string, type: string) {
        // Message: description 
        // Type: "normal | success | warning | danger | custom"
        toast.show(`${message}`, {
        type: `${type}`,
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        textStyle: {fontSize: RFValue(20)},
        })
    };

    async function getData () {
      try {
          const response = await AsyncStorage.getItem('@savedata:historic')
          if (response !== null) {
              var newData = JSON.parse(response)
              if (newData.length < 2) {
                  newData.forEach( (temp: any) => {
                      temp['imc'] = String(temp['imc'])
                      temp['peso'] = String(temp['peso'])
                      temp['altura'] = String(temp['altura'])
                      temp['saved'] = String(temp['saved'])
                  });
              } else {
                  newData.forEach( (temp: any) => {
                      temp['imc'] = parseFloat(temp['imc'])
                      temp['peso'] = parseFloat(temp['peso'])
                      temp['altura'] = parseInt(temp['altura'])
                      temp['saved'] = parseInt(temp['saved'])
                  });
              }
              setData(newData)
          } else {
              setData([])
          }

      } 
      catch {
          showToast("Erro ao exibir os dados", "danger")
      }
  };

    useFocusEffect(
        useCallback(() => {
          getData();
        }, [])
    );


    return (
      <View style={{flex: 1, backgroundColor: '#e6e6e6' }}>
        <View 
          //animation={animationTypes.fading.fadeIn} duration={500} delay={300} 
          style={{flex: 1,backgroundColor: '#e6e6e6'}}>
        
        <C.Container>

            <C.ViewChart1>
               <C.SubViewChart1>
                 <VictoryChart  
                    height={height / 2.9} 
                    domainPadding={{y: [0, 50]}} 
                    //theme={VictoryTheme.material}
                    >
                    <C.Label> MEU IMC </C.Label>
                    <VictoryAxis 
                        style={{
                            axis: {stroke: "#ffffff"},
                            //axisLabel: {fontSize: RFValue(20), padding: 30},
                            //grid: {stroke: "grey" },  
                            //ticks: {stroke: "grey", size: 5},
                            tickLabels: {fontSize: RFValue(10), fill: '#fff'}
                        }}
                    />
                    <VictoryAxis dependentAxis
                        style={{
                            axis: {stroke: "#ffffff"},
                            //axisLabel: {fontSize: RFValue(20), padding: 30},
                            //grid: {stroke: "grey" },  
                            //ticks: {stroke: "grey", size: 5},
                            tickLabels: {fontSize: RFValue(10), fill: '#fff'}
                        }}
                    />
                    <VictoryLine
                        animate={{duration: 2000}}
                        interpolation='monotoneX'
                        data={data}
                        x={'saved'}
                        y={'imc'}  
                        style={{
                            //data: { fill: '#fff', opacity: 0.7 },
                            data: { stroke: '#fff' },
                            labels: { fontSize: RFValue(12), color: '#fff' },
                        }}
                    />
                    <VictoryScatter 
                        data={data}
                        x={'saved'}
                        y={'imc'}
                        style={{
                            data: { fill: '#fff' },
                            labels: { fill: "#fff", fontSize: RFValue(10)} 
                        }}
                        maxBubbleSize={10}
                        minBubbleSize={5}
                        size={5}
                        labels={({ datum }) => datum['imc'] }
                    />
                </VictoryChart>
                </C.SubViewChart1> 
            </C.ViewChart1>

            <C.BottomView>
                <C.ButtonGoBack onPress={ handleGoBack }>
                    <AntDesign name="leftcircleo" size={48} color="black" />
                </C.ButtonGoBack>
                <C.ButtonHome onPress={ handleToHomePage }>
                    <C.TextButton>CALCULADORA</C.TextButton>
                </C.ButtonHome>
            </C.BottomView>


        </C.Container>
      </View>
    </View>
    )
}