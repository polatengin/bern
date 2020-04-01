export class AddressFromCoordinatesRequestModel {
  latitude: number;
  longitude: number;
}

export class AddressFromCoordinatesResponseModel {
  address: string;
}

export class SearchAddressRequestModel {
  keyword: string;
}

export class SearchAddressResponseModel {
  latitude: number;
  longitude: number;
  address: string;
}
