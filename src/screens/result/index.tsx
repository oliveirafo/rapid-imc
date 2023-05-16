import React, { useState } from 'react';
import * as C from './styles'
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { Dimensions, View, Text, Alert, Pressable } from 'react-native';
import { VPie } from '../../components/graphics/victory';
import { AntDesign } from '@expo/vector-icons';
import { Modal, Button } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { getDate } from '../../services/getDate';
import { RadialSlider } from 'react-native-radial-slider';
import { RFValue } from 'react-native-responsive-fontsize';


export default function Result ( {route}: any ) { 

  const date = getDate()
  const navigation = useNavigation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isClicked, setIsClicked] = useState(1000)
  const [notSaved, setNotSaved] = useState(true);
  const {height, width, scale} = Dimensions.get("screen");
  const toast = useToast();

  function handleToHistoricPage () {
    navigation.navigate('historic')
    //console.log(scale)
  };

  function handleToHomePage () {
    navigation.navigate('home')
  }

  function openModal () {
    setIsOpenModal(true)
    setIsClicked( 1 )
  };

  function closeModal () {
    setIsOpenModal(false)
  };


  async function handleNew () {
      try {

        const response = await AsyncStorage.getItem('@savedata:historic') // get data from colection
        const previosData = response === null || undefined ? '' : JSON.parse(response);

        const saved = previosData ? parseInt(previosData[0]['saved']) + 1 : 0

        const newData = {
          id: uuid.v4(),
          date,
          saved,
          ...route.params.data
        }

        if (!previosData) {
  
          const recover = [newData]
          await AsyncStorage.setItem('@savedata:historic', JSON.stringify(recover))
    
          setNotSaved(false)
          showToast("Registro adicionado!", "success")

        } else if (date.day === previosData[0]['date']['day']) {
            const listaPronta = [newData, ...previosData]
            listaPronta.splice(1, 1)

            console.log(listaPronta)
            console.log('add substituindo')
            await AsyncStorage.setItem('@savedata:historic', JSON.stringify(listaPronta))
    

            setNotSaved(false)
            showToast("Registro adicionado!", "success")
  
        } else {
            const listaPronta = [newData, ...previosData]
  
            console.log(listaPronta)
            await AsyncStorage.setItem('@savedata:historic', JSON.stringify(listaPronta))
    
            setNotSaved(false)
            showToast("Registro adicionado!", "success")
          }

        return handleToHistoricPage()

      } catch (e) {
        console.log(e)
      }
      
  };

  function confirmSave () {
    Alert.alert(
      'Salvar',
      'Salvar registro de IMC?',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Sim', onPress: handleNew }
      ],
      { cancelable: false }
    )
  };

  function showToast (message: string, type: string) {
    // Message: description 
    // Type: "normal | success | warning | danger | custom"

    toast.show(`${message}`, {
      type: `${type}`,
      placement: "top",
      duration: 3000,
      animationType: "zoom-in",
      textStyle: {fontSize: 20},
    })
  };


  return (
  <View style={{flex: 1, backgroundColor: '#e6e6e6' }}>
    <View
      //animation='bounceInRight' duration={0} delay={0}
      
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
      }} >

        <C.ViewHeaderHorizontal>
          <C.BoxViewHorizontalEsquerdo>
            <C.TextBoxViewHorizontalEsquerdo1 >
              IMC
            </C.TextBoxViewHorizontalEsquerdo1>
            <C.TextBoxViewHorizontalEsquerdo2>
              { `${date?.day} de ${date?.month?.substring(0,3)} de ${date?.year}` }
            </C.TextBoxViewHorizontalEsquerdo2>
          </C.BoxViewHorizontalEsquerdo>
          <C.BoxViewHorizontalDireito>
            <C.TouchableHistory 
              style={{elevation: 10, shadowColor: '#000'}}
              onPress={handleToHistoricPage}>
                <C.TextButtonHistoric>
                  HISTÓRICO
                </C.TextButtonHistoric>
            </C.TouchableHistory>
          </C.BoxViewHorizontalDireito>
        </C.ViewHeaderHorizontal>
        
      <C.ViewVerticalGrafico>
        <C.SecondViewGrafico  >

        <Pressable onPress={openModal} style={{alignSelf: 'center'}}>
          <VPie />

            <View style={{
              alignItems: 'center', justifyContent: 'center', 
              marginTop: scale < 3 ? height / -2.85 : height / -2.7}}
            >
              
              <RadialSlider
                variant={'speedometer'}
                value={parseInt(route.params.data?.imc)}
                min={16}
                max={40}
                needleHeight={1}
                isHideValue
                isHideTailText
                isHideSlider={true}
                isHideCenterContent
                isHideSubtitle
                isHideLines
                isHideMarkerLine
                sliderTrackColor='#00000000'
                lineColor='#00000000'
                thumbBorderColor='#00000000'
                markerPositionY={scale}
                markerCircleColor='#00000000'
              />

              <View style={{alignItems: 'center', justifyContent: 'center', marginTop: -90} }>
                <Text style={{ fontSize: RFValue(18) , textAlign: 'center', fontFamily: 'Montserrat-Bold' }} >
                  Seu IMC 👇
                </Text>
                
                <Text //animation="bounceIn" delay={300} iterationCount={2}
                  style={{ fontSize: RFValue(45), textAlign: 'center', fontFamily: 'Montserrat-Bold'}} >
                  {route.params.data.imc}
                </Text>
                <Text 
                  style={{ fontSize: RFValue(18), textAlign: 'center', fontFamily: 'Montserrat-Regular', marginBottom: 10}}> 
                  {`${route.params.data?.peso}Kg | ${route.params.data?.altura / 100}m | ${route.params.data?.gender}`}
                </Text>
              </View>

            <View style={{ justifyContent: 'center' }}>
        
              <C.TouchableClassific
                style={{elevation: 10, shadowColor: '#000000', padding: 10, width: '60%'}} 
                onPress={openModal}
                backgroundColor={route.params.data?.cor}
                >
                  <C.TextButtonClassific
                    style={{fontFamily: 'Montserrat-Bold'}}
                    color={route.params.data?.cor === '#dfdf31f6' ? '#000000' : '#fff'}>
                    {route.params.data?.classificacao}
                  </C.TextButtonClassific>

                  
                </C.TouchableClassific>

                <View //animation="flash" iterationCount={isClicked} delay={3000}
                    
                    style={{
                    marginTop: 10, height: 40, width: 40, alignSelf: 'center', borderWidth: 0.1,
                    justifyContent: 'center',  alignItems: 'center',
                    backgroundColor: route.params.data?.cor, 
                    borderRadius: 50}}
                  >
                  <AntDesign  
                    name="info" 
                    size={30}
                    color={route.params.data?.cor === '#dfdf31f6' ? '#000000' : '#fff'}
                  />
                  </View>
            </View>

                <Modal 
                  transparent 
                  animationType={'slide'} 
                  visible={isOpenModal} 
                  onRequestClose={ () => setIsOpenModal(false) }>

                  <View style={{ flex: 1, padding: 40, alignItems: 'center', justifyContent: 'center'}}>

                    <View style={{ elevation: 20, shadowColor: '#000000', borderWidth: 0.5,
                      justifyContent: 'center', height: 'auto', backgroundColor: '#ffffff', padding: 25, borderRadius: 20
                      }} >
                      <View 
                        style={{marginBottom: 20}}
                        //animation="flash" iterationCount={5} delay={200}
                      >
                        <Text style={{
                          color: route.params.data?.cor === '#dfdf31f6' ? '#000' : route.params.data?.cor, 
                          backgroundColor: route.params.data?.cor === '#dfdf31f6' ? '#dfdf31f6' : '#fff', 
                          borderRadius: 10, 
                          textAlign: 'center', 
                          fontSize: RFValue(20), 
                          fontFamily: 'Montserrat-Bold'}}
                        >
                          {route.params.data?.classificacao}{'\n'}{route.params.data?.risco}
                        </Text>
                      </View>
                      <View style={{marginBottom: 30}}
                        //animation="jello" iterationCount={1} delay={200}
                      >
                          
                        <Text style={{
                          textAlign: 'justify', 
                          fontFamily: 'Montserrat-Regular' }}
                        > 
                          {route.params.data?.descricao}
                        </Text>
                      </View>
                      <View style={{marginBottom: 30}}
                        //animation="jello" iterationCount={1} delay={200}
                      >
                        <Text style={{
                          textAlign: 'justify', 
                          fontFamily: 'Montserrat-Regular'}}>{route.params.data?.obs}</Text>
                      </View>
                      <View>
                        <Button label='Fechar' onPress={closeModal} style={{elevation: 20, shadowColor: '#000000'}}/>
                      </View>
                    </View>

                  </View>
                </Modal>

            </View>
          </Pressable>
        </C.SecondViewGrafico>
      

        {

        notSaved === true ?

          <C.ButtonSave onPress={confirmSave} style={{elevation: 10, shadowColor: '#000000'}}>
            <C.TextButtonSave>SALVAR</C.TextButtonSave>
          </C.ButtonSave>
        :
          <C.ButtonSave onPress={ handleToHomePage } style={{elevation: 10, shadowColor: '#000000'}}>
            <C.TextButtonSave>CALCULAR NOVAMENTE</C.TextButtonSave>
          </C.ButtonSave>

        }

        </C.ViewVerticalGrafico>

    </View>
  </View>

  )

};

