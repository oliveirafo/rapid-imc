import * as React from 'react';
import * as C from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Empty } from '../../components/emptyList';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';



export default function Historic (): JSX.Element {

    const [data, setData] = React.useState([])
    const toast = useToast()
    const navigation = useNavigation()

    function RenderItemList ({item}: any) {
      return (
        <View //animation='fadeInUp' duration={1000} delay={item['saved'] * 100}
        >
            
          <TouchableOpacity onLongPress={handleModal} onPress={showInstruction}>

          <C.FlatListContainer>
              
              <C.HStack>
                  <C.IMCText> 
                      {item['imc']} 
                  </C.IMCText>
                  <C.NormalText> 
                  { `${item['date']['day']} ${String(item['date']['month']).substring(0,3)} ${item['date']['year']}` }
                  </C.NormalText>
              </C.HStack>

              <C.HStack>
                  <C.ViewHstackLine2>
                      <C.Circle newColor={item['cor']} />
                      <C.NormalText>
                          {item['classificacao']}
                      </C.NormalText> 
                  </C.ViewHstackLine2>
                  <C.ViewTextHour>
                      <C.NormalText>
                          {item['date']['hour']}
                      </C.NormalText>
                  </C.ViewTextHour>
              </C.HStack>
              
          </C.FlatListContainer>
          </TouchableOpacity>

          </View>
      )
    }

    function showInstruction () {
        return (
            toast.show("Pressione para deletar", {
                type: "warning",
                placement: "top",
                duration: 2000,
                animationType: "slide-in",
                textStyle: {fontSize: 20},
            })
        )
        
    }

    function handleModal () {
        navigation.navigate('modal')
    };

    function handleChart () {
        navigation.navigate('chart')
    };

    function goBack () {
      navigation.goBack()
    }

    async function handleFetchData () {
      try {
          const response = await AsyncStorage.getItem('@savedata:historic');
          const previosData = response ? JSON.parse(response) : [];
          setData(() => previosData);


      } catch {
          toast.show(`Erro o carregar os dados!`, {
              type: `danger`,
              placement: "top",
              duration: 3000,
              animationType: "slide-in",
              textStyle: {fontSize: RFValue(20)},
          })
      }
  };

    useFocusEffect( 
        React.useCallback(() => {
            handleFetchData();
        }, [])
    )

    return (
      <View style={{flex: 1, backgroundColor: '#e6e6e6' }}>
      <View 
        //animation={animationTypes.entrances.bounceInUp} duration={500} delay={300} 
        style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        
        
        <C.Container>

            <C.VStack > 
                
            <FlatList
                ListEmptyComponent={<Empty />}
                data={data}
                keyExtractor={ (item) => item['id'] }
                renderItem={ RenderItemList }
            />

            </C.VStack>

            <C.BottomView>
                <C.ButtonGoBack onPress={ goBack }>
                    <AntDesign name="leftcircleo" size={48} color="black" />
                </C.ButtonGoBack>
                <C.ButtonGoChart onPress={ handleChart }> 
                    <C.TextButton>ESTATÍSTICAS</C.TextButton>
                </C.ButtonGoChart>
            </C.BottomView>

        </C.Container>
      </View>
      </View>
    )
}
