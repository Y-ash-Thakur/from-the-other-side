import http from 'node:http';

const PORT = 8000;

// const __dirname = (import.meta.dirname) // dirname is globally available in this file now 

console.log(import.meta.dirname);

console.log(process.cwd()); // This will give you the current working directory
// it's just the folder from which we launch our node project

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    // res.writeHead(200, {'Content_type': 'text/html'});
    res.end('<html><h1>The server is working </h1></html>')
})

server.listen(PORT, () => console.log(`Connected on port ${PORT}`))



// console.log(process.cwd());  => /home/projects/s0fcj7p84c
