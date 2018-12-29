import React from 'react';

const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Daniel
          </a>
          <div className="metadata">
            <span className="date">Tommorow by 2:00am</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    );
}