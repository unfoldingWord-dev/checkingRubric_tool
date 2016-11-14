///Rubric.js//

const api = window.ModuleApi;
const React = api.React;
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
    let questionsList = [];
    let questionsObject = this.props.currentQuestionsList.questions;
    for(var key in questionsObject){
      if(this.props.currentQuestionsList.questionsTypeBinary){
        questionsList.push(
          <tr key={key}>
            <td style={{border: "1px solid black", padding: "10px"}}>{questionsObject[key]}</td>
            <td style={{border: "1px solid black", padding: "10px"}}>No</td>
            <td style={{border: "1px solid black", padding: "10px"}}>Yes</td>
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
    console.log(this.props.currentQuestionsList.questionsTypeBinary);
    return (
      <div style={style.rubricLayout}>
        <h3 style={{textAlign: "center"}}>{this.props.currentGroup}</h3>
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
