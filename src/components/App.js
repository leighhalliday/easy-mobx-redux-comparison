import React from "react";
import Form from "./Form";
import Images from "./Images";
import Status from "./Status";

export default class App extends React.Component {
  componentWillMount() {
    this.props.fetchImages("Mountains");
  }

  render() {
    return (
      <div className="App">
        <Form />
        <Status />
        <Images />
      </div>
    );
  }
}
