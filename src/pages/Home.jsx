import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center w-full">
      <h3 className="text-2xl font-bold">무료 성격 테스트</h3>
      <p>자신의 성격 유형을 확일할 수 있도록 솔직하게 답변해주세요</p>
      <div className="">
        <div className="flex flex-row justify-center gap-5 m-5">
          <div className="bg-white p-6 w-64 rounded-md shadow-lg text-xl font-semibold">
            성격 유형 검사
            <div className="text-base mt-3 font-normal text-left">
              MBTI는 8가지 지표를 토대로 16가지 성격유형을 나누고 있습니다.
            </div>
          </div>
          <div className="bg-white p-6 w-64 rounded-md shadow-lg text-xl font-semibold">
            성격 유형 이해
            <div className="text-base mt-3 font-normal text-left">
              16가지 성격유형중 내가 속하는 유형에 대해서 알아볼 수 있습니다.
            </div>
          </div>
          <div className="bg-white p-6 w-64 rounded-md shadow-lg text-xl font-semibold">
            팀 평가
            <div className="text-base mt-3 font-normal text-left">
              자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
            </div>
          </div>
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
