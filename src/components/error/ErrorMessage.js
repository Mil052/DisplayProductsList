import React from "react";
import "./ErrorMessage.scss";  

function ErrorMessage (props) {
    const { error_code, navigate, setProduct_id, setCurrent_page } = props;
    function resetProductsPage () {
        setProduct_id (null);
        setCurrent_page ('1');
        navigate('/');
    }

    return (
        <div className="error-message">
            <h4>{error_code}</h4>
            <p>Oops! Something went wrong.</p>
            <button className="homepage_button" onClick={resetProductsPage}>Go to Homepage</button>
        </div>
    )
}
export default ErrorMessage;