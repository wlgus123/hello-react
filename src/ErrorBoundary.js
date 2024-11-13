import { Component } from 'react';

// 에러 발생 시 호출
class ErrorBoundary extends Component {
  state = {
    error: true,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
