import Joi from 'joi';

const PropertyValidatior = Joi.object({
  beds:Joi.number().required(),
  baths: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  apartmentSize: Joi.number().required(),
  propertyTypeId: Joi.number().required(),
  address: Joi.string(),
  contactEmail:Joi.string().required(),
  contactNo:Joi.string().required(),
  contactName:Joi.string().required(),
  isNegotiable: Joi.boolean()
})

export default PropertyValidatior;
