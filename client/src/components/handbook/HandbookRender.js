import React from 'react'
import renderHTML from 'react-render-html'
import {
  SectionContainer,
  HandbookPreview,
} from '../../style/handbook-page/handbook'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return (
      <HandbookPreview>
        <h1>Please create a handbook and add some sections.</h1>
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
