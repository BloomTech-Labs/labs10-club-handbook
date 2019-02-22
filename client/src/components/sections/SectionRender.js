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

    const { title, body, img_url } = section

    // const body =
    //   '<p>asdasdasdwq<strong>asdasda</strong><strong style="color: rgb(230, 0, 0);">asdadasdasdasd</strong></p>'

    return (
      <div>
        <h1>{title}</h1>
        {img_url}
        <div className="body">{renderHTML({ body })}</div>
        {/* <div className="body">{renderHTML(body)}</div> */}
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
