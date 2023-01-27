function ProductItem (props) {
    const { setModal, product } = props;
    const style = {color: product.color};

    return (
        <tr className="products-table_item" style={style} onClick={() => setModal(product)}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.year}</td>
        </tr>
    );
}

export default ProductItem;