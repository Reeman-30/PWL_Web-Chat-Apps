import React, { Component } from "react";
import MessengersUI from "./widgets/messengers/MessengersUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div className="mt-3 container">
        <h3 className="text-center">Chapter One : The Beginning!</h3>
        <MessengersUI />
      </div>
    );
  }
}
