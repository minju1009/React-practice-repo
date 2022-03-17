import React, { useState, useRef } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: '김민주',
//     content: '하이 1',
//     score: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: '김보윤',
//     content: '하이 2',
//     score: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: '윤서영',
//     content: '하이 3',
//     score: 2,
//     created_date: new Date().getTime()
//   }
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, score) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      score,
      created_date,
      id: dataId.current
    };
    dataId.current++;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    setData(data.filter((item) => item.id !== targetId));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
