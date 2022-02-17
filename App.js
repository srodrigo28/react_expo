import { StatusBar } from 'expo-status-bar';
import Signin from './pages/Signin';
import React from 'react';

export default function(){
  return (
    <>
      <Signin></Signin>
      <StatusBar style='light' />
    </>
  )
}