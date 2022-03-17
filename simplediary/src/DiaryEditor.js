import { useState, useRef } from 'react';
import './DiaryEditor.scss';

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
    score: '1'
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.score);
    alert('저장 완료!👍');
    state.author = '';
    state.content = '';
    state.score = '1';
  };

  return (
    <div className="DiaryEditor">
      <h2>5 MINUTE DIARY🌟</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
          name="author"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
          name="content"
        ></textarea>
      </div>
      <div>
        <select name="score" value={state.score} onChange={handleChangeState}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
