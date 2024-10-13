import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 3.3.7 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
  // 3.3.3 props 기본값 설정: defaultProps
  static defaultProps = {
    name: 'nothing',
  };
  // 3.3.6 propsTypes를 통한 props 검증
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    // 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        Hello, my name is {name}. <br />
        children: {children}.{' '}
        {/* 3.3.4 태그 사이의 내용을 보여 주는 children */}
        <br />
        My favorite number is {favoriteNumber}.
      </div>
    );
  }
}

export default MyComponent;
