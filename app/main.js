var React = require('react');
var ReactDOM = require('react-dom');

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
    console.log(this.props.project.type);
    if (this.props.project.type === "mobile") {
      var content = <PhoneScreenshot img={this.props.project.img}/>;
    } else if (this.props.project.type === "webapp" || this.props.project.type === "desktopapp") {
      var content = <WebappScreenshot img={this.props.project.img}/>;
    } else {
      var content = <img src={this.props.img.src} id={this.props.img.id}/>;
    }
    return (
      <div className="large-6 medium-6 small-12 columns">
        {content}
      </div>
    );
  }
});

var ProjectBlurb = React.createClass({
  render: function() {
    var subtitle = this.props.project.wonAward ?
      <h3><i className="fa fa-trophy" aria-hidden="true"></i>
      &nbsp;{this.props.project.description}</h3> :
      <h3>{this.props.project.description}</h3>;

    return (
      <div className="large-6 medium-6 small-12 columns">
        <h2>{this.props.project.name}</h2>
        {subtitle}
        <div className="row">
          <div className="large-6 medium-6 small-12 columns">
            -<br/>
            <p>ABOUT</p>
            <p>
              {this.props.project.about}
            </p>
          </div>
          <div className="large-6 medium-6 small-12 columns">
            -<br/>
            <p>TOOLS</p>
            <p>
              {this.props.project.tools}
            </p>
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
      if (ndx % 2 == 0) {
        rows.push(
          <div className="row project" key={project.img.id}>
            <ProjectBlurb project={project} />
            <Screenshot project={project} />
          </div>
        );
      } else {
        rows.push(
          <div className="row project" key={project.img.id}>
            <Screenshot project={project} />
            <ProjectBlurb project={project} />
          </div>
        );
      }
      ndx++;
    });
    return (<div id="projects">{rows}</div>);
  }
});

var JobBlurb = React.createClass({
  render: function() {
    var rows = [];
    var counter = 0;
    this.props.job.accomplishments.forEach(function(sentence) {
      rows.push(<p key={counter}>{sentence}</p>);
      counter++;
    });
    if (this.props.job.extra !== undefined && this.props.job.extra !== null) {
      return (
        <div className="row resume-row">
          <div className="large-10 columns">
            <div className="row">
              <div className="large-8 small-12 columns">
                <h5>{this.props.job.company}</h5>
                <h5>{this.props.job.position}</h5>
              </div>
              <div className="large-4 small-12 columns right-info">
                {this.props.job.startDate.toString()} ~ {this.props.job.endDate.toString()}
              </div>
            </div>
            {rows}
          </div>
          <div className="large-2 columns">
            <h6 className="rotate">
              <a href={this.props.job.extra.link} target="_blank">
                {this.props.job.extra.text}
              </a>
            </h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="job-listing resume-row">
          <div className="row">
            <div className="large-8 small-12 columns">
              <h5>{this.props.job.company}</h5>
              <h5>{this.props.job.position}</h5>
            </div>
            <div className="large-4 small-12 columns right-info">
              {this.props.job.startDate.toString()} ~ {this.props.job.endDate.toString()}
            </div>
          </div>
          {rows}
        </div>
      );
    }
  }
});

var JobListings = React.createClass({
  render: function() {
    var rows = [];
    var counter = 0;
    this.props.jobs.forEach(function(job) {
      rows.push(<JobBlurb job={job} key={counter}/>);
      counter++;
    });
    return (<div id="jobs">{rows}</div>);
  }
});

var SkillBlurb = React.createClass({
  render: function() {
    if (this.props.skill.extra !== undefined && this.props.skill.extra !== null) {
      return (
        <div className="skill row">
          <div className="large-10 columns">
            <h5>{this.props.skill.title.toUpperCase()}</h5>
            <p>{this.props.skill.description}</p>
          </div>
          <div className="large-2 columns">
            <h6 className="rotate">
              <a href={this.props.skill.extra.link} target="_blank">
                {this.props.skill.extra.text}
              </a>
            </h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="skill">
          <h5>{this.props.skill.title.toUpperCase()}</h5>
          <p>{this.props.skill.description}</p>
        </div>
      );
    }
  }
});

var SkillListings = React.createClass({
  render: function() {
    var rows = [];
    var counter = 0;
    this.props.skills.forEach(function(skill) {
      rows.push(<SkillBlurb skill={skill} key={counter}/>);
      counter++;
    });
    return (<div id="skills">{rows}</div>);
  }
});

var SKILLS = [
  {
    title: "languages",
    description: "English, Mandarin Chinese - Conversational"
  },
  {
    title: "programming languages",
    description: "Python, PL/SQL, HTML, SASS/CSS, Javascript/JQuery, Java, C++, Matlab, R, Powershell, VHDL"
  },
  {
    title: "programming techniques",
    description: "MPI Threads, PThreads, OpenGL"
  },
  {
    title: "front-end web development",
    description: "Bourbon.io/Neat/Bitters, JQuery, Zurb Foundation, React.js, Ember.js"
  },
  {
    title: "back-end web development",
    description: "Django, Parse, MongoDB, SQL"
  },
  {
    title: "digital signal processing",
    description: "Sampling and Aliasing, Discrete Time Signals and Systems, Fourier Transforms, Z-Transform, Digital Filters"
  },
  {
    title: "cleanroom experience",
    description: "Manufactured System-in-Package Substrate Using Photolithographic Processes",
    extra: {
      link: "documents/substrate.pdf",
      text: "Check out the Process!"
    }
  },
  {
    title: "digital systems",
    description: "Finite State Machines, Sequential and Combination Logic Circuits, Instruction Set Architectures, Microcode"
  },
  {
    title: "circuit design",
    description: "Oscillators, First & Second Order Filters, Half & Full Wave Rectifiers"
  },
  {
    title: "electrical energy systems",
    description: "Renewable Energy Modeling (Hydroelectric, Solar, Wind), Energy Storage, Three Phase Rectifiers, Buck Converters"
  },
  {
    title: "software",
    description: "Excel (including VBA Macros), NI Labview, LaTeX, MAX Collect & Analyze, MathCad, LTSpice, NI Multisim"
  },
  {
    title: "instrumentation",
    description: "NI myDAQ, ARM mbed, Oscilloscope, Soldering Iron"
  }
];

var JOBS = [
  {
    company: "Texas Instruments",
    startDate: new Date("May 31, 2016"),
    endDate: new Date("August 12, 2016"),
    position: "Demand Creation Development Intern",
    accomplishments: [
      "Used PL/SQL and Javascript to secure documents for upload/download and export with the correct confidential level",
      "Worked on development of internal sales tool for project portfolio management",
      "Discovered and fixed a security flaw in an internal sales tool that was not caught in a recent security audit"
    ]
  },
  {
    company: "Stackfolio LLC",
    startDate: new Date("May 16, 2015"),
    endDate: new Date("May 29, 2016"),
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
    position: "Software Engineer",
    accomplishments: [
      "Processed natural language baseball play-by-play information in Java and stored the results in a MySQL database",
      "Used Java to predict the outcome of baseball games by setting up a monte carlo simulation weighted by a genetic algorithm to anticipate the progression of plays",
      "Developed model in R using metrics from collaboration with a sabermetrician"
    ]
  },
  {
    company: "Global Learning Center",
    startDate: new Date("October 22, 2014"),
    endDate: new Date("December 12, 2014"),
    position: "IT Intern",
    accomplishments: [
      "Used Powershell and Active Directory to automate connecting users to the nearest printer"
    ]
  }
]

var PROJECTS = [
  {
    name: "Babelboard",
    startDate: new Date("September 19, 2014"),
    endDate: new Date("September 21, 2014"),
    type: "mobile",
    wonAward: true,
    description: "Won best iOS app by Apple at HackGT.",
    img: {
      id: "babelboard-1",
      src: "images/babelboard.jpg"
    },
    about: "This keyboard allows you to perform simple calculations and translations from the keyboard.",
    tools: "Created in Swift the week that Swift was released to developers."
  },
  {
    name: "Be Heard",
    startDate: new Date("April 10, 2015"),
    endDate: new Date("April 12, 2015"),
    type: "webapp",
    wonAward: true,
    description: "Won 2nd most ambitious hack by AppCow at Bitcamp.",
    img: {
      id: "beheard-1",
      src: "images/beheard.jpg"
    },
    about: "This webapp quantifies the number of positive, negative, and neutral tweets regarding active bills in congress. Once a certain threshold of activity is met, the app reaches out to the appropriate congress member on behalf of the constituents to set up a live forum.",
    tools: "Created using Django and PostgreSQL on the back-end, Bourbon.io on the front-end."
  },
  {
    name: "Fly with Friends",
    startDate: new Date("September 25, 2015"),
    endDate: new Date("September 27, 2015"),
    type: "webapp",
    wonAward: false,
    description: "Entered into HackGT.",
    img: {
      id: "flywithfriends-1",
      src: "images/flywithfriends.png"
    },
    about: "This webapp analyzes your Facebook profile information (including likes, events, and about) to optimally seat people on a plane. An hour before the flight, you are notified of a unique interest shared between you and the person seated next to you.",
    tools: "Created using Django and PostgreSQL on the back-end, and interacts with Facebook API, Wolfram Alpha API, and Sabre API for user, population, and seat layout information respectively."
  },
  {
    name: "Matlab Shader",
    startDate: new Date("November 20, 2013"),
    endDate: new Date("December 05, 2013"),
    type: "desktopapp",
    wonAward: false,
    description: "Project for introductory Matlab course.",
    img: {
      id: "matlabshader-1",
      src: "images/matlabshader.png"
    },
    about: "This application randomly generates a layout of tree stumps. The user can click anywhere on the application to set the light source, and the shader will appropriately recalculate lighting taking into account the tree stump's normal map.",
    tools: "Created from scratch in Matlab."
  }
]

ReactDOM.render(
  <ProjectListings projects={PROJECTS} />,
  document.getElementById('project-listings')
);

ReactDOM.render(
  <JobListings jobs={JOBS} />,
  document.getElementById('job-listings')
);
