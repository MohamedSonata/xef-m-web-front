import nextra from 'nextra'

import { fileURLToPath } from 'url'



// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __dirname = fileURLToPath(new URL('.', import.meta.url))



const withNextra = nextra({

  theme: 'nextra-theme-docs',

  themeConfig: './theme.config.tsx',

  defaultShowCopyCode: true,

  flexsearch: true,

})



export default withNextra({

  experimental: {

    optimizeCss: false,

    // Explicitly opt out of Turbopack

    turbo: {

      enabled: false

    }

  },

  webpack: (config) => {

    config.module.rules.push({

      test: /\.(woff|woff2|eot|ttf|otf)$/i,

      type: 'asset/resource',

    });

    return config;

  },

}); 
