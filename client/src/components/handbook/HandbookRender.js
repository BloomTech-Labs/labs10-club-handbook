import React from 'react'
import renderHTML from 'react-render-html'
import { Handbook, Title } from '../../style/handbook-page/handbook'
import { size } from '../../style/breakpoints'

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
            id,
          } = section

          const textShadow = title_color == 'black' ? 'gray' : 'black'

          const Section = styled.div`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: ${bg_color};
            font-family: ${font};
            border-bottom: 1px solid gray;

            h1 {
              text-align: center;
              color: ${title_color};
              font-size: 6rem;
              text-shadow: 0 1px 3px ${textShadow};

              @media ${size.mobile} {
                font-size: 4rem;
              }
            }

            p {
              text-align: center;
              color: ${title_color};
              font-size: 2.6rem;
              text-align: left;

              @media ${size.mobile} {
                font-size: 1.8rem;
              }
            }

            li {
              color: ${title_color};
              font-size: 2.2rem;
              text-align: left;
              line-height: 1.5;

              @media ${size.mobile} {
                font-size: 1.4rem;
              }
            }
          `

          const SectionTitle = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 25vh;

            @media ${size.mobile} {
              margin-top: -10px;
            }
          `

          const Body = styled.div`
            display: flex;
            width: 100%;
            max-width: 140rem;
            padding: 5rem;
            justify-content: space-between;
            align-items: center;
            min-height: 50vh;

            @media (max-width: 1000px) {
              padding: 1rem;
              padding-bottom: 4rem;
              flex-direction: column !important;
            }

            @media ${size.mobile} {
              margin-top: -40px;
            }

            .img {
              width: 40%;
              height: auto;
              margin-right: 2rem;

              @media ${size.desktop} {
                width: 50%;
              }

              @media (max-width: 1000px) {
                width: 70%;
                margin-right: 0;
                margin-left: 0;
                margin-bottom: 5rem;
              }

              @media ${size.mobile} {
                width: 100%;
              }

              img {
                width: 100%;
                height: auto;
                box-shadow: -1px 1px 10px black;
              }
            }

            .body {
              width: 55%;
              min-height: 60%;
              padding-bottom: 5rem;

              @media ${size.desktop} {
                width: 45%;
              }

              @media (max-width: 1000px) {
                width: 80% !important;
                padding-bottom: 5rem;
              }

              @media ${size.mobile} {
                width: 90% !important;
              }
            }
          `

          const bgImage = {
            background: `url(${img_url})`,
            backgroundSize: 'cover',
          }

          return (
            <Section
              id={id}
              key={id}
              style={img_placement == 1 ? bgImage : null}
            >
              <SectionTitle>
                <h1>{title}</h1>
              </SectionTitle>
              <Body
                style={
                  !img_url || img_placement == 1 || img_placement == 4
                    ? { justifyContent: 'center' }
                    : img_placement == 3
                    ? { flexDirection: 'row-reverse' }
                    : img_placement == 5
                    ? { flexDirection: 'column' }
                    : null
                }
              >
                {img_url && img_placement != 1 && img_placement != 4 ? (
                  <div
                    className="img"
                    style={
                      img_placement == 3
                        ? { marginLeft: '2rem' }
                        : img_placement == 5
                        ? { marginBottom: '5rem', marginTop: '-5rem' }
                        : null
                    }
                  >
                    <img src={img_url} />
                  </div>
                ) : null}
                <div
                  className="body"
                  style={
                    !img_url ||
                    img_placement == 1 ||
                    img_placement == 4 ||
                    img_placement == 5
                      ? { width: '80%' }
                      : null
                  }
                >
                  {renderHTML(body)}
                </div>
              </Body>
            </Section>
          )
        })}
      </Handbook>
    )
  }
}

export default SectionRender
