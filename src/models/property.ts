import mongoose from "mongoose";
import { IPropertyInputDto } from "../interfaces/IProperty";

const Property = new mongoose.Schema(
{
  beds: {
    type: Number,
    required: [true, 'Please enter the number of beds'],
    index: true,
  },

  baths: {
    type: Number,
    required: [true, 'Please enter the number of baths'],
    index: true,
  },

  landSize: {
    type: Number,
    required: [true, 'Please enter land size']
  },

  priceUnitId: {
    type: Number,
    required: [true, 'Please enter the  priceunitId'],
  },
  houseSize: {
    type: Number,
    required: [true, 'Please enter the house Size'],
  },

  address: {
    type: String,
  },

  title: {
    type: String,
    required: [true, 'Please enter a title'],
  },

  description: {
    type: String,
    required: [true, 'Please enter a description'],
  },

  contactName: {
    type: String,
    required: [true, 'Please enter the contactName'],
  },

  contactNumber: {
    type: String,
    required: [true, 'Please enter the contact Number']
  },

  contactEmail: {
    type: String,
    required: [true, 'Please enter contactEmail']
  },
},
{ 
  timestamps: true 
}
);

const PropertyModel = mongoose.model<IPropertyInputDto>("IProperty", Property, 'properties');
export default PropertyModel;
