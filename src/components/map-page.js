/** @jsx jsx */
import React, { useState, useEffect } from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import {MapContainer, Marker, ImageOverlay, Tooltip} from 'react-leaflet'
import L from 'leaflet'

import mapimage from '../images/rambling-pines-day-camp-map.jpg'
import emptyIcon from '../images/px.png'

import 'leaflet/dist/leaflet.css'

import MapLightBox from './map-lightbox'

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: emptyIcon,
    iconUrl: emptyIcon,
    shadowUrl: emptyIcon
  })
}

const MapPage = ({locations}) => {
  const [height, setHeight] = useState(0)
  const [currLightboxItem, setCurrLightboxItem] = useState(null)

  const markerClick = index => {
    const {edges} = locations
    setCurrLightboxItem(edges[index].node)
  }

  const updateWindowDimensions = () => {
    setHeight(window.innerHeight)
  }
  const closeLightBox = () => {
    setCurrLightboxItem(null)
  }

  const escFunction = event => {
    if (event.keyCode === 27) {
      // esc key pressed
      closeLightBox()
    }
  }

  const calcLabelOffset = labelDir => {
    switch (labelDir) {
      case 'top':
        return [0, 25]
      case 'bottom':
        return [0, -5]
      case 'left':
        return [20, 20]
      case 'right':
        return [-20, 25]
      default:
        return [15, 25]
    }
  }

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!')
    updateWindowDimensions()
    document.addEventListener('keydown', escFunction, false)
    window.addEventListener('resize', updateWindowDimensions)

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => {
      document.removeEventListener('keydown', escFunction, false)
      window.removeEventListener('resize', updateWindowDimensions)
    }
  })

  const inBrowser = (typeof window !== 'undefined')

  if (typeof window !== 'undefined') {
    return (

      <>
        {currLightboxItem && <MapLightBox content={currLightboxItem} closeLightBox={closeLightBox} />}

        {inBrowser && (
          <MapContainer
            className='map'
            crs={L.CRS.Simple}
            bounds={[
              [0, 0],
              [961, 1920]
            ]}
            minZoom={-0.5}
            maxZoom={0}
            zoomSnap={0.1}
            zoomControl={false}
            // center={[1000, 960]}
            style={{height: `${(height - 125).toString()}px`, marginTop: '125px'}}
          >
            <ImageOverlay
              url={mapimage}
              bounds={[
                [0, 0],
                [961, 1920]
              ]}
            />
            {/* <Polygon
            positions={[[300, 900], [300, 600], [600, 600], [600, 900]]}
            color="blue"
            onClick={this.MarkerClick}
          /> */}
            {locations.edges.map(({node}, index) => {
              const lat = node.y || 0
              const long = node.x || 0
              const latLong = [lat, long]
              const currOffset = calcLabelOffset(node.labelDirection)
              // console.log(node.labelDirection)

              return (
                <React.Fragment key={node.title}>
                  {(latLong !== null) && (
                    <Marker
                      key={latLong}
                      position={latLong}
                      onClick={() => markerClick(index)}
                    >
                      <Tooltip permanent interactive direction={node.labelDirection} offset={currOffset}>
                        {node.title}
                      </Tooltip>
                    </Marker>
                  )}
                </React.Fragment>
              )
            })}
          </MapContainer>
        )}
      </>
    )
  } else {
    return null
  }
}

export default MapPage
