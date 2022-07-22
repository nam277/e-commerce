import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductByPath } from '~/assets/fakeData/products';
import Button from '../Button';
import ProductDetail from '../ProductDetail/ProductDetail';

import './ProductDetailModal.scss';
import { close } from '~/redux/productDetailReducer';

const ProductDetailModal = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(undefined);
    const productPath = useSelector((store) => store.productDetail.value);

    useEffect(() => {
        setProduct(getProductByPath(productPath));
    }, [productPath]);

    return (
        <div className={`product-modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-modal_content">
                <ProductDetail product={product} />
                <div className="product-modal_content_close">
                    <Button size="small" isSquared={true} onClick={() => dispatch(close())}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
