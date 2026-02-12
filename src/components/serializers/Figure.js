import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../../client-config'

export default ({node}) => {
  const imageBuilder = imageUrlBuilder(clientConfig.sanity)

  let imageClassName = 'contentImage'
  let maxWidth = 730

  if (node.asset.metadata.dimensions.width < 700) {
    maxWidth = 400
    imageClassName = imageClassName + ' small'
  }

  if (node.asset.metadata.dimensions.aspectRatio > 1) { imageClassName = imageClassName + ' landscape' } else { imageClassName = imageClassName + ' portrait' }
  const imageUrl = imageBuilder.image(node).width(maxWidth).auto('format').url()

  return (
    <figure className={imageClassName}>
      <img src={imageUrl} alt={node.alt || ''} loading='lazy' />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
