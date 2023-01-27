import "./ProductModal.scss"

function ProductModal (props) {
    const { setModal, id, name, year, color, pantone_value } = props;

    return (
        <div className="modal_background" onClick={() => setModal(null)}>
            <div className="modal_window" onClick={(event) => event.stopPropagation()}>
                <button onClick={() => setModal(null)} style={{backgroundImage:"url(/images/close-button.svg)"}}/>
                <header><h3>Product</h3></header>
                <table>
                    <tbody>
                        <tr>
                            <th>Id:</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <th>Color:</th>
                            <td>{color}</td>
                        </tr>
                        <tr>
                            <th>Pantone Value:</th>
                            <td>{pantone_value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductModal;