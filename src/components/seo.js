import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'
// import config from '../../config/website'

function SEO ({description, lang, meta, title, image}) {
  const data = useStaticQuery(detailsQuery)
  const metaDescription = description || (data.site && data.site.description) || ''
  const siteTitle = (data.site && data.site.title) || 'Rambling Pines Day Camp'
  const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : ''
  const resolvedTitle = title || siteTitle
  const fullTitle = resolvedTitle === siteTitle ? resolvedTitle : `${resolvedTitle} | ${siteTitle}`
  const metaTags = [
    {
      name: 'description',
      content: metaDescription
    },
    {
      property: 'og:title',
      content: resolvedTitle
    },
    {
      property: 'og:description',
      content: metaDescription
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: metaImage
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: resolvedTitle
    },
    {
      name: 'twitter:description',
      content: metaDescription
    }
  ]
    .concat(meta)
    .filter(tag => Boolean(tag && tag.content))

  return (
    <>
      <html lang={lang} />
      <title>{fullTitle}</title>
      {metaTags.map((tag, index) => {
        const key = tag.name || tag.property || index
        return <meta key={key} {...tag} />
      })}
    </>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7"}) {
      title
      description
    }
  }
`
