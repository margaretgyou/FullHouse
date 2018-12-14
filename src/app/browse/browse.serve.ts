import {Listing} from './browse.model';
import {Subject} from 'rxjs';


export class ListingService {
  listingsChanged = new Subject<Listing[]>();
  private listings: Listing[] = [
    new Listing(
      'Cool Place',
      '300',
      '123 address',
      'descr2',
      'title22',
      'price22'),
    new Listing(
      'Fun Place',
      '400',
      '2 address',
      'descr1', 'title2', 'price2')
  ];
  getListings() {
    return this.listings.slice();
  }
  getListing(index: number) {
    return this.listings[index];
  }
  addListing(listing: Listing) {
    this.listings.push(listing);
    this.listingsChanged.next(this.listings.slice());
  }
  updateListing(index: number, newListing: Listing) {
    this.listings[index] = newListing;
    this.listingsChanged.next(this.listings.slice());
  }
  deleteListing(index: number) {
    this.listings.splice(index, 1);
    this.listingsChanged.next(this.listings.slice());
  }
}
