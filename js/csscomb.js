/**
 * CSScomb.js version 0.1
 * Tool for sort CSS code in specific order
 * @param {String} css required
 * @param {Boolean} params.log {'log':true} by default log===false
 */
var Csscomb = function(css, params) {
    if(
        css !== undefined &&
        typeof(css) === 'string' &&
        this.trim(css) != ''
    ) {
        console.log(css);
    }
    else {
        console.log('No CSS on input.');
    }
}

Csscomb.prototype = {

    constructor: Csscomb,

    /**
     * trim
     * if String.trim is not avaliable then use custom trim
     * @param {String} str
     */
    trim: function(str) {

        if(String.trim) {
            return String.trim(str);
        }
        else {
            return str.replace(/^\s+|\s+$/g, '');
        }

    }
}







var code = '.header {\n' +
'    color:#000;\n' +
'    background:#fff;\n' +
'    display:block;\n' +
'    }\n\n\n\n\n';


var params = {
    'log': true
};


var c = new Csscomb(code, params);
//c.doit(code, params);
//c.doit('', params);
//c.doit('\n', params);
