var readline = require('readline');
var kuromoji = require("kuromoji");

kuromoji.builder({
    dicPath: "node_modules/kuromoji/dict"
}).build(function(err, tokenizer) {
    if (err) {
        throw err;
    }

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("文章入力", function(answer) {
        var result = tokenizer.tokenize(answer);
        console.log(result);
        rl.close();
    });
});