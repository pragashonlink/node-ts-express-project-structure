import { Service, Inject } from 'typedi';
import { IPropertyInputDto } from '@/interfaces/IProperty';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import events from '@/subscribers/events';

@Service()
export default class PropertyService {
  constructor(
    @Inject('houseModel') private propertyModel: Models.PropertyModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface) {
      //do nothing
    }

  public async Create(propertyInputDto: IPropertyInputDto): Promise<{ id: string }> {
    try {
      this.logger.silly('Creating property');

      const propertyRecord = await this.propertyModel.create({
        ...propertyInputDto
      });

      if (!propertyRecord) {
        throw new Error('Property cannot be created');
      }
      
      this.eventDispatcher.dispatch(events.property.propertyCreate, { record: propertyRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      return { id: propertyRecord._id };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

}