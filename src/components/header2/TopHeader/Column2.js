/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'

const Column2 = () => {
  return (
    <ul className='top-right' sx={{variant: 'lists.reset', li: {display: 'inline-block'}}}>
      <li>
        <Link to='/request-info/' sx={{variant: 'links.topBar'}} rel='noopener noreferrer' target='_blank'>Request Info</Link>
      </li>
      <li>
        <a href='https://ramblingpines.campintouch.com/ui/forms/application/camper/App' rel='noopener noreferrer' sx={{variant: 'links.topBar'}}target='_blank'>Enroll Now</a>
      </li>
    </ul>
  )
}

export default Column2
