const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name) => <li>{name}</li>); // map을 사용하여 리스트 출력
  return <ul>{nameList}</ul>; // Warning: "key" prop이 없습니다.
};

export default IterationSample;
