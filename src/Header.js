import React from 'react'
import "./header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link ,useHistory} from "react-router-dom"

const Header=({backButton})=>{
  const history = useHistory();
  return(
    //BEM
      <div className="header">
        {backButton ? (
            <IconButton onClick={()=>history.replace(backButton)}>
              <ArrowBackIcon className="header__icon" fontSize="large"/>
            </IconButton>
            ) : (
          <IconButton>
            <AccountCircleIcon className="header__icon" fontSize="large"/>
          </IconButton>
        )}

      <Link to="/">
        <img className="header__logo"
            src="flame.png"
            alt="Dender-App" />
      </Link>

    <Link to="/chats">
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
      </IconButton>
    </Link>
      </div>
)
}
export default Header
