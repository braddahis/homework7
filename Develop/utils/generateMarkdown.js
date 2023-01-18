// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=="NONE"){
    return`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }
  return"";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
function renderTitle(title) {
  return`Super Cool ReadME.md generator`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderTitle(data.title)}
  #Title ${data.title}
  #GitHub ${data.github}
  ${renderLicenseBadge(data.license)}
  #Description ${data.description}
  #Installation ${data.installation}
  #Contributing ${data.contributing}
  #Test ${data.test}
  #TableOfContents ${data.TableOfContents}
  #Questions ${data.questions}
  #Email ${data.email}

`;
}

module.exports = generateMarkdown;
