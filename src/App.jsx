import NavBar from './Components/NavBar'
import './index.css'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
function App() {


  return (
  
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>

    </main>
  
  )
}

export default App
