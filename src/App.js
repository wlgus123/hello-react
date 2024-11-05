import React from 'react';
import ScrollBox from './ScrollBox';

const App = () => {
  return (
    <div>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
};

export default App;
