/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {useStaticQuery, graphql, Link} from 'gatsby'
// import {jsx, Container, Styled} from 'theme-ui'

// import headerBgImage from '../../../images/white-paper-bg3.jpg'

const MainLogo = () => {
  const {logoImage} = useStaticQuery(graphql`
  query{
    logoImage: file(relativePath: { eq: "rambling-pines-logo-retina.png" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_noBase64
          srcSet
          src
        }
      }
    }
  }
`)
  const mainLogoStyles = {
    // background: `url(${headerBgImage}) repeat bottom left`,
    position: 'absolute',
    textAlign: 'center',
    width: ['130px', '140px', null, '180px'],
    height: ['80px', '92px', null, '97px'],
    left: '0',
    right: '0',
    bottom: '1px',
    margin: '0 auto',
    zIndex: '1111'
  }
  return (
    <div sx={mainLogoStyles}>
      <Link to='/' title='Rambling Pines Day Camp'>
        <img src={logoImage.childImageSharp.fixed.src} alt='Rambling Pines Day Camp logo' sx={{maxWidth: ['100px', 'none']}} />
      </Link>
    </div>
  )
}

export default MainLogo
