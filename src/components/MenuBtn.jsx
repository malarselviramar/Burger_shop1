import React from "react";
import { Link } from 'react-router-dom';


export function MenuBtn(){
    return(
        <div>
            <Link to='./menu'>
                <button type="button" className="btn btn-lg" style={{backgroundColor :"maroon", color:'white', borderRadius :'10px'}}>
                    Explore Menu</button>

            </Link>
        </div>
    )
}