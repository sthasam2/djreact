import React from "react";
import "./css/App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router } from "react-router-dom";

import BaseRouter from "./routes";
import CustomLayout from "./container/Layout";

function App() {
    return (
        <div className="App">
            {/* elements */}
            <Router>
                <CustomLayout>
                    <BaseRouter />
                </CustomLayout>
            </Router>
        </div>
    );
}

export default App;
