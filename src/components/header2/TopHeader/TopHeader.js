/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import {appContext} from '../../../context'

import Announcement from '../announcement'
import Column1 from './Column1'
import Column2 from './Column2'

const TopHeader = () => {
  // STYLE CONFIG
  const logoSpace = '6rem'
  /// ////////////////////
  const {alertSettings} = useStaticQuery(graphql`
  query{
    alertSettings: sanitySiteSettings(id: {eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7"}){
      alertToggle
      _rawAlertText
    }
  }
`)
  const {isAlertShowing, hideAlert} = useContext(appContext)
  return (
    <div className='top-header' sx={{
      // borderBottom: '2px solid',
      // borderColor: 'secondary',
      pb: [null, null, null, 2],
      'ul a': {
        fontFamily: ['heading', 'body'],
        display: 'inline-block',
        color: 'primary',
        textDecoration: 'none',
        textTransform: 'uppercase',
        px: 2,
        py: 1
      }
    }}>
      {alertSettings.alertToggle && isAlertShowing && <Announcement closeAlert={hideAlert} alertText={alertSettings._rawAlertText} />}

      <div className='container-fluid'>
        <div sx={{display: 'flex', pt: [0, null, null, 3], pb: '1'}}>
          {/* this column shows on all devices (full with on mobile, half on desktop), however the items inside change based on scren size. */}
          <div sx={{width: ['full', null, null, '1/2'], textAlign: [null, null, null, 'right'], pr: [null, null, null, logoSpace]}}>
            <Column1 />
          </div>
          {/* this column only shows on desktop, where it covers the right side */}
          <div sx={{display: ['none', null, null, 'block'], width: '1/2', pl: logoSpace}}>
            <Column2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
