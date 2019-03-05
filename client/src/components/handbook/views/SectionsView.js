import React, { Component } from 'react'
import SectionItem from './SectionItem'
import { Typography } from '@material-ui/core'
import { AddCircle, FormatLineSpacing } from '@material-ui/icons'
import { Row, Column, iconSize } from '../../../style/layout'
import { connect } from 'react-redux'
import { updateSection } from '../../../store/actions/clubActions'
const update = require('immutability-helper')

class SectionsView extends Component {
  state = {
    sections: this.props.sections,
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

    this.updateSectionOrder(this.state.sections)
  }

  updateSectionOrder = sections => {
    console.log('updating section after dnd')
    sections.map((section, idx) => {
      // console.log('section order', section.title, section.order)
      const orderUpdate = { order: idx + 1 }
      // console.log('section order', section.title, section.order)
      console.log(section.club_id, section.id, orderUpdate)
      this.props.updateSection(section.club_id, section.id, orderUpdate)
    })
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

        {this.props.sections.map((section, idx) => {
          console.log('sections view: section:', section)
          return (
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
          )
        })}
      </div>
    )
  }
}

export default connect(
  null,
  { updateSection }
)(SectionsView)
