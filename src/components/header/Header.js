import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { FaSearch} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const[togel, setTogel] = useState(false);

    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();

    const SubmitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" + searchItem);
    };

    return (<>
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}><h3 className="header__icon">MOVIESLAND</h3></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}} className="desktop_nav"><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}} className="desktop_nav"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}} className="desktop_nav"><span>Upcoming</span></Link>
    
            </div>
                        {/* //////////////////search button///////// */}
            <div className="headerright">    
               <form className="formstyle" onSubmit={SubmitHandler}>
                 <div className="search">
                  <FaSearch></FaSearch>
                   <input 
                     placeholder="search for movies"
                     value={searchItem}
                     onChange={(e) => setSearchItem(e.target.value)}
                     />
                 </div>
                </form>
            </div>
                         {/* search botton end///////// */}


                         {/* mobile menue bar */}
            <div className="mobile_navbar">
                <div className="menu"><GiHamburgerMenu onClick={() => {setTogel(!togel)}} /></div>  
            </div>
        </div>
        <div className={togel?"mobile_menu":"none"}>
                
                <Link to="/movies/popular" style={{textDecoration: "none"}} className={togel?"mobile_nav":"none"}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}} className={togel?"mobile_nav":"none"}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}} className={togel?"mobile_nav":"none"}><span>Upcoming</span></Link>
        </div>
     </>   
    )
}

export default Header