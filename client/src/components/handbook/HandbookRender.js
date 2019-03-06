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
          const { title, body, img_url } = section
          // const Section = styled.div`
          //   padding: 10rem;
          //   min-height: 100vh;
          //   display: flex;
          //   flex-direction: column;
          //   border-bottom: 1px solid gray;
          //   color: {
          //   }

          //   h1 {
          //     text-align: center;
          //     margin-bottom: 1.5rem;
          //   }
          // `

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
