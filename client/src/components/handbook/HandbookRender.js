import React from 'react'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return <h1>No sections loaded on this component...</h1>
  } else {
    return (
      <div>
        {props.sections.map(section => {
          const { title, body, img_url } = section

          return (
            <div className="section">
              <h1>{title}</h1>
              {img_url}
              <div className="body">{renderHTML(body)}</div>
            </div>
          )
        })}
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
