<<<<<<< HEAD
export default`
    <div id="content">
            <em>The difference between the impossible and the possible lies in a man's determination. -Tommy Lasorda</em>
        
        
        <p strong>This is a bold new world</p strong>

    </div>

        <div id="content">Join Player Pipeline

        </div>



        <div class="section" id="forest-elephants">
        <h1>Forest elephants</h1>
            <p>In this section, we discuss the lesser known forest elephants. ...this section continues...
                <div class="subsection" id="forest-habitat">
          <h2>Habitat</h2>
                    <p>Forest elephants do not live in trees but among them. ...this subsection continues...
        </div>
      </div>
      `
=======
import * as Pages from './components/Pages';

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
>>>>>>> cf1f04a1f0611323c0830a25e9fe51b816f855da
