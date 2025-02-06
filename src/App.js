

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import FirstBlog from "./FirstBlog";
import Blogsintro from "./Blogsintro";

function App() {

  return (
    <div className="bg-gray-300">
     <Header/>
     <Routes>
      <Route path="/" element={<Blogsintro/>} />
      <Route path="/blog" element={<FirstBlog/>}/>
     </Routes>
     
    
    </div>
  );
}

export default App;
