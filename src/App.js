import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './reducer'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

const mapStateToProps = (state) => ({
  projects: state.projects
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }

// not where you want to place your data
// use a lifecycle method
// which fires up everytime this component is rerendered (take note of this point, and how to effectively put in the functions
// that change props)

// like this...
  // componentWillMount() {
  //   this.setState({projects: [
  //     {
  //       title: 'Business Website',
  //       category: 'Web Design'
  //     },
  //     {
  //       title: 'Social App',
  //       category: 'Mobile Development'
  //     },
  //     {
  //       title: 'Ecommerce Shopping Cart',
  //       category: 'Web Development'
  //     }
  //   ]});
  // }

  handleAddProject(project) {
    // console.log(project);
    // state is updated, never changed
    // let projects = this.state.projects;
    // projects.push(project);
    // this.setState(projects: projects);

    // using redux
    const {dispatch} = this.props;
    dispatch(actionCreators.add(project));
  }

  handleDeleteProject(id) {
    const {dispatch} = this.props;
    dispatch(actionCreators.remove(id));
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

// <Projects projects={this.state.projects}/> this creates a new state attribute that somehow gets sent to props (???)
// anyway, using this mechanism allows you to send params to different components (via this.props) as well as save them in the state

export default connect(mapStateToProps)(App);
