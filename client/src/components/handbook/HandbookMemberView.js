import React from 'react'
import { connect } from 'react-redux'
import DashDrawer from '../Dashboard'
import { getClubSections } from '../../store/actions/clubActions'

class HandbookMemberView extends React.Component {
  componentDidMount() {
    const handbookId = this.props.match.params.handbookId

    // if ()
    getClubSections(handbookId)
    
  }

  render() {
    return (
      <div>
        <DashDrawer />
        <div>handbook page</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sections: state.clubs.sections,
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { getClubSections }
)(HandbookMemberView)
