

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import FirstBlog from "./FirstBlog";

function App() {

  return (
    <div className="bg-gray-300">
     <Header/>
     <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/blog" element={<FirstBlog/>}/>
     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
