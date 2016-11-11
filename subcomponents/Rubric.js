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
      questionsList: this.getQuestionsList()
    }
  }

  getQuestionsList() {
     let questionsList = require('../static/QuestionsList.json').questionsList;
     let overviewObject = questionsList.find(arrayElement => arrayElement.group === "overview")
     console.log(overviewObject);
     return questionsList;
   }

  render() {
    console.log(this.props.currentCheck);
    console.log(this.state.questionsList);
    return (
      <div style={style.rubricLayout}>

      </div>
    );
  }
}




module.exports = Rubric;
