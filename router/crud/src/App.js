import './App.css';
import {NewPost} from "./components/NewPost/NewPost";
//import PostItem from "./components/PostItem";
import {Route, Routes} from "react-router-dom";
import PostList from "./components/PostList";
import {ContextProvider} from "./context";
import PostId from "./components/PostId";
import EditPost from "./components/EditPost";


function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact element={ <PostList />} />
          <Route path="/posts/new"  element={ <NewPost />} />
          <Route path="/posts/:id" element ={<PostId />} />
          <Route path="/posts/:id/edit" element ={<EditPost />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
