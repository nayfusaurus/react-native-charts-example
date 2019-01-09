import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import * as shape from "d3-shape";
import {
  Grid,
  LineChart,
  XAxis,
  YAxis,
  AreaChart
} from "react-native-svg-charts";
import { Grid as EasyGrid, Row as EasyRow } from "react-native-easy-grid";

export default class rn_svgCharts_line extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];
    const data2 = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];
    const data3 = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
      ]

    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

    return (
      <EasyGrid style={styles.easyGrid}>
        <EasyRow>
          <View style={styles.chartContainer}>
            <YAxis
              data={data3}
              style={{ marginBottom: 30 }}
              contentInset={verticalContentInset}
              svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ flex: 1 }}
                data={data}
                animated={true}
                animationDuration={10}
                svg={{ stroke: "rgba(134, 65, 244, 0.5)" }}
                contentInset={{ top: 10, bottom: 10 }}
                yMin={-100}
                yMax={100}
                
                // curve={shape.curveNatural}
              >
                <Grid />
              </LineChart>
              <LineChart
                style={[{flex:1},StyleSheet.absoluteFill]}
                data={data2}
                animated={true}
                animationDuration={10}
                svg={{ stroke: "rgba(34, 128, 176, 0.5)" }}
                yMin={-100}
                yMax={100}
                contentInset={{ top: 10, bottom: 10 }}
                // curve={shape.curveNatural}
              >
              
              </LineChart>
              

              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={data3}
                formatLabel={(value, index) => value}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
              />
            </View>
                



          </View>
        </EasyRow>
        <EasyRow>
          <TouchableHighlight
            style={styles.touchableButton}
            underlayColor={"#FFFFFF"}
            onPress={() => this.route(1)}
          >
            <View>
              <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
                Start
              </Text>
            </View>
          </TouchableHighlight>
        </EasyRow>
      </EasyGrid>
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
  },
  chart2: {
    flex: 1
  }
});
