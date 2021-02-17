import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authMe} from "./redux/auth-reducer";
import {Header} from "./components/Header/Header";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authMe())
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Navbar/>
                    <Content />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
