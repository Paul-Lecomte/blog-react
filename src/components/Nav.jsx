import React from 'react';
import {Link} from "react-router-dom";

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">
            <form
                className="searchForm"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="search">Recherche un article</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Recherche un article"
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                />
            </form>
            <ul>
               <li>
                   <Link to={'/'}>Home</Link>
               </li>
               <li>
                   <Link to={'post'}>Create article</Link>
               </li>
               <li>
                   <Link to={'about'}>About</Link>
               </li>
            </ul>
        </nav>
    );
};

export default Nav;