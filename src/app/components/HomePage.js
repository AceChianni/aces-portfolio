import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 mt-12">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8">
          Hi there! I'm Ace Chianni, a self-taught multimedia artist who is
          honing my digital art skills.
        </p>
        <p className="text-lg mb-8">
          I have a passion for creating visually engaging artworks that blend
          different mediums and techniques. Whether it's digital painting,
          graphic design, or photoshop manipulation, I love exploring new ways
          to express my creativity.
        </p>
        <p className="text-lg">
          Explore my portfolio to see some of my latest projects and artworks!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
