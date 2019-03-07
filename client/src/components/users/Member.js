import React from 'react'
import SignedManual from './SignedManual'
import EmailButton from './SendEmail'
import ViewedManual from './ViewedManual'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'
import UpdateMembers from './UpdateMembers'
import { updateUser } from '../../store/actions/usersActions'
import { connect } from 'react-redux'

//#region STYLES
const H3 = styled.h3`
  font-size: 1.8rem;
  margin-right: 5px;
  overflow: hidden;
`;
const MemberContainer = styled.div`
  margin: 10px 2%;
  padding: 5px 1%;
  border-left: 1px solid #3648AC;
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
  justify-content: flex-start;
  align-items: center;
  @media ${size.tablet} {
    flex-direction: column;
    align-items: flex-start
  }
`;
const Name = styled.div`
  display: flex;
  width: 40%;
  @media ${size.tablet} {
    width: 100%;
    margin-bottom: 5px;
  }
  :hover {
    cursor: pointer;
  }
`;
const Email = styled.div`
  display: flex;
  width: 60%;
  max-width: 275px;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
  @media ${size.tablet} {
    width: 275px;
  }
  @media ${size.mobile} {
    width: 210px;
  }
`;
const UpdateMember = styled.div`
  display: ${props => props.visible === true ? "block" : "none"};
  margin-top: 20px;
`;
const Actions = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 0;
  align-items: center;
`;
//#endregion

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      editEmail: false,
      editFirstName: false,
      editLastName: false,
      firstname: '',
      lastname: '',
      email: '',
    }
  }

  //#region METHODS
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
  //     this.setState({ editEmail: false })
  //   }
  //   this.setState({ email: this.props.user.email })
  // }

  // editFirstNameField = event => {
  //   if (this.state.editFirstName === false) {
  //     this.setState({ editFirstName: true })
  //   } else {
  //     this.setState({ editFirstName: false })
  //   }
  //   this.setState({ firstname: this.props.user.firstname })
  // }

  // editLastNameField = event => {
  //   if (this.state.editLastName === false) {
  //     this.setState({ editLastName: true })
  //   } else {
  //     this.setState({ editLastName: false })
  //   }
  //   this.setState({ lastname: this.props.user.lastname })
  // }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation();
    console.log('handleSubmit() invoked')

    // const { userId } = this.props
    const userId = this.props.user.id

    const userChanges = {};

    if (this.state.firstname.length > 0) userChanges.firstname = this.state.firstname;
    if (this.state.lastname.length > 0) userChanges.lastname = this.state.lastname;
    if (this.state.email.length > 0) userChanges.email = this.state.email;

    this.props.updateUser(userId, userChanges)

    this.setState({
      editEmail: false,
      editFirstName: false,
      editLastName: false,
    })

    // this.setState({
    //   firstname: '',
    //   lastname: '',
    //   email: ''
    // })
  }
//#endregion

  render() {
    return (
      // <Paper style={{ marginBottom: 10, paddingTop: 5, paddingBottom: 5, paddingRight: 10, paddingLeft: 10 }}>
      <MemberContainer editVisible={this.state.open}>
        <SCMember onClick={this.showEditField} key={this.props.user.id}>
        {/* <SCMember key={this.props.user.id}> */}
          <MemberInfo>
            <Name>
              {/* {
                this.state.editFirstName === false
                  ? <H3 onDoubleClick={this.editFirstNameField}>{this.props.user.firstname}</H3>
                  : <form onSubmit={this.handleSubmit}><input type="text" name="firstname" onChange={this.handleChanges} value={this.state.firstname} /></form>
              }
              {
                this.state.editLastName === false
                  ? <H3 onDoubleClick={this.editLastNameField}>{this.props.user.lastname}</H3>
                  : <form onSubmit={this.handleSubmit}><input type="text" name="lastname" onChange={this.handleChanges} value={this.state.lastname} /></form>
              } */}
              <H3>{this.props.user.firstname}</H3>
              <H3>{this.props.user.lastname}</H3>
            </Name>
            <Email>
              {/* {
                this.state.editEmail === false
                  ? <H3 onDoubleClick={this.editEmailField}>{this.props.user.email}</H3>
                  : <form onSubmit={this.handleSubmit}><input type="text" name="email" onChange={this.handleChanges} value={this.state.email} /></form>
              } */}
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
      // </Paper>
    )
  }
}

export default connect(
  null,
  { updateUser }
)(Member)
