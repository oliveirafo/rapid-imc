import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface HomeProps {
    background: string;
    borderColor: string;
  };
  interface TextResultProps {
    resultPropColor: number;
  };


export const ResultContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
`
export const ViewHeaderHorizontal = styled.View`
    flex-direction: row;
    border-radius: 15px;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    border-color: #009726;
    border-width: 0px;
    height: 80px;
    margin: 10px;
    width: 95%;
    padding: 20px;
`

export const BoxViewHorizontalEsquerdo = styled.View`
    justify-content: center;
    align-items: flex-start;
`
export const TextBoxViewHorizontalEsquerdo1 = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: 'Montserrat-Bold';
    
`
export const TextBoxViewHorizontalEsquerdo2 = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: normal;  
    color: #555555;
    font-family: 'Montserrat-Bold';
`

export const BoxViewHorizontalDireito = styled.View`
    justify-content: center;
    align-items: center;
`
export const ButtonViewHorizontalDireito = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100px;
    background-color: #0000ff;
    border-radius: 20px;
`

export const TextiewHorizontalDireito = styled.Text`
    text-align: center;
    color: #fff;
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`

export const ViewVerticalGrafico = styled.View`
    flex: 1;
    background-color:  #fff;
    justify-content: space-between;
    align-items: center;
    border-color: #009726;
    border-width: 0px;
    width: 95%;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const SecondViewGrafico = styled.View`
    background-color:  #fff;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
`

export const ViewVerticalInfo = styled.View`
    background-color:  #fff;
    justify-content: space-between;
    align-items: center;
    border-color: #009726;
    border-width: 0px;
    width: 95%;
`


export const ViewTextTitleResult = styled.Text`
    height: 50px;
    align-items: center;
    justify-content: center;
`

export const TextTitleResult = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: 25px;
    color: #000;
`


/* ===================== RESULTADO ========================= */


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

// ===================== BOTOES ====================//

export const ButtonSave = styled.TouchableOpacity`
  width: 95%;
  border-radius: 50px;
  background-color: #6a5af5;
  justify-content: center;
  align-items: center;
  border-color: #0000d5;
  border-width: 0px;
  height: 50px;
  margin-bottom: 10px;
`

export const TextButtonSave = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'Montserrat-Bold';
  text-align: center;
`

export const TouchableHistory = styled.TouchableOpacity`
  width: 100%;
  border-radius: 50px;
  background-color: #6a5af5;
  justify-content: center;
  align-items: center;
  border-color: #0000d5;
  border-width: 0px;
  height: 30px;
  padding: 5px;
`

export const TextButtonHistoric = styled.Text`
    text-align: center;
    font-size: ${RFValue(12)}px;
    color: #fff;
    font-family: 'Montserrat-Regular';
    padding: 2px;
`


interface ClassificProps {
  backgroundColor: string
}

interface TextClassificProps {
  color: string
}

export const TouchableClassific = styled.TouchableOpacity<ClassificProps>`
  width: 50%;
  border-radius: 50px;
  background-color: ${ (props) => props.backgroundColor ? props.backgroundColor : '#00000000' };
  justify-content: center;
  align-items: center;
  border-width: 0px;
  height: 40px;
  margin-bottom: 5px;
`

export const TextButtonClassific = styled.Text<TextClassificProps>`
    text-align: center;
    font-size: ${RFValue(14)}px;
    color: ${ (props) => props.color ? props.color: '#000' };
    font-family: 'Montserrat-Regular';
`