import { BoxView } from "../../Utilities/Addons/Box";
import LastQuiz from "./last_quiz";

function Home() {
    return (
      <>
      {BoxView(<LastQuiz />)}
      </>
    );
  }
  
  export default Home;