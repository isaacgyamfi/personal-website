import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

import { GA_TRACKING_ID, GOOGLE_ADS_ID } from '../lib/gtag';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/assets/images/personal-image.jpeg" />
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                 <script> var _paq = window._paq = window._paq || []; 
                 var heatUrl="http://devdashboard.heatmap.com/"; 
                 var heatENV = {}; 
                 (function() { _paq.push(['setTrackerUrl', heatUrl+'sttracker.php']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.async=true; g.src=heatUrl+'heatmap.js?sid=65'; s.parentNode.insertBefore(g,s); })(); 
                 </script>

                `,
                }}
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
