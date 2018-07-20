export class Transaction {
  public  accountId: String;
  public categoryTags: String[] ;
  public currencyAmount: number ;
  public customerId: String ;
  public description: String ;
  public id: string ;
  public locationCity: string;
  public locationCountry: string;
  public locationLatitude: number;
  public locationLongitude: number;
  public locationPostalCode: string;
  public locationRegion: string;
  public locationStreet: string;
  public merchantCategoryCode: string;
  public merchantId: string;
  public merchantName: string;
  public originalCurencyAmount: number;
  public originalCurrency: string;
  public originationDate: string;
  public postBalance: number;
  public postDate: string;
  public source: string;
  public type: string;

  constructor(accountId: String, customerId: String, categoryTags: String[], description: String, currencyAmount: number) {
      this.accountId = accountId;
      this.customerId = customerId;
      this.categoryTags = categoryTags;
      this.description = description;
      this.currencyAmount = currencyAmount;


  }
}
