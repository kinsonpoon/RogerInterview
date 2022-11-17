import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from 'apollo-angular';
import {variable} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class PageTemplateService {
  private pageTemplateQuery: QueryRef<{ pageTemplateCollection: any }, {skip: number, limit: number}>;

  constructor(private apollo: Apollo) {
    this.pageTemplateQuery = this.apollo.watchQuery({
      query: gql`query PageTemplateCollection($skip: Int = 0,$limit: Int = 100,$preview: Boolean= false,$locale: String = ""){
  pageTemplateCollection(skip: $skip, limit:$limit,preview:$preview,locale:$locale){
    skip
    total
    limit
    items{
      url
      seo{
        title
        description
        isNoIndex
      }
    }
  }
}`})
  }

  async getPageTemplates(skip: number, limit: number): Promise<any> {
    const result = await this.pageTemplateQuery.refetch({skip, limit});
    return result.data.pageTemplateCollection;
  }

}

