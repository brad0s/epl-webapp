import GoalScorers from './components/GoalScorers';
import Header from './components/Header';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import Footer from './components/Footer';
import '../src/styles/main.scss';

import { SoccerContextProvider } from './context/context';

function App() {
  return (
    <SoccerContextProvider>
      <div className="App">
        <Header />
        <main id="MainContent">
          <Standings />
          <Fixtures />
          <GoalScorers />
        </main>
        <Footer />
      </div>
    </SoccerContextProvider>
  );
}

export default App;
