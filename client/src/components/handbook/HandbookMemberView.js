import React from 'react';
import { connect } from 'react-redux'

class HandbookMemberView extends React.Component {
    render() {
        return (
            <div>hi
                {/* if (server is sending the client a handbook, that means this user is authenticated and we know who they are and what group they belong to ) {
                    display the handbook using the html render component
                } else {
                    display <MagicLinkRequest />
                } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.auth.currentUser,
      club: state.clubs.clubById,
    }
  }
  
  export default connect(
    mapStateToProps,
    { }
  )(HandbookMemberView)