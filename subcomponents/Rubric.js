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
      questionsList.push(
        <tr key={key} style={{border: "1px solid black"}}><td>{questionsObject[key]}</td></tr>);
    }
    return questionsList;
  }

  render(){
    return (
      <div style={style.rubricLayout}>
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
