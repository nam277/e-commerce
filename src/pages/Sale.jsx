import React from 'react';
import Title from '../components/Title';
import { FaultPage } from '~/components/Alert';
import flatSale from '~/assets/images/banner.png';

const Sale = () => {
    return (
        <>
            <Title title="Sale" />
            <FaultPage image={flatSale} />
        </>
    );
};

export default Sale;
