import * as React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error-boundary">Something went wrong :(<br />
        Please, refresh page.</h1>;
    }
    return this.props.children;
  }
}
