import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Dec. 30th, 2018"
        text="Nice blog post"
      />
      <CommentDetail
        author="Jane"
        date="Jan. 2nd, 2019"
        text="Miss Kolawole is beautiful"
      />
      <CommentDetail
        author="Dammy"
        date="Feb. 11th, 2019"
        text="I am a FullStack Developer"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
