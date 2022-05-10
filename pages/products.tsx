import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

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

      <h2>Business Cards</h2>
      <p>
        <Image
          src="http://placekitten.com/200/300"
          width={200}
          height={300}
          alt="Business Cards"
        />
        Provide your contact information with a flair. Leave a lasting
        impression that will impress clients and enhance your networking
        experience.
      </p>

      <h2>Menus</h2>
      <p>
        For Restaurants, Weddings, and any service industry where a physical
        copy of written options is essential. We combine
      </p>

      <h2>Documents</h2>
      <p>
        We can create custom artwork to commemorate your significant milestone
        or{' '}
      </p>
    </Layout>
  );
};

export default Products;
