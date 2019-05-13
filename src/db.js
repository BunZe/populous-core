import Mongoose from "mongoose";

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	Mongoose.connect("mongodb://localhost/populous", {useNewUrlParser: true});
	const db = Mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open',  () => {
		callback();
	});


	
}
