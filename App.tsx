import React from 'react';
import { StatusBar } from 'react-native';
import Main from './src/pages/Main/index';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Main/>
    </>
    
  );
};