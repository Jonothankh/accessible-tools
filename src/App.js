import './App.css';
import HeaderBar from './components/HeaderBar';
import Introduction from './components/Introduction';
import PageWrapper from './components/PageWrapper';
import Thing from './components/Thing';
import Things from './components/Things';
import Footer from './components/Footer';

import things from './data/things'


function App()
{

  return (
    <div className="App">

      <HeaderBar />

      <PageWrapper>

        <Introduction />

        <Things>

          {things.map((thing, index) => (

            <Thing

              key={"thing_" + index}

              categories={thing.categories}
              image={thing.image}
              title={thing.title}
              description={thing.description}
              platformSupport={thing.platformSupport}
              stack={thing.stack}
              links={thing.links}

            />

          ))}

        </Things>

        <Footer />

      </PageWrapper>

    </div>
  );
}

export default App;
