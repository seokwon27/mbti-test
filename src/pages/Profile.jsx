import React, { useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, nickname };
    setUser(updatedUser);
    updateProfile(updatedUser);
    alert("수정 완료");
  };

  return (
    <div>
      <div>프로필 수정</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <br />
          <input placeholder={user.nickname} onChange={handleNicknameChange} />
        </div>
        <button>프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
