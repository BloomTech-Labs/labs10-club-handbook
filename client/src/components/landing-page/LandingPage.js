import React, { Fragment } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Sticky from 'react-stickynode'
import { DrawerProvider } from './common/contexts/DrawerContext'
import { saasThreeTheme } from './common/theme/saasThree'
import { ResetCSS } from './common/assets/css/style'
import {
  GlobalStyle,
  ContentWrapper,
} from './common/containers/SaasThree/saasThree.style'

import BannerSection from './common/containers/SaasThree/Banner'
import Navbar from './common/containers/SaasThree/Navbar'
import ServiceSection from './common/containers/SaasThree/Service'
import PricingSection from './common/containers/SaasThree/Pricing'
import PartnerSection from './common/containers/SaasThree/Partner'
import TrialSection from './common/containers/SaasThree/Trial'
import FeatureSection from './common/containers/SaasThree/Feature'
import UpdateScreen from './common/containers/SaasThree/UpdateScreen'
import TestimonialSection from './common/containers/SaasThree/Testimonial'
import Newsletter from './common/containers/SaasThree/Newsletter'
import Footer from './common/containers/SaasThree/Footer'

export default () => {
  return (
    <ThemeProvider theme={saasThreeTheme}>
      <Fragment>
        <Head>
          <title>SaaS | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <UpdateScreen />
          <FeatureSection />
          <PartnerSection />
          <PricingSection />
          <TestimonialSection />
          <TrialSection />
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}
