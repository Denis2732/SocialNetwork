import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/reduser-profile'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 7281;
		}
		this.props.getUserProfile(userId);
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let MapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(MapStateToProps, { getUserProfile }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)

// let authRedirectComponent = withAuthRedirect(ProfileContainer);
// let withUrlDataContainerComponent = withRouter(authRedirectComponent)
// export default connect(MapStateToProps, { getUserProfile })(withUrlDataContainerComponent);
