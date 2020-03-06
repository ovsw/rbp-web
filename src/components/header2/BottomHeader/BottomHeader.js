/** @jsx jsx */
import React, {useContext}  from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {useStaticQuery, graphql} from 'gatsby'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import Nav from './Nav/'
import MainLogo from './MainLogo'

const BottomHeder = () => {
  return (
    <div className='bottom-header' sx={{
      borderBottom: '5px solid',
      borderColor: 'accent',
      position: 'relative'
    }}>
      <div className='container-fluid'>
        {/* THIS CONTROLS THE MAX-WIDTH and CENTERING OF THE BOTTOMHEADER CONTENT. */}
        <div className='col-md-12 header-wrap' sx={{maxWidth: '4xl', mx: 'auto'}}>
          {/* THIS CONTROLS THE PADDING OF THE BOTTOMHEADER CONTENT */}
          <div className='header-main'>
            <Nav />
            <MainLogo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeder
