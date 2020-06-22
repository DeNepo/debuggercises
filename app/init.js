import LiveStudy from './live-study/main.js';

window.onload = async () => {

  fetch(`./index.json`)
    .then(res => res.json())
    .then(index => {
      document.getElementById('title').innerHTML = index.config.title;
      document.getElementById('header').innerHTML = index.config.title + ':';

      window.liveStudyApp = new LiveStudy(index, editor, document.getElementById('study-buttons'));
      console.log(liveStudyApp)

      const urlString = window.location.href;
      const url = new URL(urlString);
      const encodedPath = url.searchParams.get("path");
      let exercise = {};
      if (encodedPath) {
        const path = decodeURIComponent(encodedPath);
        const splitPath = path.split('/');
        let exerciseInstance = {};
        let dirObj = liveStudyApp.populated;
        for (let subPath of splitPath) {
          if (!subPath) { continue; }
          if (subPath.includes('.js')) {
            exerciseInstance = dirObj.populated.find(file => file.path.rel === '/' + subPath);
            break;
          } else if (dirObj.path && dirObj.path === '/' + subPath) {
            continue;
          } else if (dirObj.dirs) {
            dirObj = dirObj.dirs.find(dir => dir.path === '/' + subPath);
          }
        }
        exercise = exerciseInstance
      } else {
        const findFirstExercise = (virDir) => {
          if (virDir.populated) {
            return virDir.populated[0]
          } else if (virDir.dirs) {
            return findFirstExercise(virDir.dirs[0]);
          }
        }
        exercise = findFirstExercise(liveStudyApp.populated);
      }
      exercise.load((err, code) => {
        exercise.monacoModel.setValue(code);
        editor.setModel(exercise.monacoModel);
      });
      document.getElementById('current-path').innerHTML = exercise.path.abs.split('/').slice(2).join('/');
      liveStudyApp.active = exercise;

      const view = liveStudyApp.render(exercise);
      document.getElementById('drop-down').appendChild(view);
    })
    .catch(err => console.error(err));

};


// fetch('.' + path)
//   .then(res => {
//     if (!res.ok) {
//       throw res;
//     }
//     return res.text()
//   })
//   .then(exercise => {
//     editor.setValue(exercise);
//     document.getElementById('current-path')
//       .innerHTML = exercise.path.abs;
//   })
//   .catch(err => {
//     console.error(err);
//     editor.setValue(`unable to load ${path}`)
//   });
