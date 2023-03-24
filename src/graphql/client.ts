import { GraphQLClient } from 'graphql-request'

//Criação do client graphQL
const client = new GraphQLClient('http://localhost:1337/graphql')

export default client
