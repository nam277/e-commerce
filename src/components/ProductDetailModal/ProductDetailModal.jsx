import React from 'react';
import { getProductByPath } from '~/assets/fakeData/products';
import Button from '../Button';
import ProductDetail from '../ProductDetail/ProductDetail';

import './ProductDetailModal.scss';

const ProductDetailModal = (props) => {
    const product = getProductByPath('quan-jean-phong-cach-18');
    return (
        <div className={`product-modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-modal_content">
                <ProductDetail product={product} />
                <div className="product-modal_content_close">
                    <Button size="small" isSquared={true}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
