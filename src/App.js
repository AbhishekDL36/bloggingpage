import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {

  return (
    <div className="bg-gray-300">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
