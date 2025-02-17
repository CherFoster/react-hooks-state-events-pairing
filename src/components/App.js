import video from "../data/video.js";
import Details from "./Details.js";
import Likes from "./Likes.js";
import CommentsButton from "./CommentsButton.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details video={video}/>
      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentsButton />
    </div>
  );
}

export default App;
