/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// icons
import {FiPhoneCall, FiMail} from 'react-icons/fi'

const MobileMainReplacement = props => {
  return (
    // <div className='mobile-info' >
    <ul {...props} sx={{
      variant: 'lists.reset',
      'li, a': {
        display: 'flex'
      },
      'a': {
        px: 3,
        textDecoration: 'none',
        color: 'primary'
      },
      span: {
        margin: 'auto',
        '@media (max-width: 575px)': {
          fontSize: '0px'
        }
      },
      svg: {
        fontSize: '2',
        position: 'relative',
        top: '.1rem'
      }
    }}>
      <li sx={{borderRight: '1px solid', borderColor: 'muted'}}>
        <a href='tel:609-466-1212' title='Call Us'>
          <span><FiPhoneCall /> Call Us</span>
        </a>
      </li>
      <li sx={{
        '@media screen and (max-width: 350px )': {
          display: 'none!important'
        }
      }}>
        <a href='mailto:info@ramblingpines.com' title='Email Us'>
          <span> <FiMail /> Email Us</span>
        </a>
      </li>
    </ul>
    // </div>
  )
}

export default MobileMainReplacement
