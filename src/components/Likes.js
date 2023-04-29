import React, { useState } from "react";

function Likes({ upvotes, downvotes }){
    const [upVote, setUpVote] = useState(upvotes);
    const [downVote, setDownVote] = useState(downvotes);

    function handleUpVote(){
        // console.log('before', upVote)
        setUpVote(upVote + 1);
        // console.log('after', upVote)
    }

    // console.log('in component', upVote)

    function handleDownVote(){
        setDownVote(downVote - 1);
    }

    return(
        <div>
            <button onClick={handleUpVote}>{upVote} 👍</button>
            <button onClick={handleDownVote}>{downVote} 👎</button>
        </div>
    )

}

export default Likes;