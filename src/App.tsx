import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {HeaderContainer} from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <main>
                    <Navbar/>
                    <Content />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
