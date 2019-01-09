import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Grid as EasyGrid, Row as EasyRow } from "react-native-easy-grid";
import PureChart from "react-native-pure-chart";

export default class rn_chartKit_line extends React.PureComponent {
  render() {
    let sampleData = [
      { x: "2018-01-01", y: 30 },
      { x: "2018-01-02", y: 200 },
      { x: "2018-01-03", y: 170 },
      { x: "2018-01-04", y: 250 },
      { x: "2018-01-05", y: 10 }
    ];
    return (
      <EasyGrid style={styles.easyGrid}>
        <EasyRow>
          <View style={styles.chartContainer}>
            <PureChart data={sampleData} type="line" />
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
