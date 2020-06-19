import Exercise from './exercise.js';

export default class LiveStudy {

  title = 'Live Study';
  virDir = {};
  populated = {};

  constructor(index) {
    this.virDir = index;
    this.populated = LiveStudy.populate(index, index.path, index.config);
    this.title = index.config.title;
  }

  static populate(data, path, config) {
    const copy = Object.assign({}, data);
    if (data.files) {
      copy.populated = data.files
        .map(file => new Exercise(file.path, path, config));
    };
    if (data.dirs) {
      copy.dirs = data.dirs.map(subDir => LiveStudy.populate(subDir, path + subDir.path, subDir.config ? Object.assign({}, config, subDir.config) : config));
    };
    return copy;
  }

  renderExercises(virDir = this.populated) {

    const detailsEl = document.createElement('details');
    detailsEl.style = 'margin-top: 1%; margin-bottom: 1%;';

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    subListEl.style = 'padding-left: 1em';
    if (virDir.populated) {
      virDir.populated.forEach(exercise => {
        const exerciseEl = exercise.render();
        const exerciseContainer = document.createElement('div');
        exerciseContainer.style = 'margin-top: 0.5em; margin-bottom: 0.5em;';
        exerciseContainer.appendChild(exerciseEl);
        subListEl.appendChild(exerciseContainer);
      });
    };
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        subListEl.appendChild(subDirEl);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = this.title;
    container.appendChild(header);

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    const divContainer = document.createElement('div');
    for (let child of Array.from(unWrapped.children)) {
      divContainer.appendChild(child);
    }
    container.appendChild(divContainer)

    return container;
  }
}
