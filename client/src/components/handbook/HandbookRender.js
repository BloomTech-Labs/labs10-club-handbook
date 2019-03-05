import React from 'react'
import renderHTML from 'react-render-html'
import {
  SectionContainer,
  HandbookPreview,
} from '../../style/handbook-page/handbook'
import { Close } from '@material-ui/icons'

const SectionRender = props => {
  if (props.loading) {
    return (
      <HandbookPreview>
        <h1>Loading...</h1>
      </HandbookPreview>
    )
  } else if (props.sections.length === 0) {
    return (
      <HandbookPreview>
        <h1>Please create a handbook and add some sections.</h1>
      </HandbookPreview>
    )
  } else if (props.displayHandbook && props.sections) {
    return (
      <HandbookPreview displayOn>
        <Close onClick={props.cancel} />
        {props.sections.map(section => {
          const { title, body, img_url } = section

          return (
            <SectionContainer>
              <h1>{title}</h1>
              <img src={img_url} style={{ width: '10rem' }} />
              <div className="body">{renderHTML(body)}</div>
            </SectionContainer>
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
            <SectionContainer>
              <h1>{title}</h1>
              <img src={img_url} style={{ width: '10rem' }} />
              <div className="body">{renderHTML(body)}</div>
            </SectionContainer>
          )
        })}
      </HandbookPreview>
    )
  }
}

export default SectionRender
