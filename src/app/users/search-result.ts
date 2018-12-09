export class SearchResult {
  matcheremail: string;
  matchscore: number;

  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
