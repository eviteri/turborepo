import React from 'react';
import {Button} from '@eviteri/turborepo-ui'
import {Button as StoreButton} from '@eviteri/turborepo-store'

const App: React.FC = () => {
  return (<div> <Button /><StoreButton /></div>)
}

export default App;
