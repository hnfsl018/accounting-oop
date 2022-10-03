export class DocumentItem {
  title: string;
  qty: number;
  pricePerItem: number;
  total: number;
  constructor(
      title: string,
      qty: number,
      pricePerItem: number
    ) {
    this.title = title;
    this.qty = qty;
    this.pricePerItem = pricePerItem;
    this.total = qty * pricePerItem;
  }
}

export class Document {
  /** ส่วนลูกค้า */
  customerInfo: string;
  vendorInfo: string;
  documentNo: string;
  dateOfIssue: Date;
  private total: number;
  items: DocumentItem[];
  constructor(
    customerInfo: string,
    vendorInfo: string,
    documentNo: string,
    dateOfIssue: Date,
    items: DocumentItem[]
  ) {
    this.documentNo = documentNo;
    this.dateOfIssue = dateOfIssue;
    this.customerInfo = customerInfo;
    this.vendorInfo = vendorInfo;
    this.items = items;
    let sum = 0;
    for (const item of items) {
      sum = sum + item.total;
    }
    this.total = sum;
  }

  showTotal() {
    console.log("total :: ", this.total);
    return this.total;
  }
}
