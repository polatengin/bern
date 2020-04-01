export class DeliveryListRequestModel {
  latitude: number;
  longitude: number;
  range: number;
}

export class DeliveryListResponseModel {
  latitude: number;
  longitude: number;
  range: number;
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dueDate: Date
}
