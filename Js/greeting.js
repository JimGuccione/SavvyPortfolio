var welcomeUser = function welcomeUser(){
    var userName = prompt("What's your name?");

    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Welcome, ' + userName);
    }
};


welcomeUser();

