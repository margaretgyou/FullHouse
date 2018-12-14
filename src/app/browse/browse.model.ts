export class Listing {
  public ltitle: string;
  public price: string;
  public address: string;
  public description: string;
  public listingtitle: string;
  public listingprice: string;

  constructor(title: string, price: string, addr: string, desc: string, title2: string, price2: string) {
    this.ltitle = title;
    this.price = price;
    this.address = addr;
    this.description = desc;
    this.listingtitle = title2;
    this.listingprice = price2;
  }
}
