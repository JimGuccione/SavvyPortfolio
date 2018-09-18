import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var initialHTML = document.body.innerHTML;


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

document
    .body
    .innerHTML = `
      ${Navigation}
      ${Header}
      ${Content}
      ${Footer}
      ${initialHTML} // we still need this
    `;

function handleNavigation(event){
    render(newState);

    var newState = state;

    newState.active = event.target.textContent;

    event.preventDefault();
}
// wtf look for State and newState




// console.log(event.target.textContent);

function render(state){
    var i = 0;
    var links;

    // USE THIS!!
     
    document
        .querySelector('#root')
        .innerHTML = `
        ${Navigation()}
        ${Header(state)[state.active]}
        ${Content()}
        ${Footer()}
        `;

    links = document.querySelectorAll('#navigation a');

    for(let  i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation);
    }

    render(State);
    // kick starts everything

    document
        .querySelector('#navigation')
        .innerHTML = Navigation;

    document
        .querySelector('#header')
        .innerHTML = Header;

    document
        .querySelector('#content')
        .innerHTML = Content;
    
    document
        .querySelector('#footer')
        .innerHTML = Footer;

    links[0].addEventListener(
        'click',
        handleNavigation
    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );
    links[2].addEventListener(
        'click',
        handleNavigation
    );



document
    .body
    .innerHTML = `
      ${Navigation}
      ${Header(state)}
      ${Content}
      ${Footer}
      ${initialHTML} // we still need this
    `;

    render(State);
    // kick starts everything

    document
        .querySelector('#navigation')
        .innerHTML = Navigation;

    document
        .querySelector('#header')
        .innerHTML = Header;

    document
        .querySelector('#content')
        .innerHTML = Content;
    
    document
        .querySelector('#footer')
        .innerHTML = Footer;

    links[0].addEventListener(
        'click',
        handleNavigation
    );





    links[1].addEventListener(
        'click',
        handleNavigation
    );
    links[2].addEventListener(
        'click',
        handleNavigation
    );
}

function render(state){
   var links;

   console.log('router->', router);


    console.log('router->', router);

    router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();
}
