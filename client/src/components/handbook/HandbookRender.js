import React from 'react'
import renderHTML from 'react-render-html'
import {
  SectionContainer,
  Handbook,
  Title,
} from '../../style/handbook-page/handbook'

import styled from 'styled-components'

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
          const {
            title,
            body,
            img_url,
            img_placement,
            bg_color,
            title_color,
            font,
          } = section

          const Section = styled.div`
            padding: 10rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid gray;
            background: ${bg_color};

            h1 {
              text-align: center;
              margin-bottom: 1.5rem;
              color: ${title_color};
            }
          `

          const Body = styled.div`
            display: flex;
            width: 100%;
            padding: 2rem;
            margin-top: 2rem;
            justify-content: space-between;
          `

          return (
            <Section>
              <h1>{title}</h1>
              <Body>
                <img src={img_url} style={{ width: '30rem' }} />
                <div className="body">{renderHTML(body)}</div>
              </Body>
            </Section>
          )
        })}
      </Handbook>
    )
  }
}

export default SectionRender
