import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="Missing">
            <h2>Page non trouver</h2>
            <p>Bon ba coups dur sa</p>
            <p>
                <Link to={'/'}>
                    Retourner au menu principal.
                </Link>
            </p>
        </main>
    );
};

export default ErrorPage;