/**
 * TranslationQuestions check module
 */

// Get the Translation Core Module API
const api = window.ModuleApi;

// Get the React and ReactBootstrap libraries from the API
const React = api.React;
const ReactBootstrap = api.ReactBootstrap;

// Declare modules that are not defined within our ExampleChecker
// They will be initialized in the constructor
var TPane = null;
var CommentBox = null;

// Initialize the namespace to be used inside the check store.
const NAMESPACE = 'TranslationQuestionsChecker';

// Extends CheckModule class, which handles most aspects of a check module,
// such as events when the user clicks the next button or menu items in the navigation menu,
// saving checks in the check store, and updating the view.
// If you don't want to extend CheckModule, then extend the React.Component class instead.



class View extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Hello tQ</h1>
      </div>
    );
  }
}


module.exports = {
  name: NAMESPACE,
  view: View
}
