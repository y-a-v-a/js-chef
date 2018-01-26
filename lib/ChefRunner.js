/**
 * @author y_a_v_a
 * @license wtfpl v2
 * copyleft 2017 - no wrongs reversed
 */
const antlr4 = require('antlr4');
const ChefLexer = require('./ChefLexer');
const ChefParser = require('./ChefParser');
const ChefListener = require('./ChefListener').ChefListener;

function run(chefProgram) {
  var chars = new antlr4.InputStream(chefProgram);
  var lexer = new ChefLexer.ChefLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ChefParser.ChefParser(tokens);
  parser.buildParseTrees = true;

  var tree = parser.program();

  ChefListenerHandler = function() {
    ChefListener.call(this);
    return this;
  }

  ChefListenerHandler.prototype = Object.create(ChefListener.prototype);
  ChefListenerHandler.prototype.constructor = ChefListenerHandler;

  var listernerHandler = new ChefListenerHandler();

  var result = [];
  var variables = {};

  // output something
  ChefListenerHandler.prototype.exitServes = function(ctx) {
    console.log(result.reverse().join(''));
  }

  ChefListenerHandler.prototype.enterIngredient = function(ctx) {
    var ingredientLabel = ctx.children[ctx.children.length - 2].WORD().map(function(word) {
      return word.getText();
    }).join('-');

    // console.log(ingredientLabel);
    // console.log(ctx.children[0].INT().__proto__);
    // console.log(ctx.children[0].INT().getText());

    variables[ingredientLabel] = ctx.children[0].INT().getText();

    // process.exit();

  };

  ChefListenerHandler.prototype.enterLiquefy = function(ctx) {
    for (let i = 0; i < result.length; i++) {
      result[i] = String.fromCharCode(result[i]);
    }
  };

  ChefListenerHandler.prototype.enterPut = function(ctx) {
    var ingredientLabel = ctx.children[1].WORD().map(function(word) {
      return word.getText();
    }).join('-');
    result.push(variables[ingredientLabel]);
  };

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listernerHandler, tree);

}

module.exports.run = run;
