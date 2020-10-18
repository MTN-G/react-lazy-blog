import React, {Suspense, useState} from 'react';
import './App.css';
import ErrorBoundary from './error'
import Loading from './loading'
const Form = React.lazy(()=>import('./form')) 
const Comments =  React.lazy(()=>import('./comments'))


function App() {

const [data, setData]  = useState([])

  return (
    <div className='app'>
      <h1>Welcome To My Lazy Blog!</h1>
      <h3>What do you think about cats? Tell me in the comments.</h3>
      <img alt='cat' src="https://www.purina.co.il/sites/site.prod1.purina.co.il/files/styles/slider_mobile/public/2019-11/Maine%20Coon%20Cat_526X360.jpg?itok=sdZmA53C" width='400px' height='200px'></img>
      <ErrorBoundary>
        <Suspense fallback={<Loading/>}>
          <Form setData={setData}/>
          <Comments data={data}/>
      </Suspense>
     </ErrorBoundary>
    </div>
  );
}

export default App;
