import React from 'react'
import renderHTML from 'react-render-html'
import {
  SectionContainer,
  Handbook,
  Title,
} from '../../style/handbook-page/handbook'

const SectionRender = props => {
  if (props.sections.length === 0) {
    return (
      <Handbook>
        <Title>Please create a handbook and add some sections.</Title>
      </Handbook>
    )
  } else {
    return (
      <Handbook>
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
      </Handbook>
    )
  }
}

export default SectionRender
