"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var fs_1 = require("fs");
var app = (0, express_1.default)();
var port = 3000;
app.use(function (req, res, next) {
    console.log('[Middleware-01]Time:', Date.now());
    next();
});
app.use(function (req, res, next) {
    console.log('[Middleware-02]Time:', Date.now());
    next();
});
app.get('/', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Hello <strong>World!</strong>');
});
app.get('/demo2.html', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Demo 2 <strong>World!</strong>');
});
app.get('/demo3.html', function (req, res) {
    var filePath = path_1.default.join(__dirname, 'demoContenido.html');
    var fileContent = fs_1.default.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'text/html');
    res.send(fileContent);
});
app.get('/demo4.html', function (req, res) {
    var filePath = path_1.default.join(__dirname, 'demoContenido.html');
    res.sendFile(filePath);
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
