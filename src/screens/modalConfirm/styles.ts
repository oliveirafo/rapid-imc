import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
`
export const ViewHorizontal = styled.View`
    border-radius: 15px;
    background-color:  #fff;
    justify-content: center;
    align-items: center;
    border-color: #009726;
    border-width: 0px;
    height: 150px;
    margin: ${RFPercentage(0.5)}%;
`
export const ViewTextTitleModal = styled.Text`
    height: 50px;
    align-items: center;
    justify-content: center;
`

export const TextTitleModal = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: ${RFValue(18)}px;
    color: #000;
`

export const BottomModalView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 60px;
`
export const ButtomConfirm = styled.TouchableOpacity`
    flex: 0.5;
    align-items: center;
    justify-content: center;
    background-color: #ff5151;
    height: 50px;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 5px;
`
export const TextButtonDeletar = styled.Text`
    text-align: center;
    font-size: ${RFValue(15)}px;
    color: #fff;
`
export const ButtomCancelar = styled.TouchableOpacity`
    flex: 0.5;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: 50px;
    border-radius: 15px;
    border-width: 1px;
    border-color: #808080;
    margin-left: 5px;
    margin-right: 10px;
    
`

export const TextButtonCancelar = styled.Text`
    text-align: center;
    font-size: ${RFValue(15)}px;
    color: #000;
`
