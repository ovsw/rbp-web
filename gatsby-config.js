// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require(`path`)

const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.ramblingpines.com',
    siteNav: [
      {
        title: 'Future Families',
        slug: '/future-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Programs',
                slug: '/programs/',
                children: [
                  {
                    title: 'Pine Cone Camp',
                    slug: '/programs/pine-cone-camp/',
                    children: []
                  },
                  {
                    title: 'Day Camp',
                    slug: '/programs/day-camp/',
                    children: []
                  },
                  {
                    title: 'Teen Camp',
                    slug: '/programs/teen-camp/',
                    children: []
                  },
                  {
                    title: 'Leader in Training',
                    slug: '/programs/leader-in-training/',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Activities',
                slug: '/activities/',
                children: [
                  {
                    title: 'Clubs & Electives',
                    slug: '/activities/clubs-and-electives/',
                    children: []
                  },
                  {
                    title: 'Learn to Swim',
                    slug: '/activities/learn-to-swim/',
                    children: []
                  },
                  {
                    title: 'Calendar',
                    slug: '/activities/calendar/',
                    children: []
                  },
                  {
                    title: 'Special Events',
                    slug: '/activities/special-events/',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: 'column 3',
            children: [
              {
                title: 'Transportation',
                slug: '/transportation/',
                children: []
              },
              {
                title: 'Lunch',
                slug: '/lunch/',
                children: []
              },
              {
                title: 'Beforecare & Aftercare',
                slug: '/beforecare-aftercare/',
                children: []
              },
              {
                title: 'FAQs',
                slug: '/faqs/',
                children: []
              }
            ]
          },
          {
            title: 'column 4',
            children: [
              {
                title: 'Dates & Rates',
                slug: '/dates-and-rates/',
                children: []
              },
              {
                title: 'Tuition Assistance',
                slug: '/summer-camp-tuition-assistance/',
                children: []
              },
              {
                title: 'Reviews',
                slug: '/reviews/',
                children: []
              }
              // {
              //   title: 'New for 2020',
              //   slug: '/new-for-2020/',
              //   children: []
              // }
            ]
          }
        ]
      },
      {
        title: 'About us',
        slug: '/about/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Message from Our Directors',
                slug: '/message-from-our-directors/',
                children: []
              },
              {
                title: 'Our Directors',
                slug: '/our-directors/',
                children: []
              },
              {
                title: 'Our Staff',
                slug: '/our-staff/',
                children: []
              },
              {
                title: 'ACA Accreditation',
                slug: '/aca-accreditation/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [

              {
                title: 'History',
                slug: '/history/',
                children: []
              },
              {
                title: 'Location',
                slug: '/location/',
                children: []
              },
              {
                title: 'Directions',
                slug: '/directions/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Current Families',
        slug: '/current-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Lunch Menu',
                slug: '/lunch-menu/',
                children: []
              },
              {
                title: 'Activity Calendar',
                slug: '/activities/calendar/',
                children: []
              },
              {
                title: 'Camp Store',
                slug: 'https://www.bunkline.com/category-s/602.htm',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Refer A Family',
                slug: '/refer-a-family/',
                children: []
              },
              {
                title: 'Parent Login',
                slug: 'https://ramblingpines.campintouch.com/v2/login/login.aspx',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Staff',
        slug: '/staff/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Working at Rambling Pines',
                slug: '/staff/working-at-rambling-pines/',
                children: []
              },
              {
                title: 'Current Openings',
                slug: '/staff/current-openings/',
                children: []
              },
              {
                title: 'Summer Dates',
                slug: '/staff/summer-dates/',
                children: []
              },
              {
                title: 'Apply',
                slug: 'https://ramblingpines.campintouch.com/ui/forms/application/staff/App',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: false // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-plugin-netlify-headers`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camp Laurelwood - Connecticut's Premier Jewish Summer Camp`,
        short_name: `Camp Laurelwood`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#008080`,
        display: `standalone`,
        icon: `src/images/icon.png`
        // icons: [
        //   {
        //     src: '/favicons/android-chrome-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png'
        //   },
        //   {
        //     src: '/favicons/android-chrome-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png'
        //   }
        // ]
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ramblingpines.com',
        sitemap: 'https://www.ramblingpines.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', disallow: '/'}]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout`)
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-990695-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      // sampleRate: 5,
      // siteSpeedSampleRate: 10
      }
    }
  ]
}
