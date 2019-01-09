import React, { PureComponent } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class MainMenu extends PureComponent {
  route = route => {
    switch (route) {
      case 1:
        Actions.rn_svgCharts_line();
        break;
      case 2:
        Actions.rn_chartKit_line();
        break;
      case 3:
        Actions.rn_responsiveLineChart_line();
        break;
      case 4:
        Actions.rn_pureChart_line();
        break;
      case 5:
        Actions.rn_chartWrapper_line();
        break;
      case 6:
        Actions.rn_victoryCharts_line();
        break;
      case 7:
        Actions.rn_d3MultiLineChart_line();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(1)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native SVG Charts
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(2)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native Chart Kit
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(3)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native Responsive Line Chart
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(4)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native Pure Chart
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(5)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native Chart Wrapper
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(6)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native Victory Chart
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          underlayColor={"#FFFFFF"}
          onPress={() => this.route(7)}
        >
          <View>
            <Text adjustsFontSizeToFit={true} style={styles.touchableText}>
              React Native D3 MultiLine Chart
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  touchableButton: {
    height: 50,
    width: Dimensions.get("window").width - 50,
    marginTop: 5,
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
