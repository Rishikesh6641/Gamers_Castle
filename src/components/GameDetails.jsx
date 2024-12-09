import React from "react";
import { useParams } from "react-router-dom"; 

const GameDetailsPage = ({ games }) => {
  const { id } = useParams(); 

 
  const game = games.find(game => game.id === parseInt(id));

  if (!game) {
    return <p>Game not found.</p>;
  }

  return (
    <div className="game-details-page" style={{ textAlign: "center", padding: "20px" }}>
      <h1>{game.name}</h1> 
     
      <video controls style={{ width: "80%", maxWidth: "800px" }}>
        <source src={game.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{game.description || "Description not available."}</p>
    </div>
  );
};

export default GameDetailsPage;
