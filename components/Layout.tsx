import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="my-8 max-w-5xl px-8 mx-auto text-center">
          <div className="justify-center justify-between py-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          <a
            className="text-gray-900 dark:text-white"
            href="https://www.vtapi.co"
          >
            vtapi.co
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
