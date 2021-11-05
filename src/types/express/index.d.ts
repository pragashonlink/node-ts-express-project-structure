import { Document, Model } from 'mongoose';
import { IPropertyInputDto } from '@/interfaces/IProperty';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IPropertyInputDto & Document;
    }    
  }

  namespace Models {
    export type PropertyModel = Model<IPropertyInputDto & Document>;
  }
}
