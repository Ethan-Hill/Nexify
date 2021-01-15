import React from "react";
import UserImage from "../Profile/User/UserImage";
import UserName from "../Profile/User/UserName";
import UserEmail from "../Profile/User/UserEmail";
import UserAccountButton from "../Profile/User/UserAccountButton";

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
