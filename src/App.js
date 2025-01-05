import './App.css';
import './css/custom.css';
import SkillView from './components/section/skills/SkillsView';
import ProjectView from './components/section/project/ProjectView';
import AboutView from './components/section/about/AboutView';
import Home from './components/common/home/Home';


function App() {
  return (
    <>
      <Home />
      <ProjectView />
      <AboutView />
      <SkillView />
    </>
  );
}

export default App;
