var React = require('react');
var ReactDOM = require('react-dom');

var SKILLS = [
  { type: "experience", name: "Web Development", id: "webdev" },
  { type: "experience", name: "App Development", id: "appdev" },
  { type: "experience", name: "Hardware", id: "hardware" },
  { type: "experience", name: "Data Science", id: "datascience" },
  { type: "framework", name: "Django", id: "django" },
  { type: "framework", name: "AWS Lambda", id: "lambda" },
  { type: "language", name: "Python", id: "python" },
  { type: "language", name: "Swift", id: "swift" },
  { type: "language", name: "SQL", id: "sql" },
  { type: "language", name: "MongoDB", id: "mongodb" },
  { type: "language", name: "DynamoDB", id: "dynamodb" },
  { type: "language", name: "R", id: "rlang" },
  { type: "language", name: "Java", id: "java" },
  { type: "language", name: "Matlab", id: "matlab" }
];

var JOBS = [
  {
    company: "Yelp",
    startDate: new Date("August 11, 2017"),
    endDate: new Date("July 17, 2018"),
    experiences: ["webdev"],
    frameworks: [],
    languages: ["java", "sql"],
    position: "Part-time Software Engineer",
    accomplishments: [
      "Wrote highly performant database triggers for screenshotting data and field assignment",
      "Coded batches that process tens of thousands of records daily"
    ]
  },
  {
    company: "Yelp",
    startDate: new Date("May 22, 2017"),
    endDate: new Date("August 11, 2017"),
    experiences: ["webdev"],
    frameworks: [],
    languages: ["java", "sql"],
    position: "Software Engineering Intern",
    accomplishments: [
      "Rewrote external API client from scratch which reduced the time to get results for a single day from 1 minute 55 seconds to 3 seconds and the number of calls from 3 + 3 * N to 4 (where N is the number of results, usually in the order of tens)",
      "Completely redesigned two web pages: one for registering advertisers for orientation, the other for displaying orientation information including who attended, questions each person asked, and responses to surveys",
      "Proposed and implemented complete automation of importing data from external source, which previously required some manual interaction daily"
    ]
  },
  {
    company: "Stackfolio LLC",
    startDate: new Date("May 16, 2015"),
    endDate: new Date("December 1, 2016"),
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "mongodb"],
    position: "Full-stack Web Developer",
    accomplishments: [
      "Developed marketplace in Django for banks to buy and sell loan packages mirroring the process facilitated by brokerage firms",
      "Optimized data portal which lead to an 80% improvement in load time",
      "Implemented group chat and notification system for progression through transaction process on a Python/Twisted server",
      "Fully automated FFIEC call report and UBPR data collection and created web portal to manage these processes",
      "Engaged with seasoned entrepreneurs from Tech Square Labs (a Google for Entrepreneurs incubator) on business strategy",
      "Integrated Docusign API to handle non-disclosure and transaction agreements on the platform"

    ]
  },
  {
    company: "Texas Instruments",
    startDate: new Date("May 31, 2016"),
    endDate: new Date("August 12, 2016"),
    experiences: ["webdev"],
    frameworks: [],
    languages: ["java", "sql"],
    position: "Demand Creation Development Intern",
    accomplishments: [
      "Resolved high priority issues discovered in security audit related to classified internal documents",
      "Worked on development of internal sales tool for project portfolio management",
      "Helped on proof of concept Apache Spark product recommendations engine",
      "Discovered and fixed a security flaw that could be exploited to execute malicious SQL queries"
    ]
  },
  {
    company: "White House Council on Environmental Quality",
    startDate: new Date("January 12, 2015"),
    endDate: new Date("May 01, 2015"),
    experiences: ["datascience"],
    frameworks: [],
    languages: ["rlang"],
    position: "Data Analyst Intern",
    accomplishments: [
      "Performed data analysis in R that found that the original targets of Executive Order 13693 (which was signed by President Obama) were not ambitious enough to meet its mission",
      "Suggested more appropriate targets to be used on the Executive Order",
      "Helped write a section of the Executive Order’s implementing instructions on the mathematical basis for the proposed reductions",
      "Developed data forecasts for use by CEQ leadership to make the case for change across federal agencies",
      "Automated the process of converting Excel-based documents government agency submissions into the format needed by online tool",
      "Orchestrated meetings with managers of transportation-focused teams inside the federal government to explore the feasibility of the reductions proposed in the executive order and to focus on new legislation from having an increased number of electric vehicles"
    ],
    extra: {
      text: "Check out the Executive Order!",
      link: "https://www.whitehouse.gov/the-press-office/2015/03/19/executive-order-planning-federal-sustainability-next-decade"
    }
  },
  {
    company: "CS 1371 Computing for Engineers (Matlab)",
    startDate: new Date("January 06, 2014"),
    endDate: new Date("December 12, 2014"),
    experiences: [],
    frameworks: [],
    languages: ["matlab"],
    position: "Teacher's Assistant",
    accomplishments: [
      "Planned and taught undergraduate engineers a 90-minute recitation weekly",
      "Wrote, proctored, and graded students’ examinations every three weeks",
      "Hosted weekly office hours to help students with homework and the material taught in class"
    ]
  }
]

var PROJECTS = [
  {
    name: "Aquasource",
    startDate: new Date("Oct 21, 2016"),
    endDate: new Date("Oct 23, 2016"),
    type: "mobile",
    experiences: ["appdev", "hardware"],
    frameworks: ["lambda"],
    languages: ["swift", "dynamodb"],
    wonAward: true,
    description: "Overall 1st place from HackGSU and best hack from Mapquest.",
    img: {
      id: "aquasource-1",
      src: "images/aquasource.png"
    },
    about: "This iPhone app lets users crowd-source water quality data on a map by interacting with a cheap spectrometer (constructed out of a phone + $10 of materials) that identifies the presence of contaminants in water sources.",
    links: []
  },
  {
    name: "WingIt",
    startDate: new Date("Sept 23, 2016"),
    endDate: new Date("Sept 25, 2016"),
    type: "webapp",
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "sql"],
    wonAward: true,
    description: "Won \"That’s So Cash Award of Awesomeness\" from HBK.",
    img: {
      id: "wingit-1",
      src: "images/wingit.png"
    },
    about: "This web app optimally seats people based on LinkedIn or unique shared Facebook likes and a service that analyzes twitter to determine a person’s mood to recommend an in-flight movie.",
    links: []
  },
  {
    name: "Publy",
    startDate: new Date("June 19, 2016"),
    endDate: new Date("July 28, 2016"),
    type: "webapp",
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "sql"],
    wonAward: false,
    description: "Entered into DIY with TI: Intern Edition.",
    img: {
      id: "publy-1",
      src: "images/publy.png"
    },
    about: "This web app display music, gender, age, and activity analytics about nearby bars. Gender and age information come from an API compatible with existing driver's license scanners and music data comes from a custom Beaglebone sensor hub.",
    links: [
      {"label": "View docs", "link": "https://e2e.ti.com/group/launchyourdesign/m/intern2016/666631"},
    ]
  },
  {
    name: "Babelboard",
    startDate: new Date("September 19, 2014"),
    endDate: new Date("September 21, 2014"),
    type: "mobile",
    experiences: ["appdev"],
    frameworks: [],
    languages: ["swift"],
    wonAward: true,
    description: "Won best iOS app by Apple at HackGT.",
    img: {
      id: "babelboard-1",
      src: "images/babelboard.jpg"
    },
    about: "This keyboard allows you to perform simple calculations and translations from the keyboard.",
    links: []
  },
  {
    name: "Be Heard",
    startDate: new Date("April 10, 2015"),
    endDate: new Date("April 12, 2015"),
    type: "webapp",
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "sql"],
    wonAward: true,
    description: "Won 2nd most ambitious hack by AppCow at Bitcamp.",
    img: {
      id: "beheard-1",
      src: "images/beheard.jpg"
    },
    about: "This webapp quantifies the number of positive, negative, and neutral tweets regarding active bills in congress. Once a certain threshold of activity is met, the app reaches out to the appropriate congress member on behalf of the constituents to set up a live forum.",
    links: []
  },
  {
    name: "Matlab Shader",
    startDate: new Date("November 20, 2013"),
    endDate: new Date("December 05, 2013"),
    type: "desktopapp",
    experiences: [],
    frameworks: [],
    languages: ["matlab"],
    wonAward: false,
    description: "Project for introductory Matlab course.",
    img: {
      id: "matlabshader-1",
      src: "images/matlabshader.png"
    },
    about: "This application randomly generates a layout of tree stumps. The user can click anywhere on the application to set the light source, and the shader will appropriately recalculate lighting taking into account the tree stump's normal map.",
    links: []
  }
]

var skillIdToName = function(id) {
  var name;
  SKILLS.forEach(function(skill) {
    if (skill.id === id) {name = skill.name;}
  });
  return name;
};

var lookupMonth = function(m) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  return monthNames[m];
}

var getFormattedDate = function(d) {
  return lookupMonth(d.getMonth()) + " " + d.getFullYear();
};

var getFormattedDateRange = function(d1, d2) {
  /**
  * d1 - start date

  */
  if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) {
    return getFormattedDate(d1);
  } else if (d1.getFullYear() === d2.getFullYear()) {

  } else if (d1.getMonth() === d2.getMonth()) {

  } else {
    return getFormattedDate(d1) + " - " + getFormattedDate(d2);
  }

}

var shouldDisplay = function(proj, tagState) {
  var hasFound = false;
  for (var property in tagState) {
      if (tagState.hasOwnProperty(property) && tagState[property]) {
          hasFound = true;
      }
  }
  // If no tag selected, display all results
  if (!hasFound) {
    return true;
  }

  // Check if it has any of the skill types
  hasFound = false;
  proj.experiences.concat(
    proj.frameworks).concat(
      proj.languages).forEach(function(elem) {
        if (tagState[elem]) { hasFound = true; }
      }.bind(this));
  return hasFound;
};

var PhoneScreenshot = React.createClass({
  render: function() {
    return (
      <div className="mobile-embed">
        <img src={this.props.img.src} id={this.props.img.id}/>
        <i className="fa fa-stop-circle-o homebutton" aria-hidden="true"></i>
      </div>
    );
  }
});

var WebappScreenshot = React.createClass({
  render: function() {
    return (
      <div className="webapp-embed">
        <div className="webapp-nav">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
          <i className="fa fa-minus-circle" aria-hidden="true"></i>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <img src={this.props.img.src} id={this.props.img.id}/>
        <div className="webapp-bottom">
          <i className="fa fa-apple" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
});

var Screenshot = React.createClass({
  render: function() {
    if (this.props.project.type === "mobile") {
      var content = <PhoneScreenshot img={this.props.project.img}/>;
    } else if (this.props.project.type === "webapp" || this.props.project.type === "desktopapp") {
      var content = <WebappScreenshot img={this.props.project.img}/>;
    } else {
      var content = <img src={this.props.img.src} id={this.props.img.id}/>;
    }
    return (
      <div className="large-6 medium-12 small-12 columns">
        {content}
      </div>
    );
  }
});

var ProjectBlurb = React.createClass({
  render: function() {
    // If project won an award
    var subtitle = this.props.project.wonAward ?
      <h3><i className="fa fa-trophy" aria-hidden="true"></i>
      &nbsp;{this.props.project.description}</h3> :
      <h3>{this.props.project.description}</h3>;

    // Generate experiences used tags
    var experiences = [];
    this.props.project.experiences.forEach(function(experience) {
      experiences.push(<span className="proj-tag" key={experience}>{skillIdToName(experience)}</span>);
    }.bind(this));

    // Generate frameworks used tags
    var frameworks = [];
    this.props.project.frameworks.forEach(function(framework) {
      frameworks.push(<span className="proj-tag" key={framework}>{skillIdToName(framework)}</span>);
    }.bind(this));

    // Generate languages used tags
    var languages = [];
    this.props.project.languages.forEach(function(language) {
      languages.push(<span className="proj-tag" key={language}>{skillIdToName(language)}</span>);
    }.bind(this));

    var tagGroups = [];
    if (experiences.length > 0) {
      tagGroups.push(<div className="project-experiences" key="experience"><p>EXPERIENCES</p>{experiences}</div>);
    }
    if (frameworks.length > 0) {
      tagGroups.push(< div className="project-frameworks" key="framework"><p>FRAMEWORKS</p>{frameworks}</div>);
    }
    if (languages.length > 0) {
      tagGroups.push(<div className="project-languages" key="language"><p>LANGUAGES</p>{languages}</div>);
    }

    var links = [];
    /*
    this.props.project.links.forEach(function(link) {
      links.push(<a href={link.link} className="button tiny" key={link.label}>{link.label}</a>);
    });
    */

    // Render the project
    return (
      <div className="large-6 medium-12 small-12 columns">
        <h2>{this.props.project.name}</h2>
        {subtitle}
        <div className="row">
          <div className="large-6 medium-6 small-12 columns">
            -<br/>
            <p>ABOUT</p>
            <p>{this.props.project.about}</p>
            {links.length > 0 ? links : null}
          </div>
          <div className="large-6 medium-6 small-12 columns">
            -<br/>
            {tagGroups}
          </div>
        </div>
      </div>
    );
  }
});

var ProjectListings = React.createClass({
  render: function() {
    var rows = [];
    var ndx = 0;
    this.props.projects.forEach(function(project) {
      rows.push(
        <div className={shouldDisplay(project, this.props.tagState) ? "row project is-visible" : "row project is-hidden"} key={project.img.id}>
          <ProjectBlurb project={project} />
          <Screenshot project={project} />
        </div>
      );
    }.bind(this));
    return (<div id="projects">{rows}</div>);
  }
});

var JobBlurb = React.createClass({
  render: function() {
    // Generate frameworks used tags
    var frameworks = [];
    this.props.job.frameworks.forEach(function(framework) {
      frameworks.push(<span className="proj-tag" key={framework}>{skillIdToName(framework)}</span>);
    }.bind(this));

    // Generate languages used tags
    var languages = [];
    this.props.job.languages.forEach(function(language) {
      languages.push(<span className="proj-tag" key={language}>{skillIdToName(language)}</span>);
    }.bind(this));

    // Generate paragraphs of accomplishments
    var rows = [];
    var counter = 0;
    this.props.job.accomplishments.forEach(function(sentence) {
      rows.push(<p key={counter}>{sentence}</p>);
      counter++;
    }.bind(this));
    var tags = frameworks.length > 0 ?
      (<div className="row">
        <div className="large-6 medium-6 small-12 columns">
          <p>LANGUAGES</p>
          {languages}
        </div>
        <div className="large-6 medium-6 small-12 columns">
          <p>FRAMEWORKS</p>
          {frameworks}
        </div>
      </div>) :
      (<div className="row">
        <div className="large-12 medium-12 small-12 columns">
          <p>LANGUAGES</p>
          {languages}
        </div>
      </div>);
    return (
      <div className={this.props.isVisible ? "row job is-visible" : "row job is-hidden"}>
        <div className="row">
          <div className="large-8 small-12 columns">
            <h3>{this.props.job.company}</h3>
            <h4>{this.props.job.position}</h4>
          </div>
          <div className="large-4 small-12 columns right-info">
            {getFormattedDate(this.props.job.startDate)} ~ {getFormattedDate(this.props.job.endDate)}
          </div>
        </div>
        {rows}
        {tags}
      </div>
    );
  }
});

var JobListings = React.createClass({
  render: function() {
    var rows = [];
    var counter = 0;
    this.props.jobs.forEach(function(job) {
      rows.push(<JobBlurb job={job} isVisible={shouldDisplay(job, this.props.tagState)} key={counter}/>);
      counter++;
    }.bind(this));
    return (<div id="jobs">{rows}</div>);
  }
});

var SkillListings = React.createClass({
  handleChange: function(event) {
    var stateProperty = event.target.id;
    this.props.toggleTag(
      stateProperty,
      !this.refs[stateProperty].checked
    );
  },
  render: function() {
    var tagLinks = {experience: [], language: [], framework: []};
    var tagInputs = {experience: [], language: [], framework: []};
    this.props.skills.forEach(function(exp) {
      tagLinks[exp.type].push(
        <span className={this.props.tagState[exp.id] ? "tag checked" : "tag"}
          id={exp.id}
          key={"span"+exp.id}
          onClick={this.handleChange}>
          {exp.name}
        </span>
      );
      tagLinks[exp.type].push(
        <input
          type="checkbox" className="is-hidden"
          ref={exp.id}
          key={"input"+exp.id}
          checked={this.props.tagState[exp.id]}
        />
      );
    }.bind(this));
    return (
      <div id="filters" className="large-8 large-offset-2 medium-10 medium-offset-1 small-12 columns">
        <div className="row">
          <p>Filter my projects and work experience!</p>
        </div>
        <div className="row filter-section">
          <p>Experience:</p>
          {tagLinks.experience}
          {tagInputs.experience}
        </div>
        <div className="row filter-section">
          <p>Frameworks:</p>
          {tagLinks.framework}
          {tagInputs.framework}
        </div>
        <div className="row filter-section">
          <p>Languages:</p>
          {tagLinks.language}
          {tagInputs.language}
        </div>
      </div>
    );
  }
});

var MainContent = React.createClass({
  getInitialState: function() {
    var out = {};
    this.props.skills.forEach(function(elem) {
      out[elem.id] = false;
    }.bind(this));
    return out;
  },
  toggleTag: function(tagName, tagValue) {
    this.setState(function(previousState, currentProps) {
      var out = {};
      out[tagName] = tagValue;
      return out;
    }.bind(this));
  },
  render: function() {
    var tagState = {};
    this.props.skills.forEach(function(elem) {
      tagState[elem.id] = this.state[elem.id];
    }.bind(this));
    return (
      <div id="filterable-content">
        <div className="row" id="about">
          <SkillListings skills={this.props.skills} tagState={tagState}
            toggleTag={this.toggleTag} />
        </div>
        <ProjectListings projects={this.props.projects} tagState={tagState}/>
        <JobListings jobs={this.props.jobs} tagState={tagState}/>
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent skills={SKILLS} projects={PROJECTS} jobs={JOBS} />,
  document.getElementById('filterable-content')
);
