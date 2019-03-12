import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../../../reusecore/elements/Box'
import Text from '../../../../reusecore/elements/Text'
import Heading from '../../../../reusecore/elements/Heading'
import Container from '../../../components/UI/Container'
import SectionWrapper from './service.style'
import { SERVICE_ITEMS } from '../../../data/SaasThree'

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {
  return (
    <SectionWrapper>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="ABOUT" />
          <Heading
            {...secHeading}
            content="What is Clique Book?"
          />
          <Text
            {...secDes}
            content="Clique Book makes it easy for a club administrator to create and maintain their club's handbook, and maintain their list of club members, all in one location."
          />
          <Text
            {...secDes}
            content="Your club members don't even need to go through a registration process. Members verify themselves by simply clicking a link that's sent to their email."
          />
        </Box>

        {/* <Box {...Row}>
          {SERVICE_ITEMS.map((item, index) => (
            <Box
              {...Col}
              key={`service-item-${index}`}
              className="service_item_col"
            >
              <Box className="service_item">
                <Box className="service_icon">
                  <i className={item.icon} />
                </Box>
                <Heading as="h3" content={item.title} {...serviceTitleStyle} />
              </Box>
            </Box>
          ))}
        </Box> */}
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: 'rgb(81, 159, 248)',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px'],
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px',
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#ff4361',
    mb: 0,
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center',
  },
};

export default ServiceSection;
