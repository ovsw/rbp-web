/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import MenuSectionColumnsItem from './MenuSectionColumnsItem'

const MenuSectionColumnsWrapper = ({subMenuColumns, onNavClick, justifyContent = 'space-around'}) => {
  return (
    <>
      {/* COLUMNS CONTAINER START */}
      {/* ul: container for the main sub-menu COLUMNS. display flex on desktop */}
      <ul sx={{
        variant: 'lists.reset',
        display: [null, null, null, 'flex'],
        justifyContent: [null, null, null, justifyContent],
        maxWidth: [null, null, null, '4xl'],
        py: [null, null, null, 4],
        mx: 'auto'
      }}>

        {subMenuColumns.map(column => (
          <li key={column.title}>
            {/* ^ above li: this is a column for the main sub-menu. on mobile it's quiet with 100% width, on desktop it's side by side with the other columns, equal width */}
            <MenuSectionColumnsItem items={column.children} onNavClick={onNavClick} />
          </li>
        ))}

      </ul>
      {/* COLUMNS CONTAINER END */}
    </>)
}

export default MenuSectionColumnsWrapper
