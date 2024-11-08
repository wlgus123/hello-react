import React, { useRef } from 'react';
import ScrollBox from './ScrollBox';

const App = () => {
  const scrollBox = useRef();
  return (
    <div>
      {/* this 사용 시 에러 발생 - 올바르게 참조 X. 따라서 useRef 사용하여 ref 관리 */}
      <ScrollBox ref={scrollBox} />
      <button onClick={() => scrollBox.current.scrollToBottom()}>
        맨 밑으로
      </button>
    </div>
  );
};

export default App;
