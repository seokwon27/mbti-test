import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    //로그인하지 않은 사용자 login 페이지로 보내기
  });

  const handleLogout = () => {
    setUser();
  };

  return (
    <div>
      <header>
        <nav className="h-12 flex flex-row justify-between px-20 text-center items-center text-red-400 font-semibold shadow-md mb-8">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/profile">프로필</Link>
                <Link to="/test">테스트</Link>
                <Link to="/results">결과보기</Link>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="flex justify-center ">{children}</main>
    </div>
  );
};

export default Layout;
