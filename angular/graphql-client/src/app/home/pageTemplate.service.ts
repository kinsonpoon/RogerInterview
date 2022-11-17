import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
// skip: Int = 0
// limit: Int = 100
// preview: Boolean
// locale: String
// where: PageTemplateFilter
// order: [PageTemplateOrder]
//
// total: Int!
// skip: Int!
// limit: Int!
// items: [PageTemplate]!
export class PageTemplateService {
  private pageTemplateQuery: QueryRef<{ entries: any }, { }>;

  constructor(private apollo: Apollo) {
    this.pageTemplateQuery = this.apollo.watchQuery({
      query: gql`query PageTemplateCollection($skip: Int = 0,$limit: Int = 100,$preview: Boolean= false,$locale: String = ""){
  pageTemplateCollection(skip: $skip, limit:$limit,preview:$preview,locale:$locale){
    skip
    total
    limit
  }
}`
    });
  }

  async getPageTemplates(): Promise<any> {
    const result = await this.pageTemplateQuery.refetch();
    return result.data;
  }

}

