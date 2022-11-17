import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { environment } from "../environments/environment";

const uri = `https://graphql.contentful.com/content/v1/spaces/${environment.contentful.space}`;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const auth = setContext((operation, context) => {
    return {
      headers: {
        Authorization: `Bearer ${environment.contentful.accessToken}`,
      },
    };
  });

  return {
    link: ApolloLink.from([auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
  ],
})
export class GraphQLModule {}
