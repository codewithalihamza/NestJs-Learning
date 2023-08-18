GraplQl 

Dependencies
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql


put this code in app module Import section
GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphQlschema.gql'),
