import React from 'react'

import AuthorizedApp from './AuthorizedApp'
import UnauthorizedApp from './UnauthorizedApp'

function App() {
  const isAuthenticated = !false;
  return isAuthenticated ? <AuthorizedApp/> : <UnauthorizedApp/>
}

export default App;
