/**
 *
 * CSScomb.js v0.1
 * Tool for sort CSS code in specific order
 *
 * http://csscomb.com/
 * @author Slava Oliyanchuk (http://miripiruni.org)
 *
 */
(function(){
/**
 * Creates a new CSScomb.
 * @constructor
 * @param {String} css required
 * @param {Boolean} params.log {'log':true} by default log===false
 */
var CSScomb = function(code, params) {
    this.params = params;

    return this.init(code, params);
};

CSScomb.prototype = {

    constructor : CSScomb,

    isDebug : false,

    init : function(code, params) {
        var ret;

        this.isDebug = (this.params && this.params.log) || false;

        if(
            code !== undefined &&
                typeof(code) === 'string' &&
                    this.trim(code) !== ''
        ) {
            this.isDebug && console.log('Code on input:\n' + code);
            ret = this.parseRules(code);
        }
        else {
            this.isDebug && console.log('No CSS on input.');
        }

        return ret;
    },

    /**
     * trim
     * if String.trim is not avaliable then use custom trim
     * @param {String} str
     */
    trim : function(str) {

        var ret;

        if(String.trim) {
            ret = String.trim(str);
        }
        else {
            ret = str.replace(/^\s+|\s+$/g, '');
        }
        return ret;

    },


    parseRules: function(code) {
        var pattern = new RegExp('.[^}|{]*','g');
        this.isDebug && console.log(code.match(pattern));
    }
};







var code =
'.header {\n' +
'    color:#000;\n' +
'    background:#fff;\n' +
'    display:block;\n' +
'    }\n' +
'.footer {\n' +
'    color:#000;\n' +
'    background:#fff;\n' +
'    display:block;\n' +
'    }\n\n\n\n\n' +
'';

var params = {
        log : true
    },
    c = new CSScomb(code, params);

})();
