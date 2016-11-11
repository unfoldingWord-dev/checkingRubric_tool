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
      questionsList: this.getWordList()
    }
  }

  getWordList() {
     var questionsList = require('../static/QuestionsList.json').questionsList;
     return questionsList;
   }

  render() {
    console.log(this.state.questionsList);
    return (
      <div style={style.rubricLayout}>

      </div>
    );
  }
}




module.exports = Rubric;
