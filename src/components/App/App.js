import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Registration from '../../containers/Registration/Registration';
import Login from '../../containers/Login/Login';
import SprintPage from '../../containers/Sprint/Sprint';
import styles from './App.module.css';
import ProjectPage from '../../containers/ProjectPage/ProjectPage';
import Projects from '../../containers/Projects/Projects.js';
import ProjectSidebar from '../../components/ProjectSidebar/ProjectSidebar';
import ModalSidebar from '../ModalSidebar/ModalSidebar';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ModalSidebar><h2>Test</h2></ModalSidebar>
        <Header /> {/* <ProjectPage /> */} {/* <Projects /> */}
        {/* <SprintPage /> */} {/* <Registration /> */} {/* <Login /> */}
        {/*<ProjectSidebar />*/}
        <Switch>
          <Route path="/projects/:projectId/sprints" component={SprintPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

// http://localhost:3000/projects/project/sprints?sprint=1
// /projects/:projecId/sprints/:sprintId
// projects/123123jdkfajfka/sprints/fjkaojks123?search=task
