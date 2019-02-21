import 'bootstrap';
import './main.scss';

import IScroll from 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';

var fullPageInstance = new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['Home', 'Date', 'Location', 'Programm', 'Team', 'Partner', 'PreviousEvents', 'Impressum'],
  navigation: true,
  slidesNavigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'Über', 'Veranstaltungsort', 'Programm', 'Organisationsteam', 'Partner', 'Rückblick', 'Impressum'],
  scrollOverflow: true,
  sectionsColor: ['#a7d1e2', '#a7d1e2', '#215063', '#b64d55', '#fff', '#3887a7', '#215063', '#81bdd5']
});
