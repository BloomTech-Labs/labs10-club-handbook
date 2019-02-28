import React from 'react'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'
import { HandbookContainer, HandbookPreview } from '../../style/handbook'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return <h1>No sections loaded on this component...</h1>
  } else {
    return (
      <HandbookPreview>
        {props.sections.map(section => {
          const { title, body, img_url } = section

          return (
            <HandbookContainer>
              <h1>{title}</h1>
              <img src={img_url} style={{ width: '10rem' }} />
              <div className="body">{renderHTML(body)}</div>
            </HandbookContainer>
          )
        })}
      </HandbookPreview>
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
