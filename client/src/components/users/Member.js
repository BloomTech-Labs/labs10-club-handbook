import React from 'react'
import SignedManual from './SignedManual'
import EmailButton from './SendEmail'
import ViewedManual from './ViewedManual'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'
import UpdateMembers from './UpdateMembers'

//#region STYLES
const H3 = styled.h3`
  font-size: 1.8rem;
  margin-right: 5px;
`;
const MemberContainer = styled.div`
  margin: 0 0 15px 0;
`;
const SCMember = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${size.tablet} {

  }
`;
const MemberInfo = styled.div`
  width: 75%;
  display: flex;
`;
const Name = styled.div`
  display: flex;
  width: 50%;
  :hover {
    cursor: pointer;
  }
`;
const Email = styled.div`
  width: 50%;
  :hover {
    cursor: pointer;
  }
  @media ${size.tablet} {
    display: none;
}
`;
const UpdateMember = styled.div`
  display: ${props => props.visible === true ? "block" : "none"};
`;
const Actions = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 0;
`;
//#endregion

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  showEditField = event => {
    if (this.state.open === false) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  render() {
    return (
      <MemberContainer>
        <SCMember key={this.props.user.id}>
          <MemberInfo>
            <Name>
              <H3 onClick={this.showEditField}>{this.props.user.firstname}</H3>
              <H3 onClick={this.showEditField}>{this.props.user.lastname}</H3>
            </Name>
            <Email>
              <H3 onClick={this.showEditField}>{this.props.user.email}</H3>
            </Email>
          </MemberInfo>

          <Actions>
            <ViewedManual sub_id={this.props.user.sub_id} />
            <SignedManual signed={this.props.user.signed} />
            <EmailButton email={this.props.user.email} />
          </Actions>

        </SCMember>
        <UpdateMember visible={this.state.open} >
            <UpdateMembers userId={this.props.user.id}/>
        </UpdateMember>
      </MemberContainer>
    )
  }
}

export default Member
