import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsersThunkCreater, } from '../../redux/reduser-frends';
import Frends from './Frends.jsx';
import preloader from './../../img/25.svg';
import './Frends.css';

class FrendsContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        //?Tеперь через thunk
        // this.props.setIsFetching(true);
        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        // })

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
        //?Tеперь через thunk
        // this.props.setIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    }

    render() {
        return <>
            {this.props.isFetching ? <img className="preloader" src={preloader} /> : null}
            <Frends totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFolowingProgress={this.props.toggleFolowingProgress}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsers: getUsersThunkCreater })(FrendsContainer);



// ? Dispatch бы зарефакторен)
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreated(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreated(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreated(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreated(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountActionCreated(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingActionCreated(isFetching));
//         }
//     }
// }




