import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    
  return (
    <div>
        <div>

<nav className="navbar navbar-expand-lg container-fluid" style={{backgroundColor:"transparent !important", position:"absolute",top:"0px",zIndex:"999"}}>
  <div className="container-fluid">

  <Link className="navbar-brand" to="/">
      <img src="./netflix.png" alt="logo" width={90} height={90} style={{boxShadow:"1px 1px 1px 1px whitesmoke"}} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:'relative', float:"right", flexDirection:"row",justifyContent:"flex-end", alignItems:"flex-end"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
       
      </ul>

    </div>
  </div>
</nav>

    </div>
    </div>
  )
}

export default Navbar
