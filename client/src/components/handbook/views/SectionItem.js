import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'
import { Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { Row, SectionBox } from '../../../style/layout'

const sectionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
}

const sectionTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null
    }
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveSection(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  },
}

class SectionItem extends Component {
  render() {
    const {
      connectDragSource,
      section,
      toggleEditView,
      deleteSectionById,
      clubId,
      connectDropTarget,
    } = this.props

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div>
            <Row
              key={section.id}
              onClick={() => toggleEditView(section.id)}
              style={{ cursor: 'move' }}
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
      )
    )
  }
}

export default flow(
  DragSource('section', sectionSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget('section', sectionTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  }))
)(SectionItem)
