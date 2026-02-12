/** @jsx jsx */
import React, { useContext, useEffect } from 'react' // eslint-disable-line
import {Header as ThemeHeader, Container, jsx} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import {Link, useStaticQuery, graphql} from 'gatsby'
import {useSiteMetadata} from '../../hooks/use-site-metadata'

import Icon from '../icon'
import TopBar from './top-bar'
import MainNav from './main-nav'
import Announcement from './announcement'

import {appContext} from '../../context'

import headerBgImage from '../../images/white-paper-bg3.jpg'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const {siteNav} = useSiteMetadata()
  const {isAlertShowing, hideAlert} = useContext(appContext)

  const {alertSettings} = useStaticQuery(graphql`
    query{
      alertSettings: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}){
        alertToggle
        _rawAlertText
      }
    }
  `)
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (alertSettings.alertToggle) {
  //     showAlert()
  //   } else {
  //     hideAlert()
  //   }
  // }, [])

  return (
    <ThemeHeader sx={{
      background: `url(${headerBgImage}) repeat bottom left`,
      pb: 2,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 9999,
      boxShadow: '0 3px 12px rgba(0,0,0,0.3)'
    }}>
      {alertSettings?.alertToggle && isAlertShowing && <Announcement closeAlert={hideAlert} alertText={alertSettings._rawAlertText} />}
      <Container className='HeaderContainer' sx={{pt: 3, pb: 0}}>
        <TopBar />
        <Flex sx={{position: ['static', 'relative'], justifyContent: 'space-between'}} className='MainNav'>
          <Box sx={{flex: 'flex: 1 1 0%'}}>
            <Link to='/' sx={{variant: 'links.logoText'}}>Rambling Pines<br />Day Camps</Link>
          </Box>

          <button sx={{variant: 'buttons.navToggle'}} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <MainNav navStructure={siteNav} showNav={showNav} />
        </Flex>
      </Container>
    </ThemeHeader>
  )
}

export default Header
