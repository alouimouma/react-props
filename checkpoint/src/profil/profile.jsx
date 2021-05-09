import React from "react";
import PropTypes from "prop-types"

const Profile = (props) => {
    console.log(props);
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            {props.handleAlert(props.FullName)}
            <h2 style={{ color: "red"  }}> {props.FullName}</h2>
            <h3> {props.Bio}</h3>
            <h4>{props.Profession}</h4>
            {props.children}
        </div>
    )
}
Profile.defaultProps = {
    FullName: "this is the default value",
}
Profile.propTypes = {
        FullName: PropTypes.string,
        Bio: PropTypes.string,
        Profession: PropTypes.string,
        handleAlert: PropTypes.func,
        
        

    }


export default Profile;
