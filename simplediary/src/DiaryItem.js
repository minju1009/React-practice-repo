const DiaryItem = ({ id, author, content, score, created_date }) => {
  return (
    <div className="DiaryItem">
      <div className="Info">
        <span>
          작성자 : {author} | 감정점수 : {score}
        </span>
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
