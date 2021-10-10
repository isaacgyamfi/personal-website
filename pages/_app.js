import React, { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import '../styles/globals.scss';
import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        openGraph={{
          title: 'isaac gyamfi | software engineer',
          type: 'website',
          locale: 'en_IE',
          url: 'https://isaacgyamfi.com/',
          site_name: 'isaac gyamfi',
        }}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Everyday learner embracing change to build the next generation"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
