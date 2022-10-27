import './App.css';

import { useState } from "react";

import HeaderBar from './components/HeaderBar';
import SearchInfo from './components/SearchInfo';
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

  const filteredItems = things.filter((thing) =>
    (selectedCategories.hearing ? thing.categories.includes("Hearing") : true)
    && (selectedCategories.vision ? thing.categories.includes("Vision") : true)
    && (selectedCategories.neurodiversity ? thing.categories.includes("Neurodiversity") : true)
    && (selectedCategories.mobility ? thing.categories.includes("Mobility") : true)
    && (selectedPlatform === "any" ? true : thing.platformSupport.includes(selectedPlatform))
  )
  const filteredTotal = filteredItems.length

  return (
    <div className="App">

      <HeaderBar
        onChangeCategory={(category, event) => 
        {
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
          setSelectedPlatform(event)
        }
        }
      />

      <PageWrapper>

        <SearchInfo
          filteredTotal={filteredTotal}
        />

        <Things>

          {
            filteredItems.map((thing, index) => (
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
            ))
          }

        </Things>

        <Footer />

      </PageWrapper>

    </div>
  );
}

export default App;
