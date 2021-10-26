import '../src/styles/main.scss';
import GoalScorers from './components/GoalScorers';
import Header from './components/Header';
import Standings from './components/Standings';
import GOALSCORERS_DATA from '../src/data/scorers';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="main-content">
        <Standings />
        <GoalScorers data={GOALSCORERS_DATA} />
      </section>
    </div>
  );
}

export default App;
