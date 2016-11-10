const api = window.ModuleApi;

function getData(params, progressCallback, onCompleteCallback) {
  // Get the gateway language and generate a check for each verse
  api.getGatewayLanguageAndSaveInCheckStore(params, progressCallback, function(bookData) {
    generateChecks(bookData, params, progressCallback, onCompleteCallback);
  });
}

/**
 * Generates two groups of checks, where each group has a check for each verse.
 */
function generateChecks(bookData, params, progressCallback, callback) {
  var groupNames = ['Overview', 'Naturalness', 'Clarity', 'Accuracy', 'ChurchApproval'];
  var groups = [];
  for (let groupName of groupNames) {
    var group = {
      group: groupName,
      checks: []
    };
    console.log(bookData);
    for (let chapter of bookData.chapters) {
      console.log(bookData.chapters);

        if(chapter.num){
          var check = {
            chapter: parseInt(chapter.num),
            verse: 1,
            index: bookData.chapters.indexOf(chapter),
            checkStatus: []
          }
          group.checks.push(check);
        }
      }
    for(var i = 0; i < group.checks.length; i++){
      switch (group.group) {
        case 'Overview':
          var checkStatus = {
            meaningBased: 'UNCHECKED',
            firstLangSpeakers: 'UNCHECKED',
            StatementOfFaith: 'UNCHECKED',
            translationGuidelines: 'UNCHECKED',
          }
          group.checks[i].checkStatus.push(checkStatus);
        break;
        case 'Naturalness':
          var checkStatus = {
            formOfLanguage: 'UNCHECKED',
            cultureCorrect: 'UNCHECKED',
            easyUnderstood: 'UNCHECKED',
            naturalText: 'UNCHECKED',
            communityReviewed: 'UNCHECKED',
            belNonBelReviewed: 'UNCHECKED',
            multAgeGroups: 'UNCHECKED',
            menAndWomen: 'UNCHECKED',
          }
        group.checks[i].checkStatus.push(checkStatus);
        break;
        case 'Clarity':
          var checkStatus = {
            easyUnderstood: 'UNCHECKED',
            correctNamingsVerbs: 'UNCHECKED',
            figuresofSpeech: 'UNCHECKED',
            meaningKept: 'UNCHECKED',
            communityReviewed: 'UNCHECKED',
            belNonBelReviewed: 'UNCHECKED',
            multAgeGroups: 'UNCHECKED',
            menAndWomen: 'UNCHECKED',
          }
        group.checks[i].checkStatus.push(checkStatus);
        break;
        case 'Accuracy':
          var checkStatus = {
            importantWordsUsed:'UNCHECKED',
            wordCorrect: 'UNCHECKED',
            wordConsistent: 'UNCHECKED',
            exegeticalUsed: 'UNCHECKED',
            correctNamingsVerbs: 'UNCHECKED',
            figuresofSpeech: 'UNCHECKED',
            communityReviewed: 'UNCHECKED',
            srcTextCompared: 'UNCHECKED',
            origTextCompared: 'UNCHECKED',
          }
        group.checks[i].checkStatus.push(checkStatus);
        break;
        case 'ChurchApproval':
          var checkStatus = {
            nativeAndGatewayReviewer:'UNCHECKED',
            naturalAndClear: 'UNCHECKED',
            accurate: 'UNCHECKED',
            faithful: 'UNCHECKED',
          }
        group.checks[i].checkStatus.push(checkStatus);
        break;
        default:
          //do nothing for now
        }
      }
      groups.push(group);
    }
  api.initializeCheckStore( "TranslationQuestionsChecker", params, groups);
  callback();
}

module.exports = getData;
