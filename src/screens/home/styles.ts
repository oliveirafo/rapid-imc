import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface HomeProps {
  background: string;
  borderColor: string;
}
interface TextResultProps {
  resultPropColor: number;
}
interface BtnClearProps {
  colorButtonClear: string;
}

interface SelectedSexProps {
  enabled: string;
}

export const PrimaryView = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: flex-start;
  background-color: #e6e6e6;
  width: 95%;
  border-radius: 20px;
  
`
export const SecondView = styled.View`
  flex: 0.8;
  border-radius: 20px;
  background-color: #e6e6e6;
  width: 95%;
  margin-bottom: 10px;
  justify-content: center;
`
export const BottomView = styled.View`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  background-color: #c0c0c0;
  border-radius: 20px;
  margin-bottom: 10px;
`
export const ViewTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px;
`
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: #000;
  font-family: 'RubikDistressed-Regular';
`
export const ViewImage = styled.View`
  background-color: #e6e6e6;
  width: 95%;
  align-self: center;
  margin: 5px;
`
export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0px 10px 0px;
  flex: 1;
`
export const ResultCircle = styled.View<HomeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: ${(props) => props.background ? '#3e3e3e' : '#e6e6e6'};
  border-radius: 30px;
  border-width: 5px;
  border-color: ${(props) => props.borderColor ? props.borderColor : '#e6e6e6'};
`
export const Result = styled.Text<TextResultProps>`
  font-weight: bold;
  font-size: ${RFValue(40)}px;
  color: ${(props) => props.resultPropColor !== 0 ? '#fff' : '#000'};
`
export const ResultClassification = styled.Text`
  font-weight: normal;
  color: #fff;
  font-size: ${RFValue(18)}px;

`
export const ViewResultDescription = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const StyleModal = styled.View<HomeProps>`
  flex: 0.8;
  background-color: #e6e6e6;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 100px 50px 100px 50px;
  padding: 10px;
  border-width: 2px;
  border-color: ${(props) => props.borderColor ? props.borderColor : '#e6e6e6'};
`
export const ViewDescription = styled.TouchableHighlight`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`

export const ViewInput = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  
`
export const ViewTitleInput = styled.View`
  align-self: flex-start;
  padding: 1px;
`
export const TextTitleInput = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: ${RFValue(20)}px;
  padding-left: 20px; 
`
export const Input = styled.TextInput`
  height: 60px;
  width: 90%;
  border-radius: 15px;
  background-color:  #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  border-color: #009726;
  border-width: 0px;
  font-size: ${RFValue(30)}px;
  text-align: left;
  font-family: 'Montserrat-Regular';
  margin: 5px;
`
export const TouchableInput = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  border-radius: 15px;
  background-color:  #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  border-color: #009726;
  border-width: 0px;
`
export const TextTouchableInput = styled.Text`
  font-size: ${RFValue(35)}px;
  text-align: left;
  font-weight: normal;
`
export const ViewSlide = styled.View`
  width: 90%;
`
export const ViewButtonCalcular = styled.View`
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  
`
export const ButtonCalcular = styled.TouchableOpacity`
  width: 90%;
  border-radius: 15px;
  background-color: #00cc00;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 0px;
  height: 50px;
  margin-top: 15px;
`
export const TextButtonCalculate = styled.Text`
  color: #000;
  font-size: ${RFValue(20)}px;
  font-family: 'Montserrat-Bold';
  text-align: center;
`
export const ViewButtonClear = styled.View`
  justify-content: center;
  align-items: center;
`

export const ViewBottomCalculate = styled.View`
  justify-content:flex-end;
  align-items: center;
  margin-bottom: 10px
`

export const ButtonCalculate = styled.TouchableOpacity`
  width: 95%;
  border-radius: 50px;
  background-color: #00cc00;
  justify-content: center;
  align-items: center;
  border-color: #009726;
  border-width: 0px;
  height: 50px;
  margin-bottom: 10px;

`

export const ViewAskSex = styled.View`
  flex-direction: row;

  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
  border-width: 0px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
  padding: 10px;
`

export const BoxEsqu = styled.View<SelectedSexProps>`
  width: 90px;
  background-color: #cdcdcd;
  padding: 5px;
  height: 50px;
  border-radius: 20px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-width: ${(props) => props.enabled === '#000' ? '1px' : '0px' };
`
export const TextBoxViewHorizontalEsquerdo1 = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: 'Montserrat-Bold';
    
`
export const TextBoxViewHorizontalEsquerdo2 = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: normal;  
    color: #000;
    font-family: 'Montserrat-Bold';
`

export const BoxCentro = styled.View<SelectedSexProps>`
  width: 90px;
  background-color: #cdcdcd;
  padding: 5px;
  height: 50px;
  border-radius: 20px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-width: ${(props) => props.enabled === '#000' ? '1px' : '0px' };
`

export const BoxDir = styled.View<SelectedSexProps>`
  width: 90px;
  background-color: #cdcdcd;
  padding: 5px;
  height: 50px;
  border-radius: 20px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-width: ${(props) => props.enabled === '#000' ? '1px' : '0px' };
`

export const TextiewHorizontalDireito = styled.Text`
    text-align: center;
    color: #fff;
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`

export const ViewButtonHistoric = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100px;
    background-color: #00000000;
    border-radius: 20px;
`

export const TouchableHistory = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #00000000;

  border-color: #0000d5;
  border-width: 1px;
  height: 30px;
  padding: 5px;
`

export const TextButtonHistoric = styled.Text`
    text-align: center;
    font-size: ${RFValue(10)}px;
    color: #000;
    font-family: 'Montserrat-Regular';

    border-radius: 10px;
    height: 30px;
    width: 100px;
    align-self: center
`
