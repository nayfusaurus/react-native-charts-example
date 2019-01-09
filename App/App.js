import React, { PureComponent } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import MainMenu from "./MainMenu/MainMenu";

import rn_svgCharts_line from "./Charts/LineChart/rn_svgCharts_line";
import rn_chartKit_line from "./Charts/LineChart/rn_chartKit_line";
import rn_responsiveLineChart_line from "./Charts/LineChart/rn_responsiveLineChart_line";
import rn_pureChart_line from "./Charts/LineChart/rn_pureChart_line";
import rn_chartWrapper_line from "./Charts/LineChart/rn_chartWrapper_line";
import rn_victoryCharts_line from "./Charts/LineChart/rn_victoryCharts_line";
import rn_d3MultiLineChart_line from "./Charts/LineChart/rn_d3MultiLineChart_line";

export default class App extends PureComponent {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="mainMenu"
            component={MainMenu}
            title="Main Menu"
            titleStyle={styles.titleStyle}
            initial
          />
          <Scene
            key="rn_svgCharts_line"
            component={rn_svgCharts_line}
            title="SVG Line Chart"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_chartKit_line"
            component={rn_chartKit_line}
            title="Chart Kit Line Chart"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_responsiveLineChart_line"
            component={rn_responsiveLineChart_line}
            title="Responsive Line Chart"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_pureChart_line"
            component={rn_pureChart_line}
            title="Pure Chart Line"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_chartWrapper_line"
            component={rn_chartWrapper_line}
            title="Chart Wrapper Line"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_victoryCharts_line"
            component={rn_victoryCharts_line}
            title="Victory Line Chart"
            titleStyle={styles.titleStyle}
            back
          />
          <Scene
            key="rn_d3MultiLineChart_line"
            component={rn_d3MultiLineChart_line}
            title="D3 Multi Line Chart"
            titleStyle={styles.titleStyle}
            back
          />

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    flex: 1,
    textAlign: "center"
  }
});
