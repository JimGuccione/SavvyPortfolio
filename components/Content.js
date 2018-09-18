import * as Pages from '/Users/jamesguccione/Code/SavvyCoder/JimGuccione/components/Pages';

export default function Content(state){
    const page = state[state.active];

    return `
      <div id="content">
        <div class="container">
          ${Pages[page.body](state.posts)}
        </div>
      </div>
    `;
}
