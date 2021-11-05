import { Container } from 'typedi';
import { EventSubscriber, On } from 'event-dispatch';
import events from './events';
import { IPropertyInputDto } from '@/interfaces/IProperty';
import mongoose from 'mongoose';
import { Logger } from 'winston';

@EventSubscriber()
export default class PropertySubscriber {
  @On(events.property.propertyCreate)
  public onUserSignIn({ _id }: Partial<IPropertyInputDto>) {
    const Logger: Logger = Container.get('logger');

    try {
      const PropertyModel = Container.get('PropertyModel') as mongoose.Model<IPropertyInputDto & mongoose.Document>;
    } catch (e) {
      Logger.error(`🔥 Error on event ${events.property.propertyCreate}: %o`, e);

      // Throw the error so the process die (check src/app.ts)
      throw e;
    }
  }

}
