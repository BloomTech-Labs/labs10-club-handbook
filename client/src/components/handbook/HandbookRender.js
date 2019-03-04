import React from 'react'
import renderHTML from 'react-render-html'
import { HandbookContainer, HandbookPreview } from '../../style/handbook'
import { Close } from '@material-ui/icons'

const SectionRender = props => {
  if (props.loading) {
    return <h1>Loading...</h1>
  } else if (props.sections.length === 0) {
    return <h1>Please create a handbook and add some sections.</h1>
  } else if (props.displayHandbook && props.sections) {
    return (
      <HandbookPreview displayOn>
        <Close onClick={props.cancel} />
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

export default SectionRender
