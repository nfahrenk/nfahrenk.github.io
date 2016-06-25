var PhoneScreenshot = React.createClass({
  render: function() {
    return (
      <div class="mobile-embed">
        <img src={this.props.img.src} id={this.props.img.id}>
        <i class="fa fa-stop-circle-o homebutton" aria-hidden="true"></i>
      </div>
    );
  }
});

var WebappScreenshot = React.createClass({
  render: function() {
    return (
      <div class="webapp-embed">
        <div class="webapp-nav">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
          <i class="fa fa-minus-circle" aria-hidden="true"></i>
          <i class="fa fa-plus-circle" aria-hidden="true"></i><br>
        </div>
        <img src={this.props.img.src} id={this.props.img.id}>
        <div class="webapp-bottom">
          <i class="fa fa-apple" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
});

var Screenshot = React.createClass({
  render: function() {
    if (this.props.project.type == "mobile") {
      var content = <PhoneScreenshot img={this.props.project.img};
    } else if (this.props.project.type == "webapp") {
      var content = <WebappScreenshot img={this.props.project.img};
    } else {
      var content = <img src={this.props.img.src} id={this.props.img.id}>;
    }
    return (
      <div class="large-6 medium-6 small-12 columns">
        {content}
      </div>
    );
  }
});

var ProjectBlurb = React.createClass({
  render: function() {
    var subtitle = this.props.project.wonAward ?
      this.props.project.subtitle :
      <i class="fa fa-trophy" aria-hidden="true"></i>
      { this.props.project.subtitle };

    return (
      <div class="large-6 medium-6 small-12 columns">
        <h2>{this.props.project.name}</h2>
        <h3>
          {subtitle}
        </h3>
        <div class="row">
          <div class="large-6 medium-6 small-12 columns">
            -<br>
            <p>ABOUT</p>
            <p>
              {this.props.project.about}
            </p>
          </div>
          <div class="large-6 medium-6 small-12 columns">
            -<br>
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
    this.props.projects.forEach(function(ndx, project) {
      if (ndx % 2 == 0) {
        rows.push(
          <div class="row project">
            <ProjectBlurb project={project} />
            <Screenshot project={project} />
          </div>
        );
      } else {
        rows.push(
          <div class="row project">
            <Screenshot project={project} />
            <ProjectBlurb project={project} />
          </div>
        );
      }
    });
    return (
      <div id="projects">
        {rows}
        <div class="row project">
          <h3>I have also participated in Bloomberg Code B, the Google Games,
          and other coding events. I like Hackathons...</h3>
        </div>
      </div>
    );
  }
})
