import React from "react";
import { useNavigate } from "react-router-dom";

import "./PageNotFound.scss";

function PageNotFound () {
    const navigate = useNavigate();

    return (
        <main className="not-found_page">
            <h3>Page Not Found</h3>
            <p>The page you are looking for could not be found.</p>
            <button className="homepage_button" onClick={() => navigate('/')}>Go to Homepage</button>
        </main>
    );
}

export default PageNotFound;