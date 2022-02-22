import * as React from 'react';
import { AuthProvider } from './src/Auth/Contexts/Auth';
import { Router } from './src/Auth/Routes/Router';


function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
