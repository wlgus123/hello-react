import { useState } from 'react';

const IterationSample = () => {
  // useState를 사용하여 상태 설정
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 차가할 때 사용할 id

  // map을 사용하여 리스트 출력
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  // -> Warning: "key" prop이 없습니다. -> li에 key 주면 해결
  return <ul>{nameList}</ul>;
};

export default IterationSample;
