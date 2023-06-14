const { mergeHTMLReports } = require("playwright-merge-html-reports");

const inputReportPaths = [
  process.cwd() + "/playwright-report-chromium",
  process.cwd() + "/playwright-report-firefox",
  process.cwd() + "/playwright-report-webkit"
];

const config = {
  outputFolderName: "merged-html-report", // default value
  outputBasePath: process.cwd() // default value
}

mergeHTMLReports(inputReportPaths, config)
