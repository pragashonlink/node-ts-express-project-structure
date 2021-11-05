import { IPropertyInputDto } from '@/interfaces/IProperty';
import PropertyService from '@/services/property';
import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';

const route = Router();

export default (app) => {
  app.use('/properties', route);
  route.post(
    '/',

    async (req: Request, res: Response, next: NextFunction) => {
      const logger:Logger = Container.get('logger');
      try {
        const propertyService = Container.get(PropertyService);
        const { id } = await propertyService.Create(req.body as IPropertyInputDto);
        return res.status(201).json({ id });
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e)
      }
    },
  );
};
