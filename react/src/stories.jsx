import { useState, useEffect } from "react";
import './stories.css';
import Story from "./story.jsx";
function Stories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: "ana",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      user: "lui",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      user: "mar",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      user: "pep",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      user: "jos",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      user: "fed",
      img: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 7,
      user: "ric",
      img: "https://i.pravatar.cc/150?img=7",
    },

  ]);

  return (
    <>
      <div>
        {stories.map((story) => (
          <Story key={story.id}
            username={story.user} imagen={story.img} />
        ))}
      </div>
    </>
  );
}
export default Stories;