import React from 'react';

const SelectedPlayers = ({ selectedPlayers, onDeletePlayer }) => {
  return (
    <div className="container p-4 mx-auto bg-gray-100 w-[60vw]">
      <h1 className="mb-4 text-3xl font-bold">Selected Players</h1>
      {selectedPlayers.length === 0 ? (
        <p>No players selected.</p>
      ) : (
        <ul>
          {selectedPlayers.map(player => (
            <li key={player.playerId} className="flex flex-col items-center p-4 mb-2 bg-white rounded-lg shadow sm:flex-row">
              <img src={player.image} alt={player.name} className="w-16 h-16 rounded-full" />
              <div className="inline-block ml-4">
                <h2 className="text-xl font-semibold">{player.name}</h2>
                <p>{player.country}</p>
                <p>Bidding Price: ${player.biddingPrice.toLocaleString()}</p>
              </div>
              <button
                onClick={() => onDeletePlayer(player.playerId)}
                className="px-4 py-2 ml-auto text-white "
              >
                <img src="https://raw.githubusercontent.com/hasanrafi1122/photos/200494c30fd7043f10b8588f0421569ec388d3ee/ph-assignment/assignment-7/delete.svg" />
              </button>
            </li>
          ))}
        </ul>
      )}
      

    </div>
  );
};

export default SelectedPlayers;
