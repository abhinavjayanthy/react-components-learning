/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => (
  <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatr" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice Blog Post</div>
      </div>
    </div>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatr" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Bunny
        </a>
        <div className="metadata">
          <span className="date">Today at 6:30pm</span>
        </div>
        <div className="text">Nice Blog Post 1</div>
      </div>
    </div>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatr" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Chill
        </a>
        <div className="metadata">
          <span className="date">Today at 6:45pm</span>
        </div>
        <div className="text">Nice Blog Post 3</div>
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.querySelector('#root'));
