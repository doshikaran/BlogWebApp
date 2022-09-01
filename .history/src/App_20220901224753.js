import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { Router, Route, Routes  } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/posts"element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}
export default App;