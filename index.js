const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8').then((content)=>{
    const newContentTowrite = `Old content: ${content}, new content: Hello world`;
    fs.writeFile('./newFile.txt', newContentTowrite, 'utf8');
})