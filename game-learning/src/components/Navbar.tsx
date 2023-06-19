import { NavLink } from 'react-router-dom'


import "../styles/navbar.scss";
const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="container">
       
       
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/activities">Activities</NavLink>
            </li>
            <li>
              <NavLink to="/puzzle">Puzzle</NavLink>
            </li>
            <li>
              <NavLink to="/quiz">Quiz</NavLink>
            </li>
            {/* <li>
              <a href='https://metalaxis.net/'>metalaxis</a>
            </li> */}
           
          </ul>
        </div>
    </nav>
  )
}

export default Navbar