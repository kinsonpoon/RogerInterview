function toObject(arr: string[]) {
  const rv: any = {};
  for (let i = 1; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}

export class Entry{
  url: string;
  // replace “| Rogers” to “- Rogers”, and all trailing white spaces trimmed
  title: string;
  // 40 word max
  description: string;
  isNoIndex: boolean | null;
  category: any;
  constructor(item: any){
    this.url = 'https://www.rogers.com/support' + item?.url||'';
    this.title = item?.seo?.title?.replace("Rogers","- Rogers").trim()||'';
    this.description = item?.seo?.description?.substring(0,80)||'';
    this.isNoIndex = item?.seo?.seo||'';
    const items = item?.url.split('/').filter((item: string)=>item!=="");
    this.category = toObject(items)
  }
}
