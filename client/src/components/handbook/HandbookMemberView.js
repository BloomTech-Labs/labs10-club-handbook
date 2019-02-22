import React from 'react';
import { connect } from 'react-redux'

class HandbookMemberView extends React.Component {
    render() {
        return (
            <div>
                hi
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.auth.currentUser,
      club: state.clubs.clubById,
      sections: state.clubs.sections,
    }
  }
  
  export default connect(
    mapStateToProps,
    { }
  )(HandbookMemberView)