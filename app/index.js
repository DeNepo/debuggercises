import LiveStudy from './live-study.js';

window.onload = async () => {
  try {
    const res = await fetch('./config.json');
    const config = await res.json();

    document.getElementById('title').innerHTML = config.title;

    fetch(`/index.json`)
      .then(res => res.json())
      .then(index => {
        const liveStudyApp = new LiveStudy(index, config);
        const view = liveStudyApp.render();
        document.getElementById('root').appendChild(view);
      })
      .catch(err => console.error(err));

  } catch (err) {
    console.error(err);
  }
};
