import ApprovalCard from './ApprovalCard';

const CommentDetail = (props) => {
    const data = props.data;

    return ( 
        <div >
            {
                data.map( data => ( 
                    
                    <div className="comment" key={ data.id }>
                        {/* image */}
                        <a href="/" className="avatar">
                            <img alt="" src="https://source.unsplash.com/random"/>
                        </a>
                        {/* author name */}
                        <div className="content">
                        <a href="/" className="author">
                            {data.author}
                        </a>
                            {/* time */}
                            <div className="metadata">
                                <span className="date">{data.time}</span>
                                {/* text */}
                                <div className="text">
                                {data.text}
                                </div>
                            </div>
                        </div>
                        <ApprovalCard/>
                    </div>
                ))
            }
        </div>    
    );
}

export default CommentDetail;

// without props
// const CommentDetail = (props) => {
//     const data = props.data;
//     // console.log(data)
//     return ( 
//         <div className="comment">
//             {/* image */}
//             <a href="/" className="avatar">
//                 <img src="https://source.unsplash.com/random"/>
//             </a>
//             {/* author name */}
//             <div className="content">
//             <a href="/" className="author">
//                 knight
//             </a>
//             {/* time */}
//             <div className="metadata">
//                 <span className="date">Today at 6:00PM</span>
//                 {/* text */}
//                 <div className="text">
//                 Nice Blog Post!
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default CommentDetail;