import React from 'react';

import Title from '~/components/Title';
import HeroSlider from '~/components/HeroSlider';
import { Section, SectionContent } from '~/components/Section';
import Grid from '~/components/Grid';

import heroSliderData from '~/assets/fakeData/heroSlider';
import policies from '~/assets/fakeData/policy';
import Policy from '~/components/Policy';
import { Link } from 'react-router-dom';

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
        </Title>
    );
};

export default Home;
