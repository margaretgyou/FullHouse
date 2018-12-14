import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListingService} from '../browse.serve';


@Component({
  selector: 'app-apt-edit',
  templateUrl: './apt-edit.component.html',
  styleUrls: ['./apt-edit.component.css']
})
export class AptEditComponent implements OnInit {
  id: number;
  editMode = false;
  listingForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private listingService: ListingService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
    });
  }
  onSubmit() {
    // const newListing = new Listing(
    // this.listingForm.value['name'],
    // this.listingForm.value['rent'],
    // this.listingForm.value['address'],
    // this.listingForm['description']);
    if (this.editMode) {
      this.listingService.updateListing(this.id, this.listingForm.value);
    } else {
      this.listingService.addListing(this.listingForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let listingName = '';
    let listingRent = '';
    let listingAddress = '';
    let listingDescr = '';
    let listingTitle2 = '';
    let listingPrice2 = '';
    if (this.editMode) {
      const listing = this.listingService.getListing(this.id);
      listingName = listing.ltitle;
      listingRent = listing.price;
      listingAddress = listing.address;
      listingDescr =  listing.description;
      listingTitle2 = listing.listingtitle;
      listingPrice2 = listing.listingprice;
    }
    this.listingForm = new FormGroup({
      'name': new FormControl(listingName, Validators.required),
      'rent': new FormControl(listingRent, Validators.required),
      'address': new FormControl(listingAddress, Validators.required),
      'description': new FormControl(listingDescr, Validators.required),
      'YAY': new FormControl(listingTitle2, Validators.required),
      'NAY': new FormControl(listingPrice2, Validators.required)
    });
  }

}
