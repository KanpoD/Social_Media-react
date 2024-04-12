import './App.css'

import {Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/NavBarComponent.jsx";
import HomePage from './page/Home_Page/index.jsx';
import PostPage from './page/Post_Page/index.jsx';
import AddPost from './page/AddPost_Page/index.jsx'
function App() {

  return (
      <main>
            <header>
                <NavBar />
            </header>
            <Routes>
                <Route path={'/'} element={< HomePage/>} />
                {/* <Route path={'/comments-page'} element={< CommentsPage/>} /> */}
                <Route path="/posts/:postId" element={<PostPage />} />
                <Route path='/add-post' element ={<AddPost/>}/>
            </Routes>
        </main>
  )
}

export default App