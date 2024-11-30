
import './App.css'
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Text display="whats up"/>
    </>
  )
}

function Text({display}){
  return(
    <>
      <div>
        <p>{display}</p>
     </div>
    </>
  )
}

Text.propTypes = {
  display: PropTypes.string.isRequired, // Declare the 'display' prop and mark it as required
};

export default App
