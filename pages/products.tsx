import React from 'react';
import Layout from '../components/Layout';

export const Products = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Products - Plume Appetit',
      }}
    >
      <h1>Products</h1>
      <p>
        Plume Appetit offers stationery products for the discerning customer.
        Our combination of bespoke design with unconventional rendering options
        creates experiences that will delight your customers and leave a
        memorable impression on guests, family and friends.
      </p>
    </Layout>
  );
};

export default Products;
