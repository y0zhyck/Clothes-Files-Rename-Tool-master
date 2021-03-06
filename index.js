const fs = require('fs');
const readlineSync = require('readline-sync');

let path = '';
let sex = '';

const names = {
  male: 'mp_m_freemode_01',
  female: 'mp_f_freemode_01'
}

// E:masks\stream\

function isPathValid(path){
  try {
    fs.accessSync(path)
    return true;
  } catch(e) {
    console.log('Path not valid.')
    return false;
  }
}

while (!path || !isPathValid(path)) {
  path = readlineSync.question('Wait for path to folder: ');
}

while (sex !== 'female' && sex !== 'male') {
  sex = readlineSync.question('Wait for sex(female or male): ');
}

fs.readdir(path, (err, files) => {
  files.forEach((file, i) => {
    fs.rename(path + '\\' + file, path + '\\' + names[sex] + "^" +file, err => {
      if (err) throw err;
      console.log(`${file} => ${names[sex] + "^" +file}`);
    });
  });
});
