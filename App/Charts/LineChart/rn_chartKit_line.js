import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Grid as EasyGrid, Row as EasyRow } from "react-native-easy-grid";
import { LineChart as LineChartKit } from "react-native-chart-kit";

export default class rn_chartKit_line extends React.PureComponent {
  render() {
    return (
      <EasyGrid style={styles.easyGrid}>
        <EasyRow>
          <View style={styles.chartContainer}>
            <LineChartKit
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June"
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "#F5FCFF",
                backgroundGradientFrom: "#F5FCFF",
                backgroundGradientTo: "#F5FCFF",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  flex: 1,
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                flex: 1,
                marginVertical: 8,
                borderRadius: 16
              }}
            />
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
