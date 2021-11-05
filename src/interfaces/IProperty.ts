export interface IProperty {
  _id: string;
  title: string;
  address: string;
  description: string;
  price: number;
  priceUnitId: number;
  landTypeId: number;
  landSize: number;
  propertyTypeId: number;
  transectionTypeId: number;
  beds: number;
  baths: number;
  houseSize: number;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  apartmentSize: number;
}

export interface IPropertyInputDto {
  _id: string;
  title: string;
  address: string;
  description: string;
  price: number;
  priceUnitId: number;
  landTypeId: number;
  landSize: number;
  propertyTypeId: number;
  transectionTypeId: number;
  beds: number;
  baths: number;
  houseSize: number;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  apartmentSize: number;
}

