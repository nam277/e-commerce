import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductByPath, getProducts } from '~/assets/fakeData/products';

import Grid from '~/components/Grid';
import ProductCard from '~/components/ProductCard';
import ProductDetail from '~/components/ProductDetail';
import { Section, SectionContent, SectionTitle } from '~/components/Section';
import Title from '../components/Title';

const Product = () => {
    const { id } = useParams();

    const product = getProductByPath(id);

    useEffect(() => {
        window.scroll(0, 0);
    }, [product]);

    return (
        <Title title={product.title}>
            <Section>
                <ProductDetail product={product} />
            </Section>
            <Section>
                <SectionTitle>Similar products</SectionTitle>
                <SectionContent>
                    <Grid col={4} md={2} sm={1} rowGap={30} colGap={10}>
                        {getProducts(8).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                image01={product.image01}
                                image02={product.image02}
                                path={product.slug}
                            />
                        ))}
                    </Grid>
                </SectionContent>
            </Section>
        </Title>
    );
};

export default Product;
