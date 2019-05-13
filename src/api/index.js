import { version } from '../../package.json';
import { Router } from 'express';
import Data from './data'

export default ({ config, db }) => {
	let api = Router();

	api.use('/data', Data);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
