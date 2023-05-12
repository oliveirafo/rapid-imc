import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import * as Progress from 'react-native-progress';


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #e6e6e6;
`
const CenterUp = styled.View`
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #e6e6e6;

`
const CenterDown = styled.View`
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #e6e6e6;
`
const TextLoading = styled.Text`
    text-align: center;
    color: #e6e6e6;
    font-size: 30px;
`


export function Loading (): JSX.Element {
    return ( 
        <Container>
          <ActivityIndicator size={100} color='#8c8c8c' />
        </Container>
        
    )
}

export function LoadingButton () {
    return (
        <ActivityIndicator size={40} color='#000' />
    )
};

export function LoadingProgress () {
    const dimensions = Dimensions.get('screen')
    return (
        <Container >
            <CenterUp>
                <TextLoading >Carregando ...</TextLoading>
            </CenterUp>
            <CenterDown>
                <Progress.Bar 
                    progress={0} width={dimensions.width - 40} animationType={'decay'} 
                />
            </CenterDown>
        </Container>
    )
};
