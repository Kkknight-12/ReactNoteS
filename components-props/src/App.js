import CommentDetail  from "./CommentDetail";
import { useState } from 'react';
// import ApprovalCard from './ApprovalCard';

function App() {
  const  [ data, setData ] = useState( [
    { author: 'Knight', time : '9.00AM', text: 'Great Post!', id: 1},
    { author: 'Luffy', time : '12.00PM', text: 'I like the post', id: 2},
    { author: 'Babu Bhaia', time : '12.00AM', text: 'Great', id: 3}

  ])
  return (
    // <ul>
    <div className="ui container comments">
      {/* <ApprovalCard> */}
        <CommentDetail data = {data}/>
      {/* </ApprovalCard> */}
    </div>
    // </ul>
  );
}

export default App;
