import React, { PureComponent } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import MainMenu from "./MainMenu/MainMenu";

import rn_svgCharts from "./LineChart/rn_svgCharts";

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
            key="rn_svgCharts"
            component={rn_svgCharts}
            title="SVG Charts"
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
