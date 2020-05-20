import React from 'react';
import './Frends.css';
import { NavLink } from 'react-router-dom';


const Frends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className='content'>
        <div className='number-page'>
            {pages.map(p => {
                return <span className={props.currentPage === p && "selectedPage"}
                    onClick={(e) => { props.onPageChanged(p) }} key={p.id}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className='user'>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt='' src={u.imgSrc} />
                    </NavLink>
                    <div className='user-info'>
                        <div className='user-info-name'>
                            <h2>{u.name}</h2>
                            <p>{u.status}</p>
                        </div>
                        <div className='user-info-loc'>
                            <div>
                                {/* С сервера ПОКА не приходят такие данные */}
                                {/* {<h3>{u.location.country}</h3>}
                                    {<h4>{u.location.city}</h4>} */}
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Убрать из друзей</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Добавить в друзья</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    </div >

}

export default Frends;