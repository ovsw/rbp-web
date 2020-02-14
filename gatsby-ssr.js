/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import Layout from './src/containers/layout'

const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}

export {wrapPageElement}
