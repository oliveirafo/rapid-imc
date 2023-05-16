import { Alert, Linking, ToastAndroid } from 'react-native'
import VersionCheck from 'expo-version-checker'


async function checkVersion () {

  async function openURL (URL: string) {
    const isLink = await Linking.canOpenURL(URL)
    if (isLink) {
      return Linking.openURL(URL)
    }
    else {
      return ToastAndroid.show('Falhou ao abrir link', 1000)
    }
  }

  try {
    ToastAndroid.show('Procurando atualizações...', 1000)
    const update = await VersionCheck.needUpdate()
    if (update?.isNeeded) {
      return (
        Alert.alert(
          'Nova versão disponível!',
          'Uma nova atualização está disponível, deseja atualizar agora?',
          [
            {text: 'Não', style: 'cancel'},
            {text: 'Atualizar agora', onPress: () => openURL(update?.storeUrl) }
          ],
  
          {cancelable: false}
        )
      )
    }
  }
  catch (error) {
    return console.log(`Erro ao atualizar ${error} `)
  }
}

export const Update = checkVersion



