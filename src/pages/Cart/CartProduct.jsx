import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct, removeProduct } from '~/redux/cartReducer';
import numberFormat from '~/utilities/numberFormat';

const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [newProduct, setProduct] = useState(product);
    const [quantity, setQuantity] = useState(product.quantity);
    const [currentUser] = useSelector((store) => store.currentUser);

    useEffect(() => {
        setProduct(product);
        setQuantity(product.quantity);
    }, [product]);

    const handleUpdate = (type) => {
        if (type === 'up') {
            dispatch(
                updateProduct({
                    username: currentUser.username,
                    password: currentUser.password,
                    product: {
                        ...newProduct,
                        quantity: quantity + 1,
                    },
                }),
            );
        }
        if (type === 'down') {
            dispatch(
                updateProduct({
                    username: currentUser.username,
                    password: currentUser.password,
                    product: { ...newProduct, quantity: quantity < 2 ? 1 : quantity - 1 },
                }),
            );
        }
    };

    const handleRemove = () => {
        dispatch(
            removeProduct({
                username: currentUser.username,
                password: currentUser.password,
                product: {
                    ...newProduct,
                },
            }),
        );
    };

    return (
        <div className="cart_products_product">
            <div className="cart_products_product_left">
                <img src={newProduct.image} alt="hình ảnh sản phẩm" />
            </div>
            <div className="cart_products_product_right">
                <Link to={`/catalog/${newProduct.path}`} className="cart_products_product_right_info">
                    {newProduct.title} - {newProduct.size} - {newProduct.color}
                </Link>
                <div className="cart_products_product_right_content">
                    <h3 className="cart_products_product_right_price">{numberFormat(newProduct.price)}</h3>
                    <div className="cart_products_product_right_update">
                        <div
                            className="cart_products_product_right_update_calculate"
                            onClick={() => handleUpdate('down')}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="cart_products_product_right_update_number">{quantity}</div>
                        <div
                            className="cart_products_product_right_update_calculate"
                            onClick={() => handleUpdate('up')}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                    <div className="cart_products_product_right_delete" onClick={() => handleRemove()}>
                        <i className="bx bxs-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
