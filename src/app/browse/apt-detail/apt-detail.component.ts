import {Component, OnInit} from '@angular/core';
import {Listing} from '../browse.model';
import {ListingService} from '../browse.serve';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-apt-detail',
  templateUrl: './apt-detail.component.html',
  styleUrls: ['./apt-detail.component.css']
})
export class AptDetailComponent implements OnInit {
  listing: Listing;
  id: number;

  constructor(private listingService: ListingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.listing = this.listingService.getListing(this.id);
      }
    );
  }
  onEditListing() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  onDeleteListing() {
    this.listingService.deleteListing(this.id);
    this.router.navigate(['/browse']);
  }

}
