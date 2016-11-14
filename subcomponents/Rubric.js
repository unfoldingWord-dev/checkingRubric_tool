///Rubric.js//

const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Button} = RB;
const style = require('../css/style.js');

/**
 * @description - This class defines the view for the Rubric Component which will
 render all the 5 questions of the rubric QA check
 */

class Rubric extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGroup: null,
      currentQuestionsList: null,
    }
  }

  getQuestions(){
    let questionsObject = this.props.currentQuestionsList.questions;
    let questionsTypeBinary = this.props.currentQuestionsList.questionsTypeBinary;
    let questionsList = [];
    for(var key in questionsObject){
      if(questionsTypeBinary){
        questionsList.push(
          <tr key={key}>
            <td style={{border: "1px solid black", padding: "10px"}}>{questionsObject[key]}</td>
            <td style={{border: "1px solid black", padding: "10px", textAlign: "center", backgroundImage: "linear-gradient(to bottom,#f0ad4e 0,#eb9316 100%)", color: "#FFFFFF"}}>No</td>
            <td style={{border: "1px solid black", padding: "10px", textAlign: "center", backgroundImage: "linear-gradient(to bottom,#5cb85c 0,#419641 100%)", color: "#FFFFFF"}}>Yes</td>
          </tr>);
      }else{
        questionsList.push(
          <tr key={key}>
            <td style={{border: "1px solid black", padding: "10px"}}>{questionsObject[key]}</td>
            <td style={{border: "1px solid black", padding: "10px", textAlign: "center", color: "#FFFFFF", backgroundColor: "#c3105a"}}>0</td>
            <td style={{border: "1px solid black", padding: "10px", textAlign: "center", color: "#FFFFFF", backgroundImage: "linear-gradient(to bottom,#f0ad4e 0,#eb9316 100%)"}}>1</td>
            <td style={{border: "1px solid black", padding: "10px", textAlign: "center", color: "#FFFFFF", backgroundImage: "linear-gradient(to bottom,#5cb85c 0,#419641 100%)"}}>2</td>
          </tr>);
      }
    }
    return questionsList;
  }

  getInstructions(){
    let questionsTypeBinary = this.props.currentQuestionsList.questionsTypeBinary;
    let instructions = [];
    if(questionsTypeBinary){
      instructions.push(
        <tr key={1} style={{backgroundColor: "#747474", color: "#FFFFFF"}}>
          <td style={{border: "1px solid black", height: "80px", textAlign: "center"}}>Questions</td>
          <td colSpan="2" style={{border: "1px solid black", padding: "3px", textAlign: "center"}}> No/Yes statements (No indicates a problem must be resolved)</td>
        </tr>);
    }else{
      instructions.push(
      <tr key={2} style={{backgroundColor: "#747474", color: "#FFFFFF"}}>
        <td style={{border: "1px solid black", height: "80px", textAlign: "center"}}>Questions</td>
        <td style={{border: "1px solid black", transform: "rotate(-90deg)", height: "80px"}}>Disagree</td>
        <td style={{border: "1px solid black", transform: "rotate(-90deg)", height: "80px"}}>Agree somewhat</td>
        <td style={{border: "1px solid black", transform: "rotate(-90deg)", height: "80px"}}>Strongly agree</td>
      </tr>);
    }
    return instructions;
  }

  render(){
    return (
      <div style={style.rubricLayout}>
        <div style={{textAlign: "center", fontSize: "22px", fontWeight: "500", padding: "1px", backgroundColor: "#333333", color: "#FFFFFF"}}>
          {this.props.currentGroup}
        </div>
        <table>
          <tbody>
          {this.getInstructions()}
          {this.getQuestions()}
          </tbody>
        </table>
      </div>
    );
  }
}


module.exports = Rubric;
