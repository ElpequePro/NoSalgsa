import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Main from './Main';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;