"use client";
import React, { useState } from "react";
import { cards } from "./layout";

const Home = async () => {
  const [droppedCards, setDroppedCards] = useState([]);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const handleDrop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    console.log("Dropped:", cardId);
    const foundCard = cards.find((card) => card.name === cardId);
    if (foundCard) {
      console.log("Dropped card content:", foundCard);
      setDroppedCards([...droppedCards, foundCard]); 
    } else {
      console.log("Card with ID not found:", cardId);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <h3>list items</h3>

      {data ? (
        <>
          {data.map((user) => (
            <div
              key={user.id}
              className="border-b pl-3 hover:border-l-2 hover:bg-gray-200 hover:border-lime-500 hover:pl-2.5 cursor-pointer"
            >
              <p className="name ">{user.name}</p>
            </div>
          ))}
        </>
      ) : (
        <>Loading...</>
      )}

      {/* Div for dropping */}
      <div
        className="border-2 rounded border-gray-400 w-64 my-5 h-[300px] overflow-auto"
        id="div1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Display the dropped cards */}
        {droppedCards.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 place-content-center p-5">
            {droppedCards.map((card, index) => (
              <div
                key={index}
                className="w-full rounded overflow-hidden border-2 border-gray-200 shadow-lg"
              >
                <div id={card.name}>
                  <img
                    draggable="false"
                    className="w-full h-24"
                    src={card.url}
                    alt={card.name}
                  />
                  <div className="p-1 mb-0">
                    <div className="font-semibold text-sm capitalize">
                      {card.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 p-5">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full rounded overflow-hidden border-2 border-gray-200 shadow-lg animate-pulse"
            >
              <div className="w-full h-24 bg-gray-300"></div>
              <div className="mb-0">
                <div className="font-semibold text-sm capitalize bg-gray-300 h-6"></div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Home;
