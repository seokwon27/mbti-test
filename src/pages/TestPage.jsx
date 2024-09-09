import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { calculateMBTI } from "../utils/mbtiCalc";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  const handleSubmit = async (answer) => {
    const result = calculateMBTI(answer);
    const resultData = {
      userID: user.id,
      nickname: user.nickname,
      result,
      answer,
      date: new Date().toISOString(),
      visibility: true,
    };
  };

  return (
    <div>
      <h1>MBTI 테스트 페이지</h1>
      <div className="flex flex-col gap-10 ">
        {questions.map((el) => {
          return (
            <div key={el.id} className="bg-white p-3">
              {el.question}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestPage;
