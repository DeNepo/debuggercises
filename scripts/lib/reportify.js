
// eventually: refactor this function to not be by side-effect

const addEmptyReports = (virDir) => {
  virDir.report = { status: -1 };

  if (virDir.dirs) {
    virDir.dirs.forEach(dir => {
      addEmptyReports(dir);
    });
  };

  if (virDir.files) {
    // virDir.report.files = {};
    virDir.report.files = [];
    virDir.files.forEach(file => {
      // virDir.report.files[file] = { log: [], evaluated: false };
      virDir.report.files.push({
        status: -1,
        path: file.path,
        logs: [],
        evaluated: false
      });
    });
  };
};

const generateReportMap = (virDir) => {

  const relativeDirMap = {};

  if (Array.isArray(virDir.dirs)) {
    virDir.dirs.forEach(subDir => {
      Object.assign(relativeDirMap, generateReportMap(subDir));
    });
  };

  if (Array.isArray(virDir.files)) {
    virDir.report.files.forEach(fileReport => {
      relativeDirMap[fileReport.path] = fileReport;
    });
  };

  const absoluteDirMap = {};

  Object.keys(relativeDirMap).forEach(key => {
    const newKey = virDir.path + key;
    const mappedReport = relativeDirMap[key];
    absoluteDirMap[newKey] = mappedReport;
  });

  return absoluteDirMap;
};

const summarizeReports = (virDir) => {

  if (virDir.dirs) {
    virDir.dirs.forEach(subDirReport => {
      summarizeReports(subDirReport);
      if (subDirReport.report.status > virDir.report.status) {
        virDir.report.status = subDirReport.report.status
      };
    });
  };

  if (virDir.report.files) {
    virDir.report.files.forEach(fileReport => {
      fileReport.status = fileReport.logs
        .reduce((greatest, next) => next.status > greatest
          ? next.status : greatest, 0);
      if (fileReport.status > virDir.report.status) {
        virDir.report.status = fileReport.status
      };
    });
  };

};




module.exports = {
  addEmptyReports,
  generateReportMap,
  summarizeReports
}
