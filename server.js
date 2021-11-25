import http from 'http';
import fs from 'fs';

let nPort = 2701;


let shouldServerRespond = function (sRequestedPath) {
    let shouldRespond = false;
    if (sRequestedPath === '/') {
        shouldRespond = true;
    } else if (sRequestedPath.includes('.js')) {
        shouldRespond = true;
    } else if (sRequestedPath.includes('.css')) {
        shouldRespond = true;
}
    return shouldRespond;
};
let verifyPath = function (sRequestedPath) {
    let sVerifiedPath = '';
    if (sRequestedPath === '/') {
        sVerifiedPath = 'index.html';
    } else if (sRequestedPath.includes('.js')) {
        sVerifiedPath = sRequestedPath.substring(1);
    } else if (sRequestedPath.includes('.css')) {
        sVerifiedPath = sRequestedPath.substring(1);
}
    return sVerifiedPath;
};


let getContentType = function (sRequestedPath) {
    let sContentType = 'text/plain';
    if (sRequestedPath.includes('.css')) {
        sContentType = 'text/css';
    } else if (sRequestedPath.includes('.html')) {
        sContentType = 'text/html';
    } else if (sRequestedPath.includes('.js')) {
        sContentType = 'application/javascript';
}
    return sContentType;
};
let respondToBrowserRequest = function (request, response) {
    let sRequestedPath = request.url;
    let shouldServerRespondToPath =
        shouldServerRespond(sRequestedPath);
    if (shouldServerRespondToPath) {
        let sVerifiedPath = verifyPath(sRequestedPath);
        let oHeaders =  {
            'Content-Type': getContentType(sVerifiedPath)
};
        response.writeHead(200, oHeaders);
        let oFileStream = fs.createReadStream(sVerifiedPath);
        oFileStream.pipe(response);
} };

let server = http.createServer(respondToBrowserRequest);
 server.listen(nPort);
