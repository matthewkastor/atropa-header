var header = require('../src/atropa-header.js');

try {
    Object.keys(header).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = header[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-header.js');
}

Object.keys(header.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = header.data[prop];
    }
);
