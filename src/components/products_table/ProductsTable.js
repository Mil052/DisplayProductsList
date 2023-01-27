import React from "react";
import ProductItem from "./ProductItem";
import "./ProductsTable.scss";

function ProductsTable (props) {
    const { items, setModal } = props;

    return (
        <table className="products_table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {items.map((product, index) => (
                    <ProductItem key={index} setModal={setModal} product={product}/>
                ))}
            </tbody>
        </table>
    );
}

export default ProductsTable;