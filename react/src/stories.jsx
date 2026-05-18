import { useState, useEffect } from "react";
import './stories.css';

function Stories() {
  const [stories, setStories] = useState([
    { id: 1, user: "ana" },
    { id: 2, user: "luis" },
    { id: 3, user: "mar" },
  ]);

  return (
    <>
      <div>
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </>
  );
}