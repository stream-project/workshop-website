import 'bootstrap';
import './main.scss';

import IScroll from 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';

var fullPageInstance = new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['Home', 'Programm', 'Location', 'Team', 'PreviousEvents'],
  navigation: true,
  slidesNavigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'Programm', 'Veranstaltungsort', 'Organisationsteam', 'Rückblick', 'Impressum'],
  scrollOverflow: true,
  sectionsColor: ['#a7d1e2', '#b64d55', '#215063', '#81bdd5', '#3887a7', '#fff']
});
