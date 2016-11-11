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

  componentWillMount(){
    this.getCurrentGroup();
    this.getQuestionsList();
  }

  getQuestionsList() {
     let questionsList = require('../static/QuestionsList.json').questionsList;
     let currentQuestionsList = questionsList.find(arrayElement => arrayElement.group === this.state.currentGroup)
     this.setState({currentQuestionsList: currentQuestionsList});
   }

   getCurrentGroup(){
     this.setState({currentGroup: this.props.currentGroup});
   }

  render() {
    return (
      <div style={style.rubricLayout}>

      </div>
    );
  }
}




module.exports = Rubric;
