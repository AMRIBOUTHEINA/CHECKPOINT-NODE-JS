const myModule = require('./myModule.js');
const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, (err, list) => {
    return err ? console.error('There is an error:', err) : 
    console.log(list.join('\n'));
});