import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<b>Hello World!</b>} />
      </Routes>
    </>
  )
}

export default App
