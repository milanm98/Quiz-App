import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <main className="text-center flex-col flex bg-red-200 w-2/12 h-full">
            <h1 className="border-b-8 border-black w-full text-3xl font-mono  font-black italic">DASHBOARD</h1>
            <div className="mx-5 text-4xl font-black font-mono text-black">
                <p className="my-12 text-2xl">C# TEST QUIZ</p>
                <NavLink to="/q1">
                    <p className="my-12 border-black border-2"><span className="fa fa-question"></span></p>
                </NavLink>
                <NavLink to="/q2">
                    <p className="my-12 border-black border-2"><span className="fa fa-question"></span></p>
                </NavLink>
                <NavLink to="/q3">
                    <p className="my-12 border-black border-2"><span className="fa fa-question"></span></p>
                </NavLink>
                <NavLink to="/q4">
                    <p className="my-12 border-black border-2"><span className="fa fa-question"></span></p>
                </NavLink>
                <NavLink to="/q5">
                    <p className="my-12 border-black border-2"><span className="fa fa-question"></span></p>
                </NavLink>
                </div>
        </main>
    )
}

export default NavBar;