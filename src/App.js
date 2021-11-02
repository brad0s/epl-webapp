import GoalScorers from './components/GoalScorers';
import Header from './components/Header';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import '../src/styles/main.scss';

import { SoccerContextProvider } from './context/context';

function App() {
  return (
    <SoccerContextProvider>
      <div className="App">
        <Header />
        <main id="MainContent">
          <Standings />
          <GoalScorers />
          <Fixtures />
        </main>
      </div>
    </SoccerContextProvider>
  );
}

export default App;
