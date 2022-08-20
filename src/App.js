import { useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Gallery from "./components/Gallery";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-dark-greys w-screen h-screen ">
        <div className="absolute h-full ">
            <Navbar open={open} setOpen={setOpen}/>
        </div>
        <div className={`relative ${
          open ? "w-9/12 ml-[300px]" : "w-5/6 ml-[150px]"
        }  h-full  flex flex-col gap-[60px] duration-200`}>
            <div className="h-11 top-8 relative">
              <SearchBar open={open} setOpen={setOpen}/>
            </div>
            <div className="h-5/6 relative bg-light-greys rounded-lg p-7">
              <div className="h-full relative overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Gallery open={open} setOpen={setOpen}/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
