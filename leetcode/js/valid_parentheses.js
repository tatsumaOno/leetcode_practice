/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length <= 1) return false;
    const evenArrs = [...s].reduce((prev, next, index) => {
    return index % 2 == 0 ? 
    [...prev, [next]] : 
    [...prev.slice(0, -1), [...prev[prev.length - 1], next]];
    },[]);

    return evenArrs.every((arr, index) => {
        if (!evenArrs[index][0]) return false;
        if (!evenArrs[index][1]) return false;

        if (evenArrs[index][0] == '(' && evenArrs[index][1] == ')') return true;
        if (evenArrs[index][0] == '[' && evenArrs[index][1] == ']') return true;
        if (evenArrs[index][0] == '{' && evenArrs[index][1] == '}') return true;

        return false;
    })
};

// answer
// const stack = [];
    
// for (let i = 0 ; i < s.length ; i++) {
//     let c = s.charAt(i);
//     switch(c) {
//         case '(': stack.push(')');
//             break;
//         case '[': stack.push(']');
//             break;
//         case '{': stack.push('}');
//             break;
//         default:
//             if (c !== stack.pop()) {
//                 return false;
//             }
//     }
// }

// return stack.length === 0;