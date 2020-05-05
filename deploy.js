const Client = require('ftp');
const fs = require('fs');
const folderDist = './dist/';
const upLoadFolder = 'http';

var c = new Client();

c.on('ready', function() {
  c.rmdir(upLoadFolder, true, () => {
    c.mkdir(upLoadFolder, false, () => {
      fs.readdirSync(folderDist).forEach(fileName =>{
        c.put(folderDist + fileName, upLoadFolder + '/' + fileName, function(err){
          if (err) {throw err;}
          c.end();
        });
      });
    });
  });
});

let connectOption = {
  host: 'probapera202-ru.1gb.ru',
  user: 'w_probapera202-ru_cc940b2f',
  password: 'c88ca29z5a'
}

c.connect(connectOption);