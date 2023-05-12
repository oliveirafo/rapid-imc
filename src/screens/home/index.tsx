import React, { useState, createRef, useCallback, useContext } from 'react';
import { Dimensions, Alert, Text, Pressable, View } from 'react-native';
import * as C from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Slider } from 'react-native-ui-lib';
import { classification } from '../../services/classification';
import { useToast } from "react-native-toast-notifications";
import { Ionicons  } from '@expo/vector-icons';
import { LoadingButton } from '../../components/loading';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMCLogo } from '../../components/logo/IMCLogo';
import { VisibilityContext } from '../../context/visibilitycontext';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';


const PUB_ID_INTERSTITIAL =  __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-2213444535919704/2500336298'

const interstitial = InterstitialAd.createForAdRequest( PUB_ID_INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


export default function Home (): JSX.Element {

  const { isVisible }: any = useContext(VisibilityContext)

  const {height, width} = Dimensions.get("screen");
  const [alturaValue, setAlturaValue] = useState('130');
  const [pesoValue, setPesoValue] = useState('60');

  const [iconMale, setIconMale] = useState('#000');
  const [iconFemale, setIconFemale] = useState('#9e9e9e');
  const [iconNot, setIconNot] = useState('#9e9e9e');
  const [gender, setGender] = useState('Masculino')

  const [slideAltura, setSlideAltura] = useState(70);
  const [slidePeso, setSlidePeso] = useState(50);
  const sliderAltura: any = createRef();
  const sliderPeso: any = createRef();

  const navigation = useNavigation();
  const toast = useToast();
  const regNum = /\D/g;
  const [carregando, setCarregando] = useState(0)
  const fontAltura = 'Montserrat-Regular'
  const fontPeso = 'Montserrat-Regular'

  const [item, setItem] = useState(false);

  function handleToHistoricPage () {
    navigation.navigate('historic')
  }

  function onChangePeso (i: string) {
    setPesoValue( [',','.','0','-'].includes(i.trim().charAt(0)) ? '' : i.trim().replace(/[,]/g, ',') )
    event2(i)
  }

  function onChangeAltura (i: string) {
    setAlturaValue( i.trim().charAt(0) === '0' ? '' : i.trim().replace(regNum, '') )
    event1(i)
  }

  function onSlideValueAltura (value: any) {
    setAlturaValue( String(Math.round(value)))
  }

  function onSlideValuePeso (value: any) {
    setPesoValue( String(Math.round(value)))
  }

  async function unsubscribeAd () {
    try {
      let unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => { //setAdLoad(() => true)
      });
  
      interstitial.load();
      console.log('Anuncio carregou!!! (FEZ LOADING) => ')
     
      // Unsubscribe from events on unmount
      return unsubscribe
    }
    catch (error) {
      console.log('Não consegui obter o carregamento do anuncio')
    }

  }

  async function showAd () {
    if (interstitial.loaded) {
      interstitial.show()
      console.log(`O interstitial carregou na TELA (APARECEU!!!)`)
      //interstitial.removeAllListeners()
    } 
  }

  function calcularImc(){
    unsubscribeAd()

    if ( (pesoValue.length > 0) && (alturaValue.length > 0) ) {
      try {

        setCarregando( 1 )
        

        var tempPeso = parseFloat(pesoValue)
        var tempAltura = parseFloat(alturaValue)
        var tempResult= (tempPeso / ( tempAltura * tempAltura)) * 10000
        var result: any = tempResult.toFixed(1)
        var { classific, colors, descript, risk, obs } = classification(result)
        var registerFromHome = true

        var data = {
          peso: tempPeso,
          altura: tempAltura,
          imc: tempResult.toFixed(1),
          classificacao: classific,
          cor: colors,
          descricao: descript,
          risco: risk,
          obs: obs,
          registerFromHome,
          gender: gender,
        }


        navigation.navigate('resultado', {data} )

        //navigation.navigate( 'resultado', {data} )

      } catch {
        Alert.alert('Erro', 'Falha ao calcular, tente novamente!')

      } finally {
        showAd()
        setCarregando( 0 )
      }

    } else {
      showToast('Campos inválidos! ', 'danger')
    }
  };
  
/* function clearForm() {
    sliderAltura.current.reset()
    sliderPeso.current.reset()
    //setResultIMC( '' )
    //setResultIndex( 0 )
    setAlturaValue( String(80) )
    setPesoValue( String(30) )
    setSlideAltura( 80 )
    setSlidePeso( 30 )
    //setColor( '' )
    showToast("Campos resetados", "normal")
  }; */

  function showToast (message: string, type: string) {
    // Message: description 
    // Type: "normal | success | warning | danger | custom"

    toast.show(`${message}`, {
      type: `${type}`,
      placement: "top",
      duration: 3000,
      animationType: "zoom-in",
      textStyle: {fontSize: RFValue(20)},
    })
  };

  function selectSexMale (){
    setIconMale('#000')
    setIconFemale('#9e9e9e')
    setIconNot('#9e9e9e')
    setGender('Masculino')
  };

  function selectSexFemale (){
    setIconFemale('#000')
    setIconMale('#9e9e9e')
    setIconNot('#9e9e9e')
    setGender('Feminino')
  };

  function selectNoSex (){
    setIconFemale('#9e9e9e')
    setIconMale('#9e9e9e')
    setIconNot('#000')
    setGender('Não dizer')
  };

  function event1 (event: any) {
    if ( isNaN(parseInt(event)) ) {
      setSlideAltura(1)
    } else {
      setSlideAltura(parseInt(event))
    }
  };

  function event2 (event: any) {
    if ( isNaN(parseInt(event)) ) {
      setSlidePeso(1)
    } else {
      setSlidePeso(parseInt(event))
    }
  };


  useFocusEffect(
    useCallback(() => {
      async function fetchData () {
        const response = await AsyncStorage.getItem('@savedata:historic')
        const prevData = [null, '', undefined].includes(response) ? false : true 
        setItem(prevData)
      };
  
      fetchData();
      //console.log(isVisible)
    }, [])
  );

  return(
  <View style={{backgroundColor: '#e6e6e6', width: "100%", height: isVisible === 'visible' ? height - RFValue(35) : height }}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e6e6e6',
        flex: 1

      }} >
      
      <C.PrimaryView>
        <C.ViewTitle>
          <Text style={{ 
            fontSize: RFValue(16),
            color : '#000',
            fontFamily: 'Montserrat-Bold',
          }}> CALCULADORA IMC 
        </Text>
        </C.ViewTitle>


        <IMCLogo />


      </C.PrimaryView> 

      <C.SecondView>

        <C.ViewInput >

          <C.ViewTitleInput>
            <Text 
              style={{
                fontFamily: fontAltura,
                fontSize: RFValue(16), 
                paddingLeft: 20,
              }}
            >
              Altura (cm)
            </Text>
          </C.ViewTitleInput>

          <C.Input  // Primeira Input
            style={{elevation: 10, shadowColor: '#000000', borderWidth: 1, borderColor: '#6a5af5'}}
            placeholder='Altura'
            placeholderTextColor='#808080'
            keyboardType='numeric'
            maxLength={3}
            onChangeText={ onChangeAltura }
            value={alturaValue}
            
          />

          <C.ViewSlide>
            <Slider 
              value={ slideAltura }
              minimumValue={1}
              maximumValue={240}
              ref={ sliderAltura }
              onValueChange={ onSlideValueAltura }
            />
          </C.ViewSlide>

            <C.ViewTitleInput>
              <Text 
                style={{
                  fontFamily: fontPeso,
                  fontSize: RFValue(16), 
                  paddingLeft: 20 
                }}
              >
                Peso (kg)
              </Text>
            </C.ViewTitleInput>

            <C.Input // Segunda Input
              style={{elevation: 10, shadowColor: '#000000', borderWidth: 1, borderColor: '#6a5af5'}}
              placeholder='Peso'
              placeholderTextColor='#808080'
              keyboardType='numeric'
              maxLength={5}
              onChangeText={ onChangePeso }
              value={ pesoValue }
            />

            <C.ViewSlide>
              <Slider
                value={ slidePeso }
                minimumValue={1}
                maximumValue={240}
                ref={ sliderPeso }
                onValueChange={ onSlideValuePeso }
              />
            </C.ViewSlide>


        <C.ViewAskSex >
          <Pressable onPress={selectSexMale} >
            <C.BoxEsqu 
              enabled={iconMale}
              style={{ elevation: iconMale === '#000' ? 20 : 0, shadowColor: '#000' }}
            >
              <Ionicons name="male" color={iconMale} size={height / 40} />
              <Text style={{fontFamily: iconMale === '#000' ? 'Montserrat-Bold' : 'Montserrat-Regular', fontSize: RFValue(9) }}>Masculino</Text>
            </C.BoxEsqu>
          </Pressable>
          <Pressable onPress={selectSexFemale} >
            <C.BoxCentro 
              enabled={iconFemale}
              style={{ elevation: iconFemale === '#000' ? 20 : 0, shadowColor: '#000' }}
            >
              <Ionicons name="female" color={iconFemale} size={height / 40}/>
              <Text style={{fontFamily: iconFemale === '#000' ? 'Montserrat-Bold' : 'Montserrat-Regular', fontSize: RFValue(9) }}>Feminino</Text>
            </C.BoxCentro>
          </Pressable>
          <Pressable onPress={selectNoSex} >
            <C.BoxDir
              enabled={iconNot}
              style={{ elevation: iconNot === '#000' ? 20 : 0, shadowColor: '#000' }}
            >
              <Ionicons name="radio-button-off" color={iconNot} size={height / 40}/>
              <Text style={{fontFamily: iconNot === '#000' ? 'Montserrat-Bold' : 'Montserrat-Regular', fontSize: RFValue(9), textAlign: 'center' }}>Não dizer</Text>
            </C.BoxDir>
          </Pressable>
        </C.ViewAskSex>


        { 
        
        item === true 
          ?
          <C.ViewButtonHistoric>
            <C.TouchableHistory 
                style={{elevation: 20, shadowColor: '#000'}} onPress={ handleToHistoricPage }>
                <C.TextButtonHistoric>
                  HISTÓRICO
                </C.TextButtonHistoric>
              </C.TouchableHistory>
          </C.ViewButtonHistoric> 
          :
          <></>
        }
        

      </C.ViewInput >

      <C.ViewBottomCalculate >
        <C.ButtonCalculate onPress={ calcularImc } style={{elevation: 10, shadowColor: '#000000'}}>
          <C.TextButtonCalculate>
            { carregando === 1 ? <LoadingButton /> : 'CALCULAR' }
          </C.TextButtonCalculate>
        </C.ButtonCalculate>
      </C.ViewBottomCalculate>


      </C.SecondView>

      
  </View>


  </View>

  )
};


