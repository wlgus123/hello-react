import { Component } from 'react';

class Counter extends Component {
  // state의 초깃값 설정하기 - constructor 메서드를 선언하지 않고도 state 초깃값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            //this.setState를 통하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 }); // setState를 두 번 사용해도 숫자는 1씩 더해짐
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
