import React, {useEffect, useState} from "react";
import Head from 'next/head';
import Router from 'next/router';


export default function Home() {
  useEffect(() => {
    Router.push(`/join`)
  });

  return (
 <div>
 </div> 
  )
}
