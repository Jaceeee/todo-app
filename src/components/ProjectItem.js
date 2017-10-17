import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} > X</a>
      </li>
    );
  }
}

// Projects.propTypes = {
//   project: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

// propTypes = {
//   project: deprecate(PropTypes.object, 'Undefined.'),
//   onDelete: deprecate(PropTypes.func, 'Undefined.')
// }

export default ProjectItem;
