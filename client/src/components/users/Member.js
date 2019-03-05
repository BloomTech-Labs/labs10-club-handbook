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
  /* margin: 0 0 15px 0; */
  padding: 10px 2px;
  background: ${props => props.editVisible === true && "#3648AC"};
  color: ${props => props.editVisible === true && "white"};
  :hover {
    background: #3648AC;
    color: white;
  }
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
  display: flex;
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
      // editEmail: false,
      // email: '',
    }
  }

  showEditField = event => {
    if (this.state.open === false) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  // editEmailField = event => {
  //   if (this.state.editEmail === false) {
  //     this.setState({ editEmail: true })
  //   } else {
  //     this. setState({ editEmail: false })
  //   }
  //   this.setState({ email: this.props.user.email })
  // }

  // handleChanges = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   event.stopPropagation();
  //   console.log('handleSubmit() invoked')

  //   const { userId } = this.props

  //   const userChanges = {};

  //   if (this.state.firstname.length > 0) userChanges.firstname = this.state.firstname;
  //   if (this.state.lastname.length > 0) userChanges.lastname = this.state.lastname;
  //   if (this.state.email.length > 0) userChanges.email = this.state.email;

  //   this.props.updateUser(userId, userChanges)

  //   this.setState({
  //     firstname: '',
  //     lastname: '',
  //     email: ''
  //   })
  // }

  render() {
    console.log(this.props.user)
    return (
      <MemberContainer editVisible={this.state.open}>
        <SCMember onClick={this.showEditField} key={this.props.user.id}>
          <MemberInfo>
            <Name>
              <H3>{this.props.user.firstname}</H3>
              <H3>{this.props.user.lastname}</H3>
            </Name>
            <Email>
            {/* {this.state.editEmail === false ? <H3 onClick={this.editEmailField}>{this.props.user.email}</H3> : <input type="text" name="email" onChange={this.handleChanges} value={this.state.email} />} */}
              <H3 onClick={this.showEditField}>{this.props.user.email}</H3>
            </Email>
          </MemberInfo>

          <Actions>
            <ViewedManual sub_id={this.props.user.sub_id} />
            <SignedManual signed={this.props.user.signed} />
            <EmailButton email={this.props.user.email} name={this.props.user.firstname} clubName={this.props.clubName} adminFirstName={this.props.adminFirstName} adminLastName={this.props.adminLastName} />
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
