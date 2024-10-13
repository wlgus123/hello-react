import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  // 3.3.4 태그 사이의 내용을 보여 주는 children
  return (
    <MyComponent name="React" favoriteNumber={1}>
      React
    </MyComponent>
  );
};

export default App;
