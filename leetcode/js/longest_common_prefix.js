/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let s = "";
    let firstStr = "";

    if (strs.length <= 1) {
        strs.some((str) => {
            s = str;
        })

        return s;
    }

    strs.some((str) => {
        if (!str.length) {
            s = "";
            return true;
        }
        if (!firstStr) {
            firstStr = str;
            return false;
        }

        // 最初の文字が違っていたらリセットして終了
        if (str[0] !== firstStr[0]) {
            s = "";
            return  true;
        }

        let tmpStr = "";
        for (var i = 0; i < firstStr.length; i++) {
           if (i > str.length) continue;
           if (firstStr[i] !== str[i]) break;
           tmpStr += str[i];
        }

        if (s.length <= 0 || s.length === tmpStr.length) {
            s = tmpStr;
            return false;
        }

        if (tmpStr.length > s.length) {
            return false;
        }

        if (tmpStr.length < s.length) {
            s = tmpStr;
            return false;
        }

    });

    return s;
};

/// best answer
// var longestCommonPrefix = function(strs) {
//     'use strict';
//     if (strs === undefined || strs.length === 0) { return ''; }
    
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };