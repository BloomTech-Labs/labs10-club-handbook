import React from 'react'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return <h1>No sections on the Redux Store</h1>
  } else {
    console.log(props.sections)
    const sectionId = props.match.params.id
    const section = props.sections.find(
      section => section.id.toString() === sectionId.toString()
    )

    const { title, body } = section

    return (
      <div>
        <h1>{title}</h1>
        <div className="body">{renderHTML({ body })}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sections: state.clubs.sections,
  }
}

export default connect(
  mapStateToProps,
  {}
)(SectionRender)
