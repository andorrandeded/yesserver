const express = require('express');
const app = express();
app.listen(3000,content);
function content() {
	
	console.log("worked 3000");
}
app.use(express.static("myfile"));
