import { useState } from "react";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const [isActive, setActive] = useState(null);
  const handleInfoButton = id => {
    setActive(newActiveId => (newActiveId === id ? null : id));
  };
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map(question => (
          <SingleQuestion
            key={question.id}
            {...question}
            handleInfoButton={() => handleInfoButton(question.id)}
            isActive={isActive === question.id}
          />
        ))}
      </section>
    </main>
  );
};
export default App;
