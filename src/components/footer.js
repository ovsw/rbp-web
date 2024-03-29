/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container, Footer as ThemeFooter} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'
import {Link} from 'gatsby'

// components
import SocialLinks from './socialLinks'

// images
import AcaLogoImg from '../images/aca-logo.png'
import FooterBg from '../images/footer-bg-2.jpg'

const Footer = () => {
  return (
    <ThemeFooter sx={{display: 'block', background: `url(${FooterBg}) repeat-x center center`, color: 'textMuted'}}>
      <Container>
        <Flex sx={{flexWrap: 'wrap', pt: [4, 4, 5, 6], pb: [2, 3, null, null, 4]}}>
          <Box sx={{width: ['full', '1/2'], px: [0, 4], py: [4, 0], textAlign: ['center', 'right'], borderRight: ['none', '1px solid lightgray']}}>
            <div className='vcard'>
              <div className='org'><Styled.h3 as='h3' sx={{mt: 0, color: 'light'}}>Rambling Pines Day Camp</Styled.h3></div>
              <div className='tel'>
                Call Now <a sx={{variant: 'links.footerLinks'}} href='tel:609-466-1212'>(609) 466-1212</a>
              </div>
              <a className='email' sx={{variant: 'links.footerLinks'}} href='mailto:info@ramblingpines.com'>info@ramblingpines.com</a>
              <div className='adr' sx={{mt: 4}}>
                <div className='street-address'>174 Lambertville Hopewell Rd.</div>
                <span className='locality'>Hopewell</span>,{' '}
                <span className='region'>NJ</span>{' '}
                <span className='postal-code'>08525</span>{' '}
                <span className='country-name'>United States</span>
              </div>

            </div>
          </Box>
          <Box sx={{width: ['full', '1/2'], px: 4, textAlign: 'center'}}>
            <SocialLinks />
            <img src={AcaLogoImg} sx={{maxWidth: 'full', width: '48'}} alt='American Camp Association logo' />
          </Box>
        </Flex>
        <p sx={{
          textAlign: 'center',
          color: 'gray.5',
          a: {
            color: 'gray.4'
          }
        }}>
          <Link to='/terms-and-conditions/'>Terms &amp; Conditions</Link> |{' '}
          <Link to='/privacy-policy/'>Privacy Policy</Link> |{' '}
          <Link to='/ada-compliance/'>ADA Compliance</Link> |{' '}
          <Link to='/request-info/'>Contact</Link>
        </p>
      </Container>
      <div sx={{textAlign: 'center', p: 3, fontSize: 1, color: 'muted', bg: 'rgba(0,0,0,0.5)'}}>
        &copy; {new Date().getFullYear()}, Rambling Pines Day Camp
        |
        Website by <a href='https://ovswebsites.com' sx={{color: '#f36'}}>OVS Websites</a>
      </div>
    </ThemeFooter>
  )
}

export default Footer
