import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ColorProp {
    newColor: string;
}

export const HStack = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 100%;
`

export const VStack = styled.View`
    justify-content: center;
    flex: 1;
`

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #e6e6e6;
    padding: 10px;
`

export const FlatListContainer = styled.View`
    height: 80px;
    border-width: 1px;
    border-radius: 15px;
    border-color: #e6e6e6;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f5f5f5;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 5px;
`

export const IMCText = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: ${RFValue(25)}px;
    margin-left: 5px;
`

export const NormalText = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: ${RFValue(14)}px;
    margin-left: 3px;
    text-align: right;
`

export const Circle = styled.View<ColorProp>`
    width: 15px;
    height: 15px;
    background-color: ${ (props) => props.newColor ? props.newColor : '#000' };
    border-radius: 20px;
    align-self: center;
    border-width: 0.5px;
    border-color: #4b4b4b;
`

export const BottomView = styled.View`
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
    margin-bottom: 10px;
    margin: 5px;
    border-width: 0px;
    border-color: #000;
    flex: 1;

`

export const ButtonGoChart = styled.TouchableOpacity`
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

export const ViewHstackLine2 = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 5px;

`

export const ViewTextHour = styled.View`
    align-items: center;
    justify-content: flex-start;
`