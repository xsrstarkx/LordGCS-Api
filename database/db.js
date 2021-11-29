var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://lordgcs-api.herokuapp.com';
try {
if(url == 'https://lordgcs-api.herokuapp.com') throw console.log(color('Verifique a configuração do banco de dados, o url var não foi preenchido','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Conectado corretamente ao servidor','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nFalha ao conectar ao banco de dados, \nVerifique a configuração do banco de dados, se o URL de conexão está correto','red'))
	})


module.exports = db
