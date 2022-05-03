import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <h1>Plume Appetit</h1>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/products">
        <a className="text-gray-900 dark:text-white px-6 py-4">Products</a>
      </Link>
      <Link href="/gallery">
        <a className="text-gray-900 dark:text-white px-6 py-4">Gallery</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <Link href="/contact">
        <a className="text-gray-900 dark:text-white px-6 py-4">Contact</a>
      </Link>
    </nav>
  );
};

export default Navigation;
