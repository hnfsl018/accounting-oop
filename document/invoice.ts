// import { Document, DocumentItem } from "./document";

// export class InvoiceDocument extends Document {
//   numberOfPeriods: number;
//   constructor(
//     customerName: string,
//     customerAddr: string,
//     contactName: string,
//     contactTel: string,
//     vendorName: string,
//     vendorAddr: string,
//     documentNo: string,
//     dateOfIssue: Date,
//     discount: number,
//     remark: string,
//     items: DocumentItem[],
//     numberOfPeriods: number
//   ) {
//     super(
//       customerName,
//       customerAddr,
//       contactName,
//       contactTel,
//       vendorName,
//       vendorAddr,
//       documentNo,
//       dateOfIssue,
//       discount,
//       remark,
//       items
//     );
//     this.numberOfPeriods = numberOfPeriods;
//   }

//   showTotal() {
//     console.log("total :: ", this.total);
//   }
// }

// // const documentItems: DocumentItem[] = [];
// // const item = new DocumentItem("pen", 6, 15);
// // const item1 = new DocumentItem("paper", 30, 1);
// // documentItems.push(item, item1);

// // const invoice = new InvoiceDocument(
// //   "customerName",
// //   "customerAddr",
// //   "contactName",
// //   "contactTel",
// //   "vendorName",
// //   "vendorAddr",
// //   "documentNo",
// //   new Date(),
// //   0,
// //   "remark",
// //   documentItems,
// //   2
// // );

// // invoice.showTotal();
