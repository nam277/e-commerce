import React from 'react';
import Grid from '~/components/Grid';

import './Catalog.scss';
import Title from '~/components/Title';
import ProductCard from '~/components/ProductCard';

import { getAllProducts } from '~/assets/fakeData/products';
import { category, colors, sizes } from '~/assets/fakeData/category';
import Checkbox from '~/components/Checkbox';
import Button from '~/components/Button';

const Catalog = () => {
    return (
        <Title title="Product">
            <div className="catalog">
                <div className="catalog_filter">
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">
                            danh mục sản phẩm
                        </h3>
                        <div className="catalog_filter_item_checkbox">
                            {category.map((item, index) => (
                                <Checkbox key={index} label={item.display} />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">màu sắc</h3>
                        <div className="catalog_filter_item_checkbox">
                            {colors.map((item, index) => (
                                <Checkbox key={index} label={item.display} />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">
                            kích thước
                        </h3>
                        <div className="catalog_filter_item_checkbox">
                            {sizes.map((item, index) => (
                                <Checkbox key={index} label={item.display} />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_delete">
                        <Button size="small">xóa toàn bộ</Button>
                    </div>
                </div>
                <div className="catalog_items">
                    <Grid col={4} rowGap={20}>
                        {getAllProducts().map((item, index) => (
                            <ProductCard
                                key={index}
                                title={item.title}
                                price={item.price}
                                oldPrice={item.oldPrice}
                                image01={item.image01}
                                image02={item.image02}
                                path={item.slug}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </Title>
    );
};

export default Catalog;
