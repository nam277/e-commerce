import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cart.scss';
import numberFormat from '~/utilities/numberFormat';
import Button from '~/components/Button';
import CartProduct from './CartProduct';
import { currentProduct } from '~/redux/selector';
import { mount } from '~/redux/modalReducer';

const Cart = () => {
    const dispatch = useDispatch();

    const productState = useSelector(currentProduct);

    const [products, setProduct] = useState(productState);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        setProduct(productState);
        setTotalProducts(productState.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(productState.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
    }, [productState]);

    return (
        <div className="cart">
            <div className="cart_products">
                {products.map((product, index) => (
                    <CartProduct product={product} key={index} />
                ))}
            </div>
            <div className="cart_order">
                <div className="cart_order_content">
                    <span className="cart_order_content_title">
                        <p>Total products:</p>
                        <h3>{`${totalProducts} products`}</h3>
                    </span>
                    <span className="cart_order_content_money">
                        <p>Total amount:</p>
                        <h2>{numberFormat(totalPrice)}đ</h2>
                    </span>
                    <Button isSquared={true} onClick={() => dispatch(mount('errorName'))}>
                        check out
                    </Button>
                    <Link to="/catalog">
                        <Button isSquared={true}>keep buying</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
