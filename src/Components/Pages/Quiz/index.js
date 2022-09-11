import { BoxView } from "../../Utilities/Addons/Box";

function Quiz() {
    return (
      <>
      <div className="justify-content-center d-flex mx-auto" style={{
        height:"100vh",
        alignContent: "center",
        alignItems: "center",
      }}>
        {BoxView(<div>
      to add content here
    </div>)}
      </div>
      </>
    );
  }
  
  export default Quiz;