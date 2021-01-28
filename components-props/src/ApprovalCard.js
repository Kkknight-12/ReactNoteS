const ApprovalCard = (props) => {
    // console.log(props)
    return ( 
        <div className="card">
            {/* <div className="context"></div> */}
            <div className="extra content">
                <div className="two buttons">
                    <button className="basic green button">Approve</button>
                    <button className="basic red button">Reject</button>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;