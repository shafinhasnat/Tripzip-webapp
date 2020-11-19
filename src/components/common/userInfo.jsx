import React from "react";
const UserInfo = (props) => {
  const {
    uid,
    name,
    email,
    phone,
    gender,
    image,
    birthday,
    location,
    interest,
    profession,
    motto,
  } = props;
  return (
    <div>
      <img src={image} height="200" width="200" />
      <p>
        <b>User id:</b> {uid}
      </p>
      <p>
        <b>name:</b> {name}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Birthday:</b> {birthday}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Phone:</b> {phone}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <p>
        <b>Interest:</b> {interest}
      </p>
      <p>
        <b>Profession:</b> {profession}
      </p>
      <p>
        <b>Motto:</b> {motto}
      </p>
    </div>
  );
};

export default UserInfo;
