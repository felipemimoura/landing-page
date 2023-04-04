import { GraphQLClient } from 'graphql-request'

//Criação do client graphQL
const client = new GraphQLClient(process.env.GRAPHQL_HOST)

export default client
