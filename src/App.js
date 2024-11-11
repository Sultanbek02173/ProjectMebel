import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Blog, Contact, Home, Team, Error, Services, Projects } from './pages';

function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contact'}>contact</Link>
        <Link to={'/team'}>Team</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/projects'}>Projects</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Error />} />

      </Routes>

      <div>
        <footer>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
