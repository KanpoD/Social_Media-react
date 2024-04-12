import './App.css'
import {Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/NavBarComponent.jsx";
import HomePage from './page/Home_Page/index.jsx';
import CommentsPage from './page/Comments_Page/index.jsx';
function App() {

  return (
      <main>
            <header>
                <NavBar />
            </header>

            <Routes>
                <Route path={'/'} element={< HomePage/>} />
                <Route path={'/comments-page'} element={< CommentsPage/>} />
            </Routes>
        </main>
  )
}

export default App