import React from 'react'
import './button.css'
import {Outlet, Link} from 'react-router-dom'

const RoundedButton = (props) => {
  return (
    <>
      <Link to="/edit_cart" className="rounded-btn">
        {props.name}
      </Link>
      <Outlet />
    </>
    // <Routes>
    //   <Route
    //     render={({history}) => (
    //       <button
    //         onClick={() => history.push('/edit_cart')}
    //         className="rounded-btn">
    //         {props.name}
    //       </button>
    //     )}
    //   />
    // </Routes>
  )
}

export default RoundedButton
