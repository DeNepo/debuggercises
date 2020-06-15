import LiveStudy from './live-study.js';

window.onload = async () => {
  // try {
  //   const res = await fetch('./config.json');
  //   const config = await res.json();


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

  // } catch (err) {
  //   console.error(err);
  // }
};
