import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import MyList from "./Routes/MyList";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myList" element={<MyList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
