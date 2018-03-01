/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
    var result = "";
    for ( var i=0; i<input.length; i++){
        var character = input.charAt(i);
// searching for special character and digit. replace it with ""
        if (character.match(/[^a-zA-Z]/) !== null){
            result += "";
        } 
        else {
                if (character === character.toUpperCase()){
                    result += "-" + character.toLowerCase(); 
                }
                else {
                    result += character;
                }
        }
    }
    return result;
}

module.exports = kebabize