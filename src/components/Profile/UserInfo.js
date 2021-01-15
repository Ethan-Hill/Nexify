import React from "react";
import UserImage from "./User/UserImage.js";
import UserName from "./User/UserName.js";
import UserEmail from "./User/UserEmail.js";
import UserAccountButton from "./User/UserAccountButton.js";

export default function UserInfo({ user }) {
  return (
    <div className="p-5 shadow-2xl xl:w-144 xl:h-144">
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <UserImage src={user.image} className="my-5" />
        <UserName name={user.name} />
        <UserEmail email={user.email} />
        <UserAccountButton url={user.profile.external_urls.spotify} />
      </div>
    </div>
  );
}
