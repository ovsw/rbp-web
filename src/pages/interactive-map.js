import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import MapPage from '../components/map-page'

const InteractiveMap = ({data}) => <Layout><MapPage locations={data.allSanityMapMarker} /></Layout>

export default InteractiveMap

export const query = graphql`
  query InteractiveMapQuery {
    allSanityMapMarker {
      edges {
        node {
          title
          _rawDescription
          labelDirection
          x
          y
          images {
            alt
            asset {
              large: fluid(maxWidth: 533, maxHeight: 533) {
                ...GatsbySanityImageFluid
              }
              thumb: fluid(maxWidth: 80, maxHeight: 80) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
