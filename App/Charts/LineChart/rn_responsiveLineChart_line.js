import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Grid as EasyGrid, Row as EasyRow } from "react-native-easy-grid";
import LineChart from "react-native-responsive-linechart";

export default class rn_chartKit_line extends React.PureComponent {
  render() {
    const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
    const config = {
      line: {
        strokeWidth: 1,
        strokeColor: "#216D99"
      },
      area: {
        gradientFrom: "#2e86de",
        gradientFromOpacity: 1,
        gradientTo: "#87D3FF",
        gradientToOpacity: 1
      },
      yAxis: {
        labelColor: "#c8d6e5"
      },
      grid: {
        strokeColor: "#c8d6e5",
        stepSize: 30
      },
      insetY: 10,
      insetX: 10,
      interpolation: "spline",
      backgroundColor: "#fff"
    };
    return (
      <EasyGrid style={styles.easyGrid}>
        <EasyRow>
          <View style={styles.chartContainer}>
            <LineChart style={{ flex: 1 }} config={config} data={data} />
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
  }
});
