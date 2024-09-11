import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  //인풋핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //폼 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "signup"
      ? onSubmit(formData)
      : onSubmit({
          id: formData.id,
          password: formData.password,
        });
  };
  return (
    <form
      className=" flex flex-col m-5 bg-slate-200 gap-3 p-5 shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={formData.id}
        onChange={handleChange}
        required
        className="rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
        required
        className="rounded-md"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
      )}
      <button className="bg-blue-500 text-white rounded-md" type="submit">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
