import React from "react";
import "./Pagination.scss";

function Pagination (props) {
    const { current_page, total_pages, setCurrent_page, navigate } = props;
    
    function changePageHandler (value) {
        const new_page = +current_page + value;
        setCurrent_page (new_page);
        navigate (`/products?page=${new_page}`);
    }
    
    const next_is_disabled = current_page >= total_pages ? true : false;
    const previous_is_disabled = (current_page <= 1 || !total_pages) ? true : false;

    return (
        <div id="pagination">
            <button id="previous" onClick={() => changePageHandler(-1)} disabled={previous_is_disabled}></button>
            <div id="current_page">Page {current_page}</div>
            <button id="next" onClick={() => changePageHandler(1)} disabled={next_is_disabled}></button>
        </div>
    );
}

export default Pagination;