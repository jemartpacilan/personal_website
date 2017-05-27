const express = require('express');
const consolidate = require('consolidate');
const bodyparser = require('body-parser');
const User = require('./models').User;

const app = express();

app.set('views', './views');

app.engine('html', consolidate.nunjucks);
app.use('/static', express.static('./static'));
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(request, respond){
	respond.render('index.html');
});

app.post('/submit', function(request, respond){
	const name = request.body.name;
	const comment = request.body.comment;
	User.create({ name: name, comment: comment}).then(function() {
		respond.redirect('/');
	});
});

app.listen(18163, function () {
	console.log('Server is running on port 3000...')
});
