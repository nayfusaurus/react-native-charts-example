import React, { Component } from "react";

import { VictoryChart, VictoryLine } from "victory-native";

export default class rn_victoryCharts_line extends Component {
  render() {
    return (
      <VictoryChart>
        <VictoryLine samples={25} y={d => Math.sin(5 * Math.PI * d.x)} />
      </VictoryChart>
    );
  }
}
