import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-icons-kit'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar'
import 'rc-tabs/assets/index.css'
import Box from '../../../../reusecore/elements/Box'
import Text from '../../../../reusecore/elements/Text'
import Heading from '../../../../reusecore/elements/Heading'
import Image from '../../../../reusecore/elements/Image'
import Container from '../../../components/UI/Container'

import SectionWrapper from './updateScreen.style'
import { SCREENSHOTS } from '../../../data/SaasThree'

const UpdateScreen = ({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper id="screenshot_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PROCESS" />
          <Heading
            {...secHeading}
            content="The Process is Simple"
          />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              <Image src={item.image} alt={`screenshot-${index + 1}`} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
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
};

export default UpdateScreen;
