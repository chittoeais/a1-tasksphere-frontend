import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<b>Hello World!</b>} />
      </Routes>
    </>
  )
}

export default App
