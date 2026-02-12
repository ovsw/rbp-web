import React from 'react'
import {Script} from 'gatsby'

export default ({node}) => (
  <>
    {node.cognitoForm && (
      <Script src='https://services.cognitoforms.com/scripts/embed.js' strategy='post-hydrate' />
    )}
    {node.embedSocial && (
      <Script src='https://embedsocial.com/embedscript/ri.js' strategy='post-hydrate' />
    )}
    <div dangerouslySetInnerHTML={{__html: node.code}} />
  </>
)
