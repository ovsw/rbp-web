/** @jsx jsx */
import React, { useContext } from 'react' // eslint-disable-line
import {Container, jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import PortableText from '../portableText'

import {FaTimes} from 'react-icons/fa'

const Announcement = ({closeAlert, alertText}) => {
  return (
    <div sx={{position: 'relative', bg: 'primary', color: 'light', textAlign: 'center', 'a': {color: 'accent'}}}>
      <Container sx={{
        maxWidth: '4xl',
        mx: 'auto',
        p: 0,
        px: [2, 3],
        pb: 1,
        whiteSpace: ['normal', 'normal', 'nowrap'],
        overflow: 'hidden',
        '@keyframes marquee': {
          '0%': {
            transform: 'translate(0,0)'
          },
          '100%': {
            transform: 'translate(-100%,0)'
          }
        },
        '&:hover p': {
          animationPlayState: 'paused'
        }
      }}>
        <div sx={alertTextStyles}>
          {alertText && <PortableText blocks={alertText} />}
        </div>
      </Container>
      <button onClick={closeAlert} sx={{position: 'absolute', px: '2', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: '10', bg: 'transparent', border: 'none', color: 'light', cursor: 'pointer'}}><FaTimes sx={{fontSize: '1rem'}} /><span sx={{display: ['none', 'none', 'inline'], position: 'relative', bottom: '3px'}}>close</span></button>
    </div>
  )
}

export default Announcement

const alertTextStyles = {
  p: {
    margin: 0,
    fontSize: [1, 1, 2],
    display: 'inline-block',
    pl: ['0', '0', '100%'],
    // keep marquee text clear of the absolute-positioned close button
    pr: ['4.5rem', '4.5rem', '4.5rem'],
    animation: ['none', 'none', 'marquee 15s linear infinite'],
    strong: {
      fontSize: [0, 0, 1]
    }
  }
}
