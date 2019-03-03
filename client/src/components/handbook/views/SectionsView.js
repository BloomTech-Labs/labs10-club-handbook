import React from 'react'
import { connect } from 'react-redux'
import SectionItem from './SectionItem'
import { deleteSectionById } from '../../../store/actions/clubActions'
import { Typography } from '@material-ui/core'
import { AddCircle, Delete, FormatLineSpacing } from '@material-ui/icons'

import { Row, Column, iconSize, SectionBox } from '../../../style/layout'

const SectionsView = props => {
  return (
    <>
      <Row>
        <Column>
          <AddCircle onClick={props.toggleAddView} style={iconSize} />
          <Typography variant="header6">Add</Typography>
        </Column>

        <Column>
          <FormatLineSpacing style={iconSize} />
          <Typography variant="header6">Reorder</Typography>
        </Column>
      </Row>

      {props.sections.map(section => (
        <SectionItem
          section={section}
          deleteSectionById={props.deleteSectionById}
          toggleEditView={props.toggleEditView}
          clubId={props.clubId}
        />
      ))}
    </>
  )
}

export default connect(
  null,
  { deleteSectionById }
)(SectionsView)
