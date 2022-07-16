
# simple-modale-library
A library of React components created using `create-react-app`.

## Installation
Run the following command:`npm install react-modale-exercice --force`.

For compatibility with Babel dependencies, we used react version 16.8.
But no matter for working with react version 18.

## Example App

``` 

import { Modal, useModal } from 'react-modale-exercice';

function App() {
 const { isShowing, toggle } = useModal();  
  return (
    <div className="App">
      <div className="container">
        <h1>Example Modale React</h1>
        <button onClick={toggle}>Toggle Modal</button>
      <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
}

export default App;

```