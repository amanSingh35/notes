import React from "react";
import { getinitials } from "../../utils/helper";

const 
ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return null; // or a loading indicator like a spinner
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getinitials(userInfo.fullName)}
      </div>
      <div className="">
        <p className="text-sm font-medium">{userInfo.fullName}</p>
        <button className="text-sm text-blue-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
