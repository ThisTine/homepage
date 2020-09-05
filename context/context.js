import react,{createContext} from 'react'
import {gql , useQuery} from '@apollo/client'
const {loading,data,error} = useQuery(que)
const que = gql`query{
    projects{
  _id
      name
      year
      description
      type
      language
      framework
      facebook
      instagram
      youtube
      website
      googleplay
      github
    }
    }`
const ProjectDatacontext = createContext(data.projects)