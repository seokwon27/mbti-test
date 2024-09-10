import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  return (
    <div>
      {results
        .sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return +1;
          } else {
            return 0;
          }
        })
        .filter((result) => result.visibility || result.userID === user.userId)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;
