import React from 'react';


function UserCard(props) {

    return(
        <div id='usercard'>
            <h2>GitHub Username: {props.user.name}</h2>
            <img id='gitimg'src={props.user.avatar_url}/>
            <h3>Location: {props.user.location}</h3>
            <h3>Company: {props.user.company}</h3>
           <h3>Followers: {props.user.followers}</h3>
           <h3>Following: {props.user.following}</h3>
           <h3>GitHub Url: {props.user.html_url}</h3>
        </div>
    )
}

UserCard.defaultProps = {
    user: []
}
export default UserCard;

