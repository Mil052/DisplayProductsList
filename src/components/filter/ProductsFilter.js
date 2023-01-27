import React, { useRef } from "react";
import "./ProductsFilter.scss";

function ProductsFilter (props) {
    const { setProduct_id, navigate, total } = props;
    const input_ref = useRef();

    function filterHandler (event) {
        event.preventDefault();
        const id = input_ref.current.value;
        setProduct_id (id);
        navigate (`/products/${id}`);
        return false;
    }

    function clearHandler () {
        setProduct_id (null);
        input_ref.current.value = '';
        navigate ('/products');
    }

    return (
        <div className= "filter">
            <form id="filter_form" onSubmit={filterHandler}>
                <label htmlFor="filter_input">Enter product ID:</label>
                <input type="number" min="1" max={total} id="filter_input" ref={input_ref} />
            </form>
            <div>
                <button type="submit" form="filter_form" className="filter_button">Filter</button>
                <button className="clear_button" onClick={clearHandler}>Clear</button>
            </div>
        </div>
    );
}

export default ProductsFilter;