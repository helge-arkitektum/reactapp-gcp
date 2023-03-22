import style from "./Product.module.scss"


function Product({ product }) {
    return (
        <div classname={style.product}>
            <img src={product.thumbnail} alt={product.info} />
            <div classname={style.productinfo}><h2>{product.brand} - {product.title}</h2>
            {product.description}
        </div>
        </div >
    )
}

function Product2(props) {
    return (
        <div classname={style.productinfo}><h2>{props.product.brand} - {props.product.title}</h2>
            {props.product.description}</div>
    )
}
export { Product, Product2 };