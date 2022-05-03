import React from 'react';
import Layout from '../components/Layout';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>Plume Appetit is what your customers read that makes them buy:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Stationery</li>
        <li className="mt-2">Business Cards</li>
        <li className="mt-2">Invitations</li>
        <li className="mt-2">Menus</li>
        <li className="mt-2">Many More...</li>
      </ul>
    </Layout>
  );
};

export default Index;
