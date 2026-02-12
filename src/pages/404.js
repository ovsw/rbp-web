/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <Container sx={{maxWidth: '6xl', p: 4, py: 6}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
)

export default NotFoundPage

export const Head = () => <SEO title='404: Not found' />
