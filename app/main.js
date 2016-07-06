var React = require('react');
var ReactDOM = require('react-dom');

var SKILLS = [
  { type: "experience", name: "Web Development", id: "webdev" },
  { type: "experience", name: "App Development", id: "appdev" },
  { type: "experience", name: "Data Science", id: "datascience" },
  { type: "framework", name: "Django", id: "django" },
  { type: "language", name: "Python", id: "python" },
  { type: "language", name: "Swift", id: "swift" },
  { type: "language", name: "SQL", id: "sql" },
  { type: "language", name: "NoSQL", id: "nosql" },
  { type: "language", name: "R", id: "rlang" },
  { type: "language", name: "Java", id: "java" },
  { type: "language", name: "Matlab", id: "matlab" }
];

var JOBS = [
  {
    company: "Texas Instruments",
    startDate: new Date("May 31, 2016"),
    endDate: new Date("August 12, 2016"),
    experiences: ["webdev"],
    frameworks: [],
    languages: ["java", "sql"],
    position: "Demand Creation Development Intern",
    accomplishments: [
      "Secured documents for upload/download and export with the correct confidential level",
      "Worked on development of internal sales tool for project portfolio management",
      "Discovered and fixed a security flaw in an internal sales tool that was not caught in a recent security audit"
    ]
  },
  {
    company: "Stackfolio LLC",
    startDate: new Date("May 16, 2015"),
    endDate: new Date("May 29, 2016"),
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "nosql"],
    position: "Full-stack Web Developer",
    accomplishments: [
      "Developed a marketplace and transaction platform mirroring that facilitated by brokerage firms for banks to buy and sell loan packages",
      "Integrated Docusign API to handle non-disclosure and transaction agreements on the platform",
      "Rewrote UBPR data portal from scratch which lead to an 80% improvement in load time",
      "Implemented group chat and notification system for progression through the transaction process on a Python/Twisted server",
      "Mentored by Tech Square Labs (a Google for Entrepreneurs incubator) on the business side of being in a startup"
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
      "Performed data analysis in R that found that the original targets of Executive Order 13693 were not ambitious enough to meet its mission and helped rework the document to include more appropriate targets",
      "Developed data forecasts used in presentations with federal agencies to support why the targets were selected",
      "Automated the process of converting excel documents submitted by government agencies into that needed by OMB MAX Analytics",
      "Orchestrated and engaged in meetings between managers of government agencies and myself"
    ],
    extra: {
      text: "Check out the Executive Order!",
      link: "https://www.whitehouse.gov/the-press-office/2015/03/19/executive-order-planning-federal-sustainability-next-decade"
    }
  },
  {
    company: "Georgia Institute of Technology",
    startDate: new Date("January 06, 2014"),
    endDate: new Date("December 12, 2014"),
    experiences: [],
    frameworks: [],
    languages: ["matlab"],
    position: "CS 1371 (Matlab) Teacher's Assistant",
    accomplishments: [
      "Planned and taught undergraduate engineers a 90-minute recitation each week",
      "Wrote, proctored, and graded students’ examinations",
      "Held office hours to help students with homework and the material taught in class"
    ]
  },
  {
    company: "Northfield Trading Company",
    startDate: new Date("February 06, 2012"),
    endDate: new Date("August 09, 2013"),
    experiences: ["datascience"],
    frameworks: [],
    languages: ["java", "rlang", "sql"],
    position: "Software Engineer",
    accomplishments: [
      "Processed natural language baseball play-by-play information in Java and stored the results in a MySQL database",
      "Used Java to predict the outcome of baseball games by setting up a monte carlo simulation weighted by a genetic algorithm to anticipate the progression of plays",
      "Developed model in R using metrics from collaboration with a sabermetrician"
    ]
  }
]

var PROJECTS = [
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
  },
  {
    name: "Fly with Friends",
    startDate: new Date("September 25, 2015"),
    endDate: new Date("September 27, 2015"),
    type: "webapp",
    experiences: ["webdev"],
    frameworks: ["django"],
    languages: ["python", "sql"],
    wonAward: false,
    description: "Entered into HackGT.",
    img: {
      id: "flywithfriends-1",
      src: "images/flywithfriends.png"
    },
    about: "This webapp analyzes your Facebook profile information (including likes, events, and about) to optimally seat people on a plane. An hour before the flight, you are notified of a unique interest shared between you and the person seated next to you.",
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
  }
]

var skillIdToName = function(id) {
  var name;
  SKILLS.forEach(function(skill) {
    if (skill.id === id) {name = skill.name;}
  });
  return name;
};

var getFormattedDate = function(d) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  return monthNames[d.getMonth()] + " " + d.getFullYear();
};

var timeLookup = {
  "high school": [new Date("August 15, 2009"), new Date("August 14, 2013")],
  "freshman": [new Date("August 15, 2013"), new Date("August 14, 2014")],
  "sophomore": [new Date("August 15, 2014"), new Date("August 14, 2015")],
  "present": [new Date("August 15, 2015"), new Date("August 14, 2017")]
};

var shouldDisplay = function(proj, tagState, lowertime, uppertime) {
  var hasFound = false;
  for (var property in tagState) {
      if (tagState.hasOwnProperty(property) && tagState[property]) {
          hasFound = true;
      }
  }
  // If no tag selected, display all results
  if (!hasFound && lowertime === "high school" && uppertime === "present") {
    return true;
  }
  if (proj.startDate < timeLookup[lowertime][0]
    || proj.endDate > timeLookup[uppertime][1]) {

    return false;
  } else if (!hasFound) {
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

    // Only display frameworks if given
    var tools = frameworks.length > 0 ?
      <div className="tagGroups">
        <div className="project-frameworks"><p>FRAMEWORKS</p>{frameworks}</div>
        <div className="project-languages"><p>LANGUAGES</p>{languages}</div>
      </div> :
      <div className="project-languages"><p>LANGUAGES</p>{languages}</div>;

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
          </div>
          <div className="large-6 medium-6 small-12 columns">
            -<br/>
            {tools}
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
        <div className={shouldDisplay(project, this.props.tagState, this.props.lowertime, this.props.uppertime) ? "row project is-visible" : "row project is-hidden"} key={project.img.id}>
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
      rows.push(<JobBlurb job={job} isVisible={shouldDisplay(job, this.props.tagState, this.props.lowertime, this.props.uppertime)} key={counter}/>);
      counter++;
    }.bind(this));
    return (<div id="jobs">{rows}</div>);
  }
});

var TimelineFilter = React.createClass({
  handleChange: function(event) {
    this.props.changeTime(
      this.refs.ltime.innerText,
      this.refs.utime.innerText
    );
  },
  render: function() {
    return (
      <div className="row filter-section timeline-section">
        <p>Timeline:</p>
        <div id="timeline-filter">
          <div className="large-2 medium-2 small-2 columns">
            <span id="lower-timeline" ref="ltime">high school</span>
          </div>
          <div className="large-8 medium-8 small-8 columns" onBlur={this.handleChange}>
            <div id="timeline-slider"></div>
          </div>
          <div className="large-2 medium-2 small-2 columns">
            <span id="upper-timeline" ref="utime">present</span>
          </div>
        </div>
      </div>
    );
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
      <div id="filters" className="large-6 medium-6 small-12 columns">
        <div className="row"><b>Use the fields below to filter the results!</b></div>
        <TimelineFilter
          changeTime={this.props.changeTime}
          lowertime={this.props.lowertime}
          uppertime={this.props.uppertime}
        />
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
    var out = {
      "lowertime": "high school",
      "uppertime": "present"
    };
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
  changeTime: function(ltime, utime) {
    this.setState({"lowertime": ltime});
    this.setState({"uppertime": utime});
  },
  render: function() {
    var tagState = {};
    this.props.skills.forEach(function(elem) {
      tagState[elem.id] = this.state[elem.id];
    }.bind(this));
    return (
      <div id="filterable-content">
        <div className="row" id="about">
          <div className="large-6 medium-6 small-12 columns bio">
            <h2>Hi, I Am...</h2>
            <p>
              A <span className="highlight">senior</span> at &nbsp;
              <span className="highlight">Georgia Institute of Technology</span>
              &nbsp;with a <span className="highlight">3.68 GPA</span>
              &nbsp;and 1 of 150 people in the <span className="highlight">Honors Program</span>.
              I am pursuing a bachelors degree in <span className="highlight">Electrical Engineering</span>,
              with a minor in Mandarin Chinese.
              Through Georgia Tech, I have studied business-specific Mandarin Chinese
              for eight weeks at Shanghai Jiaotong University,
              and was 1 of 2 people selected to receive a stipend to intern
              with the federal government in Washington DC. I have participated in
              all kinds of hackathons including Bloomberg Code B, Google Games, HackGT, and Bitcamp!
            </p>
            <a href="documents/resume.pdf" id="download-resume" download>
              <i className="fa fa-download" aria-hidden="true"></i> Download Resume
            </a>
          </div>
          <SkillListings skills={this.props.skills} tagState={tagState}
            lowertime={this.state.lowertime} uppertime={this.state.uppertime}
            toggleTag={this.toggleTag} changeTime={this.changeTime}/>
        </div>
        <ProjectListings projects={this.props.projects} tagState={tagState}
          lowertime={this.state.lowertime} uppertime={this.state.uppertime} />
        <JobListings jobs={this.props.jobs} tagState={tagState}
          lowertime={this.state.lowertime} uppertime={this.state.uppertime} />
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent skills={SKILLS} projects={PROJECTS} jobs={JOBS} />,
  document.getElementById('filterable-content')
);
