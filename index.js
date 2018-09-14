import Navigo from 'navigo';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

var router = new Navigo();
var initialHTML = document.body.innerHTML;

// var state = 'www' ;   // Get rid of this

var State = {
    'active': 'home',

    'home': {
        'title': 'Welcome to my Port'
    },

    'blog': {
        'title': 'Welcome to Blog'
    },

    'projects': {
        'title': 'Welcome to Projects'
    },
};
// this keeps all the navigation

router
    .on(':path', (params) => console.log(params.page))
    .on('/', () => console.log('hello home page!'))
    .resolve();

document
    .body
    .innerHTML = `
      ${Navigation}
      ${Header}
      ${Content}
      ${Footer}
      ${initialHTML} // we still need this
    `;

function handleRoute(params){
    var page = capitalize(params.page);
      
    startApp(states[page]);
}


//
