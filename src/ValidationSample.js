import { Component } from 'react';
import './ValidationSample.css';

// DOM을 꼭 사용해야 하는 상황: DOM에 직접적으로 접근해야할 때
// - 특정 input에 포커스 주기
// - 스크롤 박스 조작하기
// - Canvas 요소에 그림 그리기 등

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
