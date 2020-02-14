import React from 'react'
import Figure from './Figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Table from './Table'
import Embed from './Embed'
import HubSpotForm from './HubSpotForm'

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    mytable: Table,
    iframeEmbed: Embed,
    hubSpotFormEmbed: HubSpotForm
  },
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const {blank, href} = mark
      return blank
        ? <a href={href} target='_blank' rel='noopener'>{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

export default serializers
