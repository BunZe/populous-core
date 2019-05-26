import { version } from '../../package.json';
import { Router } from 'express';
import tokens from './tokens.json'
import Data from './data'
import Devices from "./devices";
import LastData from './lastData'

export default ({ config, db }) => {
	let api = Router();

	api.use('/data/last', LastData);

	api.use('/data', (req, res, next) => {
		if (tokens.includes(req.header("API_TOKEN"))) {
			next();
		} else if(req.method === "GET") {
			next()
		} else {
			res.send(403)
		}
	}, 
	Data 
	);

	api.use('/devices', (req, res, next) => {
		if(req.method === "GET"){
			next();
		} else {
			res.send(403);
		}
	},
	Devices
	);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
