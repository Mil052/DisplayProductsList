import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useParams, useNavigate } from "react-router-dom";
    // Components
import ProductsFilter from "../components/filter/ProductsFilter";
import ProductsTable from "../components/products_table/ProductsTable";
import ErrorMessage from "../components/error/ErrorMessage";
import Pagination from "../components/pagination/Pagination";
import ProductModal from "../components/modal/ProductModal";
    // SCSS
import "./ProductsPage.scss";   

//  http://localhost:3000/products?page=2  product list
//  http://localhost:3000/products/3   product item

function ProductsPage () {
    // Redux store keep actual data fetched from server:
    const dispatch = useDispatch();
    const { items, total_pages, per_page, total, status, error_code } = useSelector(state => state.products);
    
    // Get params and query params from URL:
    const { id } = useParams();
    const searchParams = new URLSearchParams(document.location.search);
    const url_page_number = searchParams.get('page');
    
    // React Router functionality to change URL address:
    const navigate = useNavigate();

    // This page state (if URL has params set the state according to them):
    const [current_page, setCurrent_page] = useState(url_page_number ?? '1');
    const [product_id, setProduct_id] = useState(id ?? null);
    const [modal, setModal] = useState(null);

    function getProductsData () {
        // prepare address to fetch data from server:
        let server_endpoint = 'https://reqres.in/api/products';
        if (product_id) {
            server_endpoint += `/${product_id}`;
        } else {
            server_endpoint += `?per_page=${per_page}&page=${current_page}`;
        }
        dispatch(fetchProducts(server_endpoint));
    }

    useEffect(getProductsData, [current_page, product_id]);
    
    return (
        <main className="products_page">
            {modal && <ProductModal setModal={setModal} {...modal} />}
            <ProductsFilter setProduct_id={setProduct_id} navigate={navigate} total={total}/>
            <section>
                {status === 'fetchSuccess' && <ProductsTable items={items} setModal={setModal}/>}
                {status === 'fetchFail' && <ErrorMessage error_code={error_code} navigate={navigate} setProduct_id={setProduct_id} setCurrent_page={setCurrent_page} />}
            </section>
            <Pagination current_page={current_page} total_pages={total_pages} setCurrent_page={setCurrent_page} navigate={navigate}/>
        </main>
    );
}

export default ProductsPage;