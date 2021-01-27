import './App.css';

function App() {
  return (
    <div className="ui container comments">
      <dir className="comment">
        {/* image */}
        <a href="/" className="avatar">
          <img alt="avatar"/>
        </a>
        {/* author name */}
        <div className="content">
          <a href="/" className="author">
            knight
          </a>
          {/* time */}
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
            {/* text */}
            <div className="text">
              Nice Blog Post!
            </div>
          </div>
        </div>
      </dir>
    </div>
  );
}

export default App;
