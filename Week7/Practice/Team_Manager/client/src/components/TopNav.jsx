import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const TopNav = (props) => {
  const { manage } = props;


  const [manageTabStyle, setManageTabStyle] = useState({});
  const [statusTabStyle, setStatusTabStyle] = useState({});


  const styleObjBold = {
    fontWeight: "800",
  };
  
  useEffect(() => {
    if (manage) {
    setManageTabStyle(styleObjBold);
    setStatusTabStyle({});
    }  else {
    setManageTabStyle({});
    setStatusTabStyle(styleObjBold);
    }
  }, [manage]);
  
  return (
    <div>
        <div>
        <span className="nav-text" style={manageTabStyle}>
          <Link to="/players/list">Manage Players</Link>
        </span>
        <span className="nav-text"> | </span>
        <span className="nav-text"  style={statusTabStyle}>
        <Link to={`/status/game/1`} >Manage Player Status</Link>
        </span>
      </div> 
    </div>

  );
};

export default TopNav;