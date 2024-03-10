import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, info, title, handleInfoButton, isActive }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={handleInfoButton}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
