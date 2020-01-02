import React from 'react';
import { Link, NavLink} from 'react-router-dom';
function CommonMenu() {
  return (
    <div className="appMenu">
        <div>
            <NavLink to="/" exact activeStyle={  
             {color:'blue'}  
          }>Registry</NavLink>
        </div>
        <div><NavLink to="/images" exact activeStyle={  
             {color:'blue'}  
          }>Images</NavLink></div>
    </div>
  );
}

export default CommonMenu;
