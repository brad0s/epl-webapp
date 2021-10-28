import GoalScorers from './components/GoalScorers';
import Header from './components/Header';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import GOALSCORERS_DATA from '../src/data/scorers';
import STANDINGS_DATA from '../src/data/standings';
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="MainContent">
        <Standings data={STANDINGS_DATA} />
        <GoalScorers data={GOALSCORERS_DATA} />
        <Fixtures />
      </section>
    </div>
  );
}

export default App;
