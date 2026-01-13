const fs = require('fs');

const readStream = fs.createReadStream('bigfile.txt', {
    encording: 'utf8'
});

const writeStream = fs.createWriteStream('copy_bigfile.txt');

console.log('Streaming started....');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('streaming completed succesfully!');
});

readStream.on('error', (err) => {
  console.error('❌ Error reading file:', err);
});

writeStream.on('error', (err) => {
  console.error('❌ Error writing file:', err);
});