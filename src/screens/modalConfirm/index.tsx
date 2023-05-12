import * as React from 'react';
import * as C from './styles'
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import { View } from 'react-native';

export default function ModalConfirm () {

  const navigation = useNavigation()
  const toast = useToast()

  async function clearStorage () {
      try {
          await AsyncStorage.clear()
            toast.show(`Dados apagados com sucesso!`, {
              type: `success`,
              placement: "top",
              duration: 2000,
              animationType: "slide-in",
              textStyle: {fontSize: RFValue(20)},
            })
            setTimeout(() => {navigation.navigate('home')}, 400)
      }
      
      catch {
          toast.show(`Não foi possivel excluir! Tente novamente!`, {
              type: `danger`,
              placement: "top",
              duration: 2000,
              animationType: "slide-in",
              textStyle: {fontSize: RFValue(15)},
          })
      }
  };

  function handleGoBack () {
    navigation.goBack()
  };


  return (
    <View style={{flex: 1, backgroundColor: '#e6e6e6' }}>

    <View 
      //animation={animationTypes.entrances.bounceIn} duration={200} delay={100} 
      style={{flex: 1}}>
    <C.ModalContainer>
      <C.ViewHorizontal style={{elevation: 20, shadowColor: '#000000' }}>

        <C.ViewTextTitleModal>
          <C.TextTitleModal>
            Apagar registros?
          </C.TextTitleModal>
        </C.ViewTextTitleModal>
      
        <C.BottomModalView>
          <C.ButtomConfirm onPress={ clearStorage }>
            <C.TextButtonDeletar>
              CONFIRMAR
            </C.TextButtonDeletar>
          </C.ButtomConfirm>

          <C.ButtomCancelar onPress={ handleGoBack }>
            <C.TextButtonCancelar>
              CANCELAR
            </C.TextButtonCancelar>
          </C.ButtomCancelar>
        </C.BottomModalView>

      </C.ViewHorizontal>
    </C.ModalContainer>
  </View>
  </View>
  )
};

