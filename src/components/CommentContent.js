import React from "react";
import Comments from "./Comments";

function CommentContent({ comments }){

    const commentsListed = comments.map((comment) => {
        return <Comments 
        user={comment.user}
        comment={comment.comment}
        key={comment.id}
        />
    })

    return (
        <div>
            <h2>Comments</h2>
            {commentsListed}
        </div>
    )

}

export default CommentContent;