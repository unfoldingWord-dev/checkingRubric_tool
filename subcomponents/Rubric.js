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
            <td style={{border: "1px solid black", padding: "5px", backgroundImage: "linear-gradient(to bottom,#f0ad4e 0,#eb9316 100%)"}}>No</td>
            <td style={{border: "1px solid black", padding: "5px", backgroundImage: "linear-gradient(to bottom,#5cb85c 0,#419641 100%)"}}>Yes</td>
          </tr>);
      }else{
        questionsList.push(
          <tr key={key}>
            <td style={{border: "1px solid black", padding: "10px"}}>{questionsObject[key]}</td>
            <td style={{border: "1px solid black", padding: "10px"}}>0</td>
            <td style={{border: "1px solid black", padding: "10px"}}>1</td>
            <td style={{border: "1px solid black", padding: "10px"}}>2</td>
          </tr>);
      }
    }
    return questionsList;
  }

  render(){
    return (
      <div style={style.rubricLayout}>
        <div style={{textAlign: "center", fontSize: "24px", fontWeight: "500", padding: "1px", backgroundColor: "#333333", color: "#FFFFFF"}}>
          {this.props.currentGroup}
        </div>
        <table>
          <tbody>
          {this.getQuestions()}
          </tbody>
        </table>
      </div>
    );
  }
}


module.exports = Rubric;
