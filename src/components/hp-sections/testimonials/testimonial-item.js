/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'

const TestimonialItem = ({name = 'missing name', text = 'missing content'}) => {
  return (
    <div sx={{
      px: 3,
      py: 4,
      mx: 2,
      borderRadius: 'lg',
      bg: 'primary',
      height: '100%',
      boxShadow: '0 0 12px -2px rgba(0,0,0,0.1)'
    }}>
      <p sx={{mt: 0, fontWeight: 'light', fontStyle: 'italic', color: 'light', lineHeight: 'normal', fontSize: [1, 1, 1, 2]}}>"{text}"</p>
      <Styled.h5 as='h3' sx={{color: 'accent', fontWeight: 'light'}}>~{name}</Styled.h5>
    </div>
  )
}

export default TestimonialItem
