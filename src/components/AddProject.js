import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor() {
      super();
      this.state = {
        newProject:{}
      }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === '') {
      alert('Title is required');
    } else {
        this.setState({newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }}, function(){
          // console.log(this.state);
          this.props.addProject(this.state.newProject);
        });
    }

    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category} </option>
    });
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// AddProjects.propTypes = {
//   categories: React.PropTypes.array,
//   addProject: React.PropTypes.func
// }

// propTypes = {
//   categories: deprecate(PropTypes.array, 'Undefined.'),
//   addProject: deprecate(PropTypes.func, 'Undefined.')
// }
export default AddProjects;
