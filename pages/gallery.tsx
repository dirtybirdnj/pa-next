import React from 'react';
import Layout from '../components/Layout';

export const Gallery = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Gallery - Plume Appetit',
      }}
    >
      <h1>Gallery</h1>
      <p>Photo gallery of our work.</p>
    </Layout>
  );
};

export default Gallery;
