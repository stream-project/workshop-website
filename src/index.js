import 'bootstrap';
import './main.scss';
import fullpage from 'fullpage.js';

var fullPageInstance = new fullpage('#fullpage', {
  navigation: false,
  sectionsColor:['#a7d1e2ff', '#b72c37ff', '#215063ff', '#81bdd5ff', '#3887a7ff', '#b64d55ff'],
  anchors:['Top', 'Programm', 'Location', 'Team', 'PreviousEvents']
});
