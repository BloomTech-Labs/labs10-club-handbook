import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { FormatAlignCenter } from '@material-ui/icons'
import { Row } from '../../../style/layout'
import { SectionBox, TitleBox, SectionHead, headerIcon } from '../../../style/section'


class MemberSectionItem extends Component {
  render() {
    const { section } = this.props

    return (
        <div>
            <Row key={section.id} >
                <SectionBox>
                    <SectionHead>
                        <FormatAlignCenter style={headerIcon} />
                    </SectionHead>

                    <TitleBox>
                        <Typography variant="header4">{section.title}</Typography>
                    </TitleBox>

                </SectionBox>
            </Row>
        </div>
    )
  }
}

export default MemberSectionItem