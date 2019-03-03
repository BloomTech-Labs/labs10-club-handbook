import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { Row, SectionBox } from '../../../style/layout'

const sectionSource = {
  beginDrag(props) {
    return props.section.id
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.section.id)
  },
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class SectionItem extends Component {
  render(props) {
    const {
      isDragging,
      connectDragSource,
      section,
      toggleEditView,
      deleteSectionById,
      clubId,
    } = this.props
    return connectDragSource(
      <div>
        <Row
          key={section.id}
          onClick={() => toggleEditView(section.id)}
          style={{ cursor: 'pointer' }}
        >
          <SectionBox>
            {/* <img src={section.img_url} /> */}
            <Typography variant="header4">{section.title}</Typography>
          </SectionBox>
          <Delete
            onClick={ev => {
              ev.stopPropagation()
              deleteSectionById(clubId, section.id)
            }}
          />
        </Row>
      </div>
    )
  }
}

export default DragSource('section', sectionSource, collect)(SectionItem)
