import "./App.css";
import WhatNasa from "./components/WhatNasa/WhatNasa";
import Navbar from "./components/navbar/Navbar";
import Pod from "./components/pod/Pod";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhatNasa />
      <Pod />
      <Search />
    </div>
  );
}

export default App;
