import Header from "./Header/Header";
import BlogPost from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <BlogPost/>
      <Sidebar/>

    </div>
  );
}

export default App;
