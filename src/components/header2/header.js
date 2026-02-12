/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// components
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

import headerBgImage from '../../images/white-paper-bg3.jpg'

const Header = () => {
  return (
    <header className='site-header' role='banner' sx={{
      background: `url(${headerBgImage}) repeat bottom left`,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: '1000',
      width: 'full',
      boxShadow: '0 3px 10px 0px rgba(0,0,0,0.2)'
    }}>
      <TopHeader />
      <BottomHeader />
    </header>
  )
}

export default Header
