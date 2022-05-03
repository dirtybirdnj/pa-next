import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Plume Appetit',
      }}
    >
      <h1>About</h1>
      <p>
        Plume appetit was started to provide high quality stationery products
        that combine beautiful artwork with thoughtful and unique preprerations
        and presentations. Our specialty is recreating handwriting in an
        authentic and genuine way versus mechanical reproductions. If it
        doesn&amp;t look like a person did it, our service has failed.
      </p>
      <p>
        We enable businesses to connect with customers and partners and create
        lasting and enjoayble memories.
      </p>
    </Layout>
  );
};

export default About;
