/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

export default ({to, children, ...props}) => {
  const isExternal = isAbsoluteURL(to)
  if (isExternal) {
    return <a href={to} rel='noopener noreferrer' target='_blank' >{children}</a>
  }
  return <Link {...props} to={to} activeClassName='active' >{children}</Link>
}
