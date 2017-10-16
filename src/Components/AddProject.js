import React, {Component} from 'react';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject:{}
    }
  }
  // set default props
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit (e) {
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  // what e.preventDefault() is for:
  // when we click submit, it won't display the log because what we're doing is actually
  // submitting a form. e.preventDefault prevents the form from actually submitting.

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
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
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

// can't use html5 syntax or there'll be an error

export default AddProject;
