import { Router } from 'express';
import property from './routes/property';

export default () => {
	const app = Router();
	property(app);

	return app
}