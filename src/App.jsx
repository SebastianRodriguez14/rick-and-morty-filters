import { Suspense, useState } from 'react'
import { FilterCharacters } from './components/characters/filter-characters'
import { IndexCharacter } from './components/characters/index-characters'
import { Loader } from './components/utils/loader'


function App() {
  return (
    <div className="container">
      <FilterCharacters loading={false}/>
      <Suspense fallback={<Loader/>}>
        <IndexCharacter/>
      </Suspense>
    </div>
  )
}

export default App
