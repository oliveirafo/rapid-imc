import React from 'react';
import { Dimensions } from 'react-native';
import { VictoryPie } from "victory-native";

const {height, width} = Dimensions.get("screen");

const graphiParams = [
        { y: 2, color: '#0a556e' },
        { x: "16", y: 2, color: '#20728d' },
        { x: "17", y: 2, color: '#00BFFF' },
        { x: "18", y: 30.43, color: '#00cc00' },
        { x: "25", y: 21.73, color: '#dfdf31f6' },
        { x: "30", y: 21.73, color: '#ffa500' },
        { x: "35", y: 21.73, color: '#FF000090' },
        { x: "40", y: 2, color: '#FF0000'}
    ];

export function VPie () {
    return (
        <VictoryPie 
            width={width - 20}
            height={height / 2.2}
            //animate
            data={graphiParams}
            startAngle={-120}
            endAngle={120}
            innerRadius={50}
            colorScale={ graphiParams.map( (e: any) => e.color ) }
            labels={({ datum }) => datum.x }
            labelPosition={ "startAngle" }
            labelPlacement={ "vertical" }
            style={{ 
                labels: { fill: "black", fontSize: 12, fontWeight: "bold",}
            }}
        />
    )
};