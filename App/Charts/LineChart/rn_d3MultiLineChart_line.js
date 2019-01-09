import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MultiLineChart } from 'react-native-d3multiline-chart'

var data =[ [{
    "y": 202,
    "x": 2000
    }, {
        "y": 215,
        "x": 2001
    }, {
        "y": 179,
        "x": 2002
    }, {
        "y": 199,
        "x": 2003
    }, {
        "y": 134,
        "x": 2003
    }, {
        "y": 176,
        "x": 2010
    }],
    [{
        "y": 152,
        "x": 2000
    }, {
        "y": 189,
        "x": 2002
    }, {
        "y": 179,
        "x": 2004
    }, {
        "y": 199,
        "x": 2006
    }, {
        "y": 134,
        "x": 2008
    }, {
        "y": 176,
        "x": 2010
    }]
    ]
    //default data is available 
    let leftAxisData = [
      134,144,154,164,174,184,194,204,215
    ]
    //default data is available 
    let bottomAxisData = [
      2000,2002,2004,2006,2008,2010
    ]
    let legendColor = ['#00b7d4','red']
    let legendText = ['sales','year']
    let minX= 2000, maxX= 2010
    let minY= 134, maxY= 215
    
    //since there are only two lines
    var Color = ['#00b7d4','red']
    

    
export default class rn_d3MultiLineChart_line extends Component {
 //default data is available 
    
    render() {
        return (
         <View style={styles.container}>
           <MultiLineChart data= {data} leftAxisData= {leftAxisData} bottomAxisData= {bottomAxisData} legendColor= {legendColor}
            legendText= {legendText} minX= {minX} maxX= {maxX} minY= {minY} maxY= {maxY} scatterPlotEnable= {false}   dataPointsVisible= {true} Color= {Color} />
         </View>
        );
      }
    }

    const styles = StyleSheet.create({
        easyGrid: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5FCFF"
        },
        chartContainer: {
          height: Dimensions.get("window").height / 2,
          width: Dimensions.get("window").width,
          padding: 20,
          flexDirection: "row"
        },
        touchableButton: {
          height: 50,
          width: Dimensions.get("window").width - 50,
          marginTop: 50,
          marginBottom: 5,
          padding: 5,
          borderRadius: 10,
          borderColor: "#000000",
          borderWidth: 1,
          backgroundColor: "#75ba75",
          alignItems: "center",
          justifyContent: "center"
        },
        touchableText: {
          fontWeight: "bold"
        }
      });
      