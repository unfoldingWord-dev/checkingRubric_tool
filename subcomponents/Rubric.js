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

  getInstructions(){
    let questionsTypeBinary = this.props.currentQuestionsList.questionsTypeBinary;
    let instructions = [];
    if(questionsTypeBinary){
      instructions.push(
        <tr key={1} style={style.subTitleTr}>
          <td style={style.subTitleQuestions}>Questions</td>
          <td colSpan="2" style={style.subTitleYesOrNo}>
            No/Yes statements (No indicates a problem must be resolved)
          </td>
        </tr>);
    }else{
      instructions.push(
      <tr key={2} style={style.subTitleTr}>
        <td style={style.subTitleQuestions}>Questions</td>
        <td style={style.vertButtonDesc}>Disagree</td>
        <td style={style.vertButtonDesc}>Agree somewhat</td>
        <td style={style.vertButtonDesc}>Strongly agree</td>
      </tr>);
    }
    return instructions;
  }

  getQuestions(){
    let questionsObject = this.props.currentQuestionsList.questions;
    let questionsTypeBinary = this.props.currentQuestionsList.questionsTypeBinary;
    let questionsList = [];
    for(var key in questionsObject){
      if(questionsTypeBinary){
        questionsList.push(
          <tr key={key}>
            <td style={style.questions}>{questionsObject[key]}</td>
            <td style={style.yesButton} onClick={this.yesSelection.bind(this)}>Yes</td>
            <td style={style.noButton} onClick={this.noSelection.bind(this)}>No</td>
          </tr>);
      }else{
        questionsList.push(
          <tr key={key}>
            <td style={style.questions}>{questionsObject[key]}</td>
            <td style={style.zeroButton} onClick={this.zeroSelection.bind(this)}>0</td>
            <td style={style.oneButton} onClick={this.oneSelection.bind(this)}>1</td>
            <td style={style.twoButton} onClick={this.twoSelection.bind(this)}>2</td>
          </tr>);
      }
    }
    return questionsList;
  }

  yesSelection(){
    console.log("hello yes");
  }

  noSelection(){
    console.log("hello no");
  }

  zeroSelection(){
    console.log("hello zero");
  }

  oneSelection(){
    console.log("hello one");
  }

  twoSelection(){
    console.log("hello two");
  }

  render(){
    return (
      <div style={style.rubricLayout}>
        <div style={style.currentGroupHeader}>
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
