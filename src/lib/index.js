import * as React from "react";
import queryString from "query-string";

const VERSION = "version";

export default class WIP extends React.Component {
  constructor() {
    super();
    this.state = {
      isWip: false,
      version: "",
    };
  }

  componentDidMount() {
    const queryStrObj = queryString.parse(window.location.search);
    if (queryStrObj[VERSION]) {
      this.setState({ version: queryStrObj[VERSION] });

      if (queryStrObj[VERSION] === this.props.version)
        this.setState({ isWip: true });
    }
  }

  render() {
    const { isWip, version } = this.state;

    return (
      <React.Fragment>{this.props.children({ isWip, version })}</React.Fragment>
    );
  }
}
