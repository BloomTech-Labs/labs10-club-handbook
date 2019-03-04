import React, { Component } from 'react'
import SectionItem from './SectionItem'
import { Typography } from '@material-ui/core'
import { AddCircle, FormatLineSpacing } from '@material-ui/icons'
import { Row, Column, iconSize } from '../../../style/layout'
const update = require('immutability-helper')

class SectionsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: this.props.sections,
    }
  }

  moveSection = (dragIndex, hoverIndex) => {
    const { sections } = this.state
    const dragSection = sections[dragIndex]

    this.setState(
      update(this.state, {
        sections: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragSection]],
        },
      })
    )
  }

  render() {
    return (
      <div>
        <Row>
          <Column>
            <AddCircle onClick={this.props.toggleAddView} style={iconSize} />
            <Typography variant="header6">Add</Typography>
          </Column>

          <Column>
            <FormatLineSpacing style={iconSize} />
            <Typography variant="header6">Reorder</Typography>
          </Column>
        </Row>

        {this.state.sections.map((section, idx) => (
          <SectionItem
            key={section.id}
            index={idx}
            id={section.id}
            section={section}
            deleteSectionById={this.props.deleteSectionById}
            toggleEditView={this.props.toggleEditView}
            clubId={this.props.clubId}
            moveSection={this.moveSection}
          />
        ))}
      </div>
    )
  }
}

export default SectionsView
