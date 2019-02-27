import React from 'react'
import { connect } from 'react-redux'
import { deleteSectionById } from '../../../store/actions/clubActions'

const SectionsView = props => {
  return (
    <div className="section-block">
      <h1>Sections:</h1>
      {props.sections.map(section => (
        <>
          <div
            key={section.id}
            onClick={() => props.toggleEditView(section.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={section.img_url} />
            <h2>{section.title}</h2>
          </div>
          <button
            onClick={() => props.deleteSectionById(props.clubId, section.id)}
          >
            Delete
          </button>
        </>
      ))}
      <button onClick={props.toggleAddView}>Add Section</button>
    </div>
  )
}

export default connect(
  null,
  { deleteSectionById }
)(SectionsView)
