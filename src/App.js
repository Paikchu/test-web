import React, { useState } from 'react';
import './App.css';

function App() {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const addComment = () => {
        if (commentInput.trim()) {
            setComments([...comments, commentInput.trim()]);
            setCommentInput('');
        } else {
            alert('评论不能为空！');
        }
    };

    return (
        <div className="app">
            <h1>致何敏燕</h1>
            <div className="heart">❤️</div>
            <p>亲爱的何敏燕，</p>
            <p>我想对你说，我真的很喜欢你。你的笑容让我感到温暖，你的存在让我感到幸福。</p>
            <p>希望我们能一起创造更多美好的回忆。</p>
            <div className="heart">❤️</div>
            <p>永远喜欢你的张宇辰</p>
            <div className="footer">此网页仅为表达心意而作</div>

            <h2>留下你的评论</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <textarea
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    rows="4"
                    placeholder="写下你的评论..."
                ></textarea>
                <button type="button" onClick={addComment}>
                    提交评论
                </button>
            </form>
            <div id="commentsSection">
                <h3>评论区</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
