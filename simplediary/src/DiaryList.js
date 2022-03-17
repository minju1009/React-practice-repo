import React from 'react';
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onDelete }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h3>{diaryList.length}개 일기가 있습니다.</h3>
      <div>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;