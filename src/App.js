import './App.css';

import { useState } from "react";

import HeaderBar from './components/HeaderBar';
import Introduction from './components/Introduction';
import PageWrapper from './components/PageWrapper';
import Thing from './components/Thing';
import Things from './components/Things';
import Footer from './components/Footer';

import things from './data/things'


function App()
{
  const [selectedCategories, setSelectedCategories] = useState(
    {
      hearing: false,
      vision: false,
      neurodiversity: false,
      mobility: false
    }
  )

  const [selectedPlatform, setSelectedPlatform] = useState('any')


  return (
    <div className="App">

      <HeaderBar
        onChangeCategory={(category, event) => 
        {
          console.log(category, event)

          setSelectedCategories(prevState => (
            {
              ...prevState,
              [category]: event,
            }
          ))
        }
        }
        onChangePlatform={(event) => 
        {
          console.log(event)
        }
        }
      />

      <PageWrapper>

        <Introduction />

        <Things>

          {things.filter(
            thing => thing.categories.includes()

          )

            .map((thing, index) => (

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
