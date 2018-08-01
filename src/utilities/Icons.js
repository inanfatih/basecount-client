import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    switch (this.props.name) {
      case "filter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // height="1792"
            // viewBox="0 0 1792 1792"
            // width="1792"
          >
            <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" />
          </svg>
        );
      case "next-icon-name":
        return <svg />;
      default:
        return <svg />;
    }
  }
}
