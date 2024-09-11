import { useState } from "react";
import { updateProfile } from "../api/auth";

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
    <div className="flex flex-col bg-white p-3 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">프로필 수정</h3>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col m-5 bg-slate-200 gap-3 p-5 shadow-md rounded-md"
      >
        <div>
          <label>닉네임</label>
          <br />
          <input
            placeholder={user.nickname}
            onChange={handleNicknameChange}
            className=" border border-slate-300 rounded-md"
          />
        </div>

        <button className="bg-blue-500 text-white rounded-md">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
