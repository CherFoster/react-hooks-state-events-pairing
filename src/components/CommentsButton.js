import React, { useState } from "react";
import CommentContent from "./CommentContent.js";
import video from "../data/video.js";

function CommentsButton(){
    const [seeComments, setAllComments] = useState(false);

    function hideComments(){
        setAllComments(!seeComments)
    }

    return (
        <div>
        <button onClick={hideComments}>
            {seeComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {seeComments ? <CommentContent comments={video.comments}/> : null}
            </div>
            

    )

}

export default CommentsButton;

