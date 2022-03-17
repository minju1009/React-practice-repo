import React from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '김민주',
    content: '하이 1',
    score: 3,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: '김보윤',
    content: '하이 2',
    score: 4,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: '윤서영',
    content: '하이 3',
    score: 2,
    created_date: new Date().getTime()
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
