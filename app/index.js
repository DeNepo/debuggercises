import LiveStudy from './live-study.js';

window.onload = async () => {

  fetch(`./index.json`)
    .then(res => res.json())
    .then(index => {
      document.getElementById('title').innerHTML = index.title;

      window.liveStudyApp = new LiveStudy(index);
      console.log(liveStudyApp)
      const view = liveStudyApp.render();
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));

};
