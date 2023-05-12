import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
    padding: 10px;
`

export const ViewChart1 = styled.View`
    flex: 0.9;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
    border-radius: 20px;
    width: 100%;
`

export const SubViewChart1 = styled.View`
    height: 300px;
    justify-content: center;
    align-items: center;
    background-color: #6054ed;
    border-radius: 20px;
    width: 100%;
`

export const BottomView = styled.View`
    flex: 0.1;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const ButtonGoBack = styled.TouchableOpacity`
    width: 20%;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export const ButtonHome = styled.TouchableOpacity`
    width: 75%;
    border-radius: 50px;
    background-color:  #6a5af5;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin-right: 5px;
`

export const TextButton= styled.Text`
    text-align: center;
    font-size: ${RFValue(16)}px;
    color: #fff;
    font-family: 'Montserrat-Bold';
`

export const Label= styled.Text`
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-family: 'Montserrat-Bold';

`