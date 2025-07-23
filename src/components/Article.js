import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to calculate the emoji display for minutes to read
  const getMinutesToRead = (minutes) => {
    if (!minutes) return "";
    
    if (minutes < 30) {
      // For every 5 minutes (rounded up), display a coffee cup emoji
      const coffeeCups = Math.ceil(minutes / 5);
      const coffeeEmojis = "☕️".repeat(coffeeCups);
      return `${coffeeEmojis} ${minutes} min read`;
    } else {
      // For every 10 minutes (rounded up), display a bento box emoji
      const bentoBoxes = Math.ceil(minutes / 10);
      const bentoEmojis = "🍱".repeat(bentoBoxes);
      return `${bentoEmojis} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {getMinutesToRead(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;