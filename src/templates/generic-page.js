import React from 'react'
import {graphql} from 'gatsby'
// import Layout from '../containers/layout'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import GenericPage from '../components/generic-page'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors} = props // location
  const page = data && data.page
  const section = data && (data.page.section || 'Future Families')

  return (
    <>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO title={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} image={page.headerImage} />}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}
      <GenericPage {...page} section={section} />
    </>
  )
}

export default GenericPageTemplate

export const query = graphql`

  fragment SanityImageMeta on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
      }
    }
  }


  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      title
      slug {
        current
      }
      section
      headerImage {
        ...SanityImageMeta
        alt
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
