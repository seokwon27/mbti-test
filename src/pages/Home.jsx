import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center w-full">
      <h3>무료 성격 테스트</h3>
      <p>자신의 성격 유형을 확일할 수 있도록 솔직하게 답변해주세요</p>
      <div>
        <div className="flex flex-row justify-center gap-5 m-5">
          <div className="bg-white p-6 w-64 rounded-md shadow-lg">성격 유형 검사</div>
          <div className="bg-white p-6 w-64 rounded-md shadow-lg">성격 유형 이해</div>
          <div className="bg-white p-6 w-64 rounded-md shadow-lg">팀 평가</div>
        </div>
      </div>
      <Link
        to="/test"
        className="w-64 h-7 rounded-md outline outline-2 outline-slate-400 hover:bg-slate-300"
      >
        검사하러 가기
      </Link>
    </div>
  );
};

export default Home;
