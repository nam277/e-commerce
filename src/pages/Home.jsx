import React from 'react';
import { Link } from 'react-router-dom';

import Title from '~/components/Title';
import HeroSlider from '~/components/HeroSlider';
import { Section, SectionContent, SectionTitle } from '~/components/Section';
import Grid from '~/components/Grid';
import Policy from '~/components/Policy';
import ProductCard from '~/components/ProductCard';

import heroSliderData from '~/assets/fakeData/heroSlider';
import policies from '~/assets/fakeData/policies';
import { getAllProducts, getProducts } from '~/assets/fakeData/products';

const Home = () => {
    return (
        <Title title="Home">
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />

            {/* Policy Section */}
            <Section>
                <SectionContent>
                    <Grid col={4} md={2} sm={1} gap={20}>
                        {policies.map((policy, index) => (
                            <Link key={index} to="./policy">
                                <Policy
                                    name={policy.name}
                                    desc={policy.description}
                                    icon={policy.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionContent>
            </Section>

            {/* Best Seller Section */}
            <Section>
                <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
                <SectionContent>
                    <Grid col={4} md={2} sm={1} gap={10}>
                        {getProducts(4).map((product, index) => (
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

export default Home;
