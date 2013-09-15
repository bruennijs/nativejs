/**
 * Created with JetBrains WebStorm.
 * User: bruentje
 * Date: 15.09.13
 * Time: 00:35
 * To change this template use File | Settings | File Templates.
 */


function addNumeric(a, b, result)
{
    var d = a + b
    result(d)
}

addNumeric(1, 2, function(result) {
    console.log(result);
    console.log(process.title)
})
