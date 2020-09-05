import '../css/aos.css'
import '../css/index.css'
import 'swiper/css/swiper.css'
import Navbar from '../components/Nav'
import {useEffect} from 'react'
import AOS from 'aos'
import fetch from 'cross-fetch'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
   ssrMode: true,
  link: new HttpLink({ uri: 'https://api.thistine.com/graphql', fetch ,  fetchOptions: {
    mode: 'no-cors',
  }}),
  cache: new InMemoryCache(),

});



import { ApolloProvider } from '@apollo/client';




const MyApp = ({ Component, pageProps })=> {
  useEffect(()=>{
    AOS.init({
      duration : 1000
    })
  },[])
    return (
      <>
    <ApolloProvider client={client}>
    <Navbar/>
    <Component {...pageProps} />
    </ApolloProvider>
      </>
    )
  }

  export default MyApp
