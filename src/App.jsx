import "./App.css";
// import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route index path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
      </Route>
    
    </Routes>
  );
}

export default App;
