// @TODO: implement drop-downs again

function Link(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return `
      <li>
        <a href="/${href}" data-navigo>${link}</a>
      </li>
    `;
}

//export default function Navigation(state){
    //var links = state
        //.links
        //.map(Link)
        //.join('');

    //return `
      //<div id="navigation">
        //<ul class="container">
          //${links}
        //</ul>
      //</div>
    //`;
//}

export default function Navigation(state){
    var links = state
        .links
        .map(Link)
        .join('');

    return `
     <div id="navigation">
       <div class="navbar">
        <a href="/">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
          <button class="dropbtn">Year
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/freshman">Freshman</a>
            <a href="#">Sophomore</a>
            <a href="#">Junior</a>
            <a href="#">Senior</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Requirements
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Target List</a>
            <a href="#">Academics</a>
            <a href="#">Training</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Athletics
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">High School</a>
            <a href="#">Club Team</a>
            <a href="#">Instruction</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
