import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const userData = await login(formData);
      setUser(userData);
      navigate("/");
      alert(`${userData.nickname}님 안녕하세요`);
      console.log("userData : ", userData);
    } catch (error) {
      alert("로그인 실패");
      console.error("login error : ", error);
    }
  };

  return (
    <div className="flex flex-col bg-white p-3 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">로그인</h3>
      <AuthForm mode={"login"} onSubmit={handleLogin} />
      <span className="text-sm">
        계정이 없나요?
        <Link to="/signup">
          <span className="text-red-400">회원가입하기</span>
        </Link>
      </span>
    </div>
  );
};

export default Login;
