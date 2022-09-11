import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrnLogo} from '../../assets/cron.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
            <Link to ='/' className="logo-container">
                <div><CrnLogo className="logo"/></div>
            </Link>


            <div className='nav-links-container'>
                <Link className="nav-link" to='/shop'>SHOP</Link>
            </div>
            <div className='nav-links-container'>
                <Link className="nav-link" to='/sign-in'>SING IN</Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation