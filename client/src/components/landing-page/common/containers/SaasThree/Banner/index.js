import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'next/link'
import Icon from 'react-icons-kit'
import Fade from 'react-reveal/Fade'
import { openModal, closeModal } from '@redq/reuse-modal'
import Box from '../../../../reusecore/elements/Box'
import Text from '../../../../reusecore/elements/Text'
import Heading from '../../../../reusecore/elements/Heading'
import Button from '../../../../reusecore/elements/Button'
import Image from '../../../../reusecore/elements/Image'
import Container from '../../../components/UI/Container'
import TiltShape from '../TiltShape'
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper,
  ButtonWrapper,
  Stylediframe,
} from './banner.style'
import BannerImage from '../../../assets/image/saasThree/banner-image.jpg'
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled'
import { play } from 'react-icons-kit/entypo/play'
import { Link } from 'react-router-dom'

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
)

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/8ME-QAlW6Ww"
      frameBorder="0"
    />
  </VideoWrapper>
)

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
  signinUser,
}) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    })
  }

  return (
    <BannerWrapper id="banner_section">
      <TiltShape  />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            {/* <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="25% Save" />
                <Text
                  {...discountText}
                  content="for first month trail version"
                />
              </DiscountLabel>
            </DiscountWrapper> */}
            <Heading
              {...title}
              content="Clique Book makes it easy to maintain your club"
            />
            <Text
              {...description}
              content="Clique Book is an easy-to-use document creator and club manager. Let Clique Book make maintaining your club's hand book quick and painless."
            />
            <ButtonWrapper>
              <Link to='/handbook/member-view'>
                {/* <a> */}
                  <Button {...fillButton} title="VIEW CLIQUEBOOK" />
                {/* </a> */}
              </Link>
              {/* <Link to='/clique/handbook'> */}
                {/* <a> */}
                  <Button  onClick={signinUser} {...fillButton} title="MANAGE CLIQUEBOOK" />
                {/* </a> */}
              {/* </Link> */}
              {/* <Link to='#'>
                <a>
                  <Button
                    {...button}
                    title="WATCH VIDEO"
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                  />
                </a>
              </Link> */}
            </ButtonWrapper>
          </Box>
          {/* <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <Image src={BannerImage} alt="banner image" />
                <PlayButton tabIndex="1000" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal>
            </Fade>
          </Box> */}
          <Box {...imageWrapper}>
            <Fade bottom>
              {/* <VideoModal> */}
              <Stylediframe  allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/FvFjSsddojQ?controls=1&loop=1&color=white&enablejsapi=1&modestbranding=1&rel=0"></Stylediframe>
                {/* <PlayButton tabIndex="1000" onClick={handleVideoModal}> */}
                  {/* <Icon icon={play} size={40} /> */}
                {/* </PlayButton> */}
              {/* </VideoModal> */}
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['16px', '16px'],
    fontWeight: '700',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'cliqueAction',
    height: '46px',
    minWidth: ['auto', '150px'],
    height: ['60px', '60px'],
    minHeight: 'auto',
    width: '225px',
    margin: '0 10px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
