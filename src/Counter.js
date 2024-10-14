import { Component } from 'react';

class Counter extends Component {
  // constructor를 사용하여 state 설정
  constructor(props) {
    super(props); // constructor 사용 시, 반드시 super 호출
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            //this.setState를 통하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
