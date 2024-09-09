import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (userData) => {
    try {
      await register(userData);
      alert("회원가입 완료");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패");
      console.error("login error : ", error);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      회원가입
      <AuthForm mode={"signup"} onSubmit={handleSignup} />
      <span className="text-sm">
        계정이 이미 있으신가요?
        <Link to="/login">
          <span className="text-red-400">로그인</span>
        </Link>
      </span>
    </div>
  );
};

export default Signup;
