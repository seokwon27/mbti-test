import { useNavigate } from "react-router-dom";
import { calculateMBTI } from "../utils/mbtiCalc";
import TestForm from "../components/TestForm";
import { createTestResult } from "../api/testResults";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  const handleSubmit = async (answer) => {
    const result = calculateMBTI(answer);
    const resultData = {
      userID: user.userId,
      nickname: user.nickname,
      result,
      answer,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div>
      <h1>MBTI 테스트 페이지</h1>
      <TestForm onSubmit={handleSubmit} />
    </div>
  );
};

export default TestPage;
