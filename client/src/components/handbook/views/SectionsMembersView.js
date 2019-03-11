import React, { Component } from 'react'
import MemberSectionItem from './MemberSectionItem'

class SectionsView extends Component {
  state = {
    sections: this.props.sections,
  }

  render() {
    return (
      <div>
        {this.props.sections.map((section, idx) => {
          return (
            <MemberSectionItem
              key={section.id}
              id={section.id}
              section={section}
            />
          )
        })}
      </div>
    )
  }
}

export default SectionsView