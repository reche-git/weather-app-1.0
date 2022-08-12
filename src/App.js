import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Layout from "./components/Layout";
import LibrariesUsed from "./components/LibrariesUsed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route>
        <Route path="about-me" element={<AboutMe />} />
      </Route>
      <Route>
        <Route path="libraries-used" element={<LibrariesUsed />}/>
      </Route>
    </Routes>
  );
}

export default App;
