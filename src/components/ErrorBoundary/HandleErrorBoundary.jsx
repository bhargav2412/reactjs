import { Component } from "react";

class HandleErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorIndo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            backgroundColor: "pink",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Oops! Something went wrong.</h2>
          <p>{this.props.fallback}</p>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default HandleErrorBoundary;
