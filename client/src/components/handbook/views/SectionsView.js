import React from 'react'
import { connect } from 'react-redux'
import { deleteSectionById } from '../../../store/actions/clubActions'
import { Typography } from '@material-ui/core'
import { AddCircle, Delete, FormatLineSpacing } from '@material-ui/icons'

import { Row, Column, iconSize } from '../../../style/layout'

const SectionsView = props => {
  return (
    <div className="section-block">
      <Row>
        <Column onClick={props.toggleAddView} style={{ cursor: 'pointer' }}>
          <AddCircle style={iconSize} />
          <Typography variant="header6">Add</Typography>
        </Column>

        <Column>
          <FormatLineSpacing style={iconSize} />
          <Typography variant="header6">Reorder</Typography>
        </Column>
      </Row>
      {props.sections.map(section => (
        <>
          <div
            key={section.id}
            onClick={() => props.toggleEditView(section.id)}
            style={{ cursor: 'pointer' }}
          >
            {/* <img src={section.img_url} /> */}
            <h2>{section.title}</h2>
          </div>
          <button
            onClick={() => props.deleteSectionById(props.clubId, section.id)}
          >
            <Delete />
          </button>
        </>
      ))}
    </div>
  )
}

export default connect(
  null,
  { deleteSectionById }
)(SectionsView)
