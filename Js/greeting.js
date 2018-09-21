function welcomeUser(){
    var userName = prompt("What's your name?");
    var output = document.querySelector('#greeting');

    console.log('username', userName);

    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Welcome, ' + userName);

        // var userName = prompt("Hi there! What's your name?");
        // var output = document.querySelector('#greeting');

        output.textContent = 'Thanks for visiting, ' + userName + '.';

        // document.querySelector('#greeting').textContent = 'Welcome, ' + userName ;

        // document.querySelector('#greeting.js').innerHTML = `<h3>Welcome, ${userName},h3>`;

        document.querySelector('#greeting').innerHTML = `
        <h3>Welcome, ${userName}, <h3>
        <h4> Call us NOW </h4>
        `;
    }
}

welcomeUser(name);

// var state = ()
// this was used to add an event listener and prevent the website from navigating away
document
    .querySelector('#navigation a') // the "a" select the anchor tag away from the navigation
    .addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            console.log('the first link was clicked!');
        }
    );

document
    .querySelector('#navigation a')
    .addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            console.log(event.target.textContent);
            console.log(event.target.outerHTML);
            console.log(event.target.href);
        }
    );
