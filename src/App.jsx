



import React, {  useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlayerCards from './playerCards';
import SelectedPlayers from './selectPlayer';





const App = () => {


  const [selectedPlayers, setSelectedPlayers] = useState([]);


  const handleSelectPlayer = (player) => {
    // Add player to selected players
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
  };







  const handleDeletePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);
    if (playerToRemove) {
      setCoins(coins + playerToRemove.biddingPrice); // Refund the coins
      setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId)); // Remove the player
    }
  };


  

  const [coins, setCoins] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle claiming free credits
  const claimFreeCredits = () => {
    // alert("You have claimed 10 free credits!");
    setCoins(coins + 10000000000); // Increase coins by 10 (or any other amount you want)

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };




// const App = () => {
  return (
    <div>
      
{/* ------------------------- */}

{/* start of main desktop */}
    <div className="flex flex-col items-end bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% z-[-1]   ">

    {/* start of desktop */}
      <div className="flex flex-col items-center w-full pt-4 overflow-hidden max-md:max-w-full">
        
        
        {/* ---------------------------- */}
        
        
        
        
        
        {/* start of navigation */}

        <div className="lg:h-[150px]  h-[300px]"></div>
        
        <div className="z-[100] bg-cyan-200  rounded-lg bg-opacity-[.4] p-8 fixed flex flex-wrap gap-10 justify-between items-center w-full text-base max-w-[1320px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/hasanrafi1122/photos/f859ec613c658c1761a5892eff33a947626e0ba7/ph-assignment/assignment-7/cric-header-logo.svg"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.01] w-[73px]"
          />
          <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">


          <details className="dropdown">
  <summary className="m-1 btn   w-[70px] h-[40px]  md:hidden"><img className="w-[40px] h-[40px] " src="https://raw.githubusercontent.com/hasanrafi1122/photos/9b1d6467f9d7ecc24a27084192300a1e447792a6/ph-assignment/assignment-7/align-justify-r.svg" /> </summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
  <li className="self-stretch my-auto"><a className="" href="#">Home</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Fixture</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Teams</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Schedules</a></li>
  </ul>
</details>



            <ul className="hidden md:contents gap-10 justify-center items-center self-stretch my-auto whitespace-nowrap min-w-[240px] text-neutral-900 text-opacity-70">
              <li className="self-stretch my-auto"><a className="" href="#">Home</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Fixture</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Teams</a></li>
              <li className="self-stretch my-auto"><a className="" href="#">Schedules</a></li>
            </ul>
            




            
            <button className="flex gap-2.5 justify-center items-center self-stretch px-5 py-4 my-auto font-semibold bg-white rounded-xl border border-solid border-neutral-900 border-opacity-10 text-neutral-900">
            <span className="">$</span><span className="">{coins}</span><span className="">Coin</span>
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/hasanrafi1122/photos/f859ec613c658c1761a5892eff33a947626e0ba7/ph-assignment/assignment-7/coin.svg"
                className="self-stretch object-contain w-5 my-auto shrink-0 aspect-square"
              />
            </button>
          </div>
        </div>


{/* end of navigation */}



{/* -------start of banner section */}



<div className="flex  overflow-hidden relative gap-2.5 justify-center items-start px-2.5 py-16 mt-6 w-full rounded-3xl border border-solid  border-neutral-900 border-opacity-10 max-w-[1320px] max-md:max-w-full bg-cover opacity-[]   bg-[url(https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/cricbg2.jpg?raw=true)]">
          
          
          
          <div className="flex z-0 flex-col justify-center items-center my-auto min-w-[240px] w-[970px] max-md:max-w-full ">
            <img
              loading="lazy"
              src="https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/cricket-banner-logo.png?raw=true"
              className="object-contain max-w-full aspect-[1.24] w-[248px] "
            />
            <div className="flex flex-col justify-center mt-6 max-w-full w-[970px]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col items-center w-full text-center">
                    <div className="p-2 text-4xl font-bold rounded-lg bg-slate-800 bg-opacity-[.5]  text-gray-50 max-md:max-w-full">
                      Assemble Your Ultimate Dream 11 Cricket Team
                    </div>
                    <div className="p-2 mt-4 text-2xl font-medium text-white bg-opacity-50 rounded-lg txt-opacity-100 bg-slate-800">
                      Beyond Boundaries Beyond Limits
                    </div>
                  </div>
                  <div className="h-[100px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex absolute bottom-0 z-0 shrink-0 self-start h-[973px] min-w-[240px] right-[-375px] w-[1992px] max-md:max-w-full" />
        
        </div>


        <div className="flex flex-col justify-center p-1 mt-6 text-base font-bold bg-white border border-teal-300 border-solid  rounded-2xl bg-opacity-10 text-gray-800 relative top-[-150px]">
        <button  onClick={claimFreeCredits} className=" gap-2.5 self-stretch px-5 py-3.5 bg-gradient-to-r from-teal-200 to-blue-200 hover:from-pink-200 hover:to-orange-100 rounded-xl ">
              <a className="text-xl font-extrabold" href="#" >Claim Free Credit</a> 
        </button>

        {showAlert && <Alert />}
        </div>




{/* ---------end of banner section */}










 <Router>
      
      
      <div  className="rounded-xl p-4 bg-gradient-to-r from-sealth-00 from-10% via-orange-100 via-30% to-lime-00 to-90% " >
        {/* Navigation Links */}
        <nav className="flex object-right p-4 relative lg:left-[60%] gap-2    flex-col lg:flex-row">
          <Link to="/" className="w-[150px] text-center gap-2.5 self-stretch px-8 py-3.5 my-auto font-bold whitespace-nowrap bg-gradient-to-r from-teal-200 to-blue-100 hover:from-pink-200 hover:to-orange-100 rounded-xl border border-solid border-neutral-900 border-opacity-10 text-neutral-900 max-md:px-5">Available</Link>
          <Link to="/selected" className="w-[250px] text-center gap-2.5 self-stretch px-8 py-3.5 my-auto font-bold whitespace-nowrap bg-gradient-to-r from-teal-200 to-blue-100 hover:from-pink-200 hover:to-orange-100 rounded-xl border border-solid border-neutral-900 border-opacity-10 text-neutral-900 max-md:px-5">
            Selected Players ({selectedPlayers.length})
          </Link>
        </nav>

        {/* Routes */}


        <Routes>
          <Route
            path="/"
            element={
              <PlayerCards 
                coins={coins}
                onSelectPlayer={handleSelectPlayer} 
                selectedPlayers={selectedPlayers} 
              />
            }
          />
          <Route
            path="/selected"
            element={
              <SelectedPlayers 
                selectedPlayers={selectedPlayers} 
                onDeletePlayer={handleDeletePlayer} 
              />
            }
          />
        </Routes>

  <button className=""><Link to="/" className="relative bottom-[-100px] text-center gap-2.5 self-stretch px-8 py-3.5 my-auto font-bold whitespace-nowrap bg-gradient-to-r from-teal-200 to-blue-100 hover:from-pink-200 hover:to-orange-100 rounded-xl border border-solid border-neutral-900 border-opacity-10 text-neutral-900 max-md:px-5">Add More Players</Link></button>
 



 
      </div>
    </Router>










{/* ----------start of  main footer */}

        <div className="h-[500px] lg:h-[00px]"></div>
        <div className="flex flex-col self-stretch mt-96 bg-slate-950 max-md:mt-10 max-md:max-w-full bg-[url('https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/bg-2.jpg?raw=true')] bg-cover">
          
          
          
          {/* start of newsletter */}
          
          <div className="top-[-100px] relative flex z-10 flex-col justify-center self-center p-6 mt-0 w-full rounded-3xl border-2 border-white border-solid bg-white bg-opacity-10 max-w-[1340px] max-md:px-5 max-md:max-w-full  bg-[url('https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/bg-shadow.png?raw=true')]">
            <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 py-24 w-full bg-white rounded-3xl border border-solid border-neutral-900 border-opacity-10 max-md:max-w-full bg-cover bg-center bg-[url('https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/bg-cric.png?raw=true')]">
              <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[819px] ">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center w-full max-w-[819px] max-md:max-w-full  ">
                    <div className="flex flex-col items-center w-full text-center">
                      <div className="text-3xl font-bold text-gray-100 max-md:max-w-full">
                        Subscribe to our Newsletter
                      </div>
                      <div className="mt-4 text-xl font-medium text-gray-100 text-opacity-70 max-md:max-w-full">
                        Get the latest updates and news right in your inbox!
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start gap-4 mt-6 text-base max-md:max-w-full">
                      <input placeholder='Enter your email' type='email' className="overflow-hidden gap-2.5 self-stretch px-8 py-5 bg-white rounded-xl border border-solid border-neutral-900 border-opacity-10 min-w-[240px] text-neutral-900 text-opacity-40 w-[400px] max-md:px-5"/>
                        
                      
                      <button className="flex overflow-hidden relative flex-col gap-2.5 self-stretch px-8 py-5 font-bold whitespace-nowrap rounded-xl aspect-[2.589] text-neutral-900 w-[145px] max-md:px-5">
                        <img
                          loading="lazy"
                          srcSet="https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/b-subscribe.png?raw=true"
                          className="absolute inset-0 object-cover size-full"
                        />
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* -----------end of news letter */}



{/* ---------start of footer */}


          <div className="flex flex-col w-full px-6 mt-9 max-md:max-w-full">
            <div className="flex flex-col self-center max-w-full w-[1320px]">
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/hasanrafi1122/photos/c5d5765842936eb609cc414a75bef6e8888605a8/ph-assignment/assignment-7/crick-footer-logo.svg"
                className="object-contain self-center max-w-full aspect-[1.02] w-[142px]"
              />
              <div className="flex flex-wrap items-start justify-between w-full gap-10 mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col min-w-[240px] w-[291px]">
                  <div className="text-lg font-semibold text-white">
                    About Us
                  </div>
                  <div className="mt-4 text-base leading-7 text-white text-opacity-60">
                    We are a passionate team dedicated to providing the best
                    services to our customers.
                  </div>
                </div>
                <div className="flex flex-col min-w-[240px] w-[291px]">
                  <div className="text-lg font-semibold text-white">
                    Quick Links
                  </div>
                  <div className="mt-4 text-base leading-9 text-white text-opacity-60">
                    <a href='#' className="">Home</a> 
                    <br />
                    <a href='#' className="">Services</a> 
                    <br />
                    <a href='#' className="">About</a> 
                    <br />
                    <a href='#' className="">Contact</a>
                  </div>
                </div>
                <div className="flex flex-col w-96 min-w-[240px]">
                  <div className="flex flex-col max-w-full w-[291px]">
                    <div className="text-lg font-semibold text-white">
                      Subscribe
                    </div>
                    <div className="mt-4 text-base leading-7 text-white text-opacity-60">
                      Subscribe to our newsletter for the latest updates.
                    </div>
                  </div>
                  <div className="flex items-start w-full gap-0 mt-5 text-base">
                    <input placeholder='Enter your email' className="overflow-hidden gap-2.5 self-stretch px-8 py-3.5 w-60 bg-white rounded-xl border border-solid border-white border-opacity-10 text-neutral-900 text-opacity-40 max-md:px-5"/>
                      
                    
                    <button className="flex overflow-hidden relative flex-col gap-2.5 self-stretch px-8 py-3.5 font-bold whitespace-nowrap rounded-none aspect-[3.021] text-gray-950 w-[145px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/assignment-7/b-subscribe.png?raw=true"
                        className="absolute inset-0 object-cover size-full"
                      />
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-2.5 self-stretch py-8 mt-20 w-full text-base leading-loose text-center border-t border-white border-opacity-10 text-white text-opacity-60 max-md:mt-10 max-md:max-w-full">
              @2024 Your Company All Rights Reserved.
            </div>
          </div>

{/* -------end of footer */}


        </div>


{/* --------end of main footer */}






{/* ------------------------------------ */}
      </div>

      {/* end of desktop */}

    </div>


{/* end of main dextop */}









    </div>
  );
};



function Alert() {
  return (
    <div className="fixed z-[100] p-4 font-extrabold text-white bg-cyan-500 rounded-md shadow-md alert top-5 right-5 animate-slideInOut w-[40%]">
      You have claimed $10 Million free credits!
    </div>
  );
}






export default App;