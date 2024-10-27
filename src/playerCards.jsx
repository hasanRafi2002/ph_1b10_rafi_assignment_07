import React, { useEffect, useState } from 'react';

const PlayerCards = ({ onSelectPlayer, coins }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState(new Set());
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/players.json');
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayers();
  }, []);

  const handlePlayerSelect = (player) => {

    if (selectedPlayerIds.size >= 6) {
      showAlert("You can only select up to 6 players!");
      return;
    }

    
    if (coins === 0) {
      showAlert("You cannot add a player because your coin balance is zero!");
      return;
    }


    
    if (!selectedPlayerIds.has(player.playerId)) {
      setSelectedPlayerIds((prev) => new Set(prev).add(player.playerId));
      onSelectPlayer(player);
      showAlert(`Player ${player.name} selected!`);
    } else {
      showAlert(`Player ${player.name} is already selected!`);
    }
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(''), 3000); // Clear alert after 3 seconds
  };








  
  return (
    <div className="container relative p-4 mx-auto rounded-xl ">
      {alertMessage && (
        <div className="fixed top-0 z-[100]  p-8 mt-4 font-extrabold text-white transform -translate-x-1/2 rounded-lg shadow-2xl bg-cyan-500 left-1/2">
          {alertMessage}
        </div>
      )}
      
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between w-full gap-10 mb-8 max-md:max-w-full">
        <div className="self-stretch my-auto text-3xl font-bold text-neutral-900">
          Available Players
        </div>
        <div className="flex gap-0 items-center self-stretch my-auto text-base min-w-[240px]">
          {/* Additional Header Content Can Go Here */}
        </div>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
        {players.map(player => (
          <div
            key={player.playerId}
            className="flex  flex-col  p-6 rounded-2xl border border-neutral-300 w-full max-w-[400px] shadow-slate-800 shadow-lg opacity-[.9] bg-[url(https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/bg-card.jpg?raw=true)] bg-cover"
          >
            {/* Player Image */}
            <img
              src={player.image}
              alt={player.name}
              className="object-cover w-full h-48 mb-4 rounded-lg"
            />
            {/* Player Name and Country */}
            <div className="flex items-center gap-2 text-xl font-bold text-neutral-900">
              <span>{player.countryFlag}</span>{player.name}
            </div>
            <div className="mt-1 font-bold text-neutral-800">{player.country}</div>
            {/* Player Role and Bidding Price */}
            <div className="flex items-center justify-between mt-3">
              <span className="px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded-lg">{player.role}</span>
              <span className="font-semibold text-gray-700">${player.biddingPrice.toLocaleString()}</span>
            </div>
            {/* Player Batting and Bowling Types */}
            <div className="mt-3">
              <div className="font-semibold text-neutral-900">Batting Type:</div>
              <div className="text-neutral-800">{player.battingType}</div>
            </div>
            <div className="mt-2">
              <div className="font-semibold text-neutral-900">Bowling Type:</div>
              <div className="text-neutral-800">{player.bowlingType}</div>
            </div>
            {/* Choose Player Button */}
            <button 
              onClick={() => handlePlayerSelect(player)} 
              className="w-full py-4 mt-8 font-extrabold text-white rounded-lg bg-gradient-to-r from-teal-200 to-blue-200 hover:from-pink-200 hover:to-orange-100"
            >
              Choose Player
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;
