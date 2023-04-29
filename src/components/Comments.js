import React from "react";

function Comments({ comment, user }){
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comments;