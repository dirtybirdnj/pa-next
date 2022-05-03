import React from 'react';
import Layout from '../components/Layout';

export const Contact = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Contact - Plume Appetit',
      }}
    >
      <h1>Contact</h1>
      <p>Get in touch with us, we&quot;d love to work with you.</p>
    </Layout>
  );
};

export default Contact;
