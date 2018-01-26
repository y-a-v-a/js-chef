// Generated from Chef.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ChefParser.
function ChefListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ChefListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ChefListener.prototype.constructor = ChefListener;

// Enter a parse tree produced by ChefParser#program.
ChefListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by ChefParser#program.
ChefListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by ChefParser#recipe.
ChefListener.prototype.enterRecipe = function(ctx) {
};

// Exit a parse tree produced by ChefParser#recipe.
ChefListener.prototype.exitRecipe = function(ctx) {
};


// Enter a parse tree produced by ChefParser#auxiliary.
ChefListener.prototype.enterAuxiliary = function(ctx) {
};

// Exit a parse tree produced by ChefParser#auxiliary.
ChefListener.prototype.exitAuxiliary = function(ctx) {
};


// Enter a parse tree produced by ChefParser#title.
ChefListener.prototype.enterTitle = function(ctx) {
};

// Exit a parse tree produced by ChefParser#title.
ChefListener.prototype.exitTitle = function(ctx) {
};


// Enter a parse tree produced by ChefParser#comments.
ChefListener.prototype.enterComments = function(ctx) {
};

// Exit a parse tree produced by ChefParser#comments.
ChefListener.prototype.exitComments = function(ctx) {
};


// Enter a parse tree produced by ChefParser#ingredients.
ChefListener.prototype.enterIngredients = function(ctx) {
};

// Exit a parse tree produced by ChefParser#ingredients.
ChefListener.prototype.exitIngredients = function(ctx) {
};


// Enter a parse tree produced by ChefParser#ingredient.
ChefListener.prototype.enterIngredient = function(ctx) {
};

// Exit a parse tree produced by ChefParser#ingredient.
ChefListener.prototype.exitIngredient = function(ctx) {
};


// Enter a parse tree produced by ChefParser#measureType.
ChefListener.prototype.enterMeasureType = function(ctx) {
};

// Exit a parse tree produced by ChefParser#measureType.
ChefListener.prototype.exitMeasureType = function(ctx) {
};


// Enter a parse tree produced by ChefParser#measure.
ChefListener.prototype.enterMeasure = function(ctx) {
};

// Exit a parse tree produced by ChefParser#measure.
ChefListener.prototype.exitMeasure = function(ctx) {
};


// Enter a parse tree produced by ChefParser#dryMeasure.
ChefListener.prototype.enterDryMeasure = function(ctx) {
};

// Exit a parse tree produced by ChefParser#dryMeasure.
ChefListener.prototype.exitDryMeasure = function(ctx) {
};


// Enter a parse tree produced by ChefParser#liquidMeasure.
ChefListener.prototype.enterLiquidMeasure = function(ctx) {
};

// Exit a parse tree produced by ChefParser#liquidMeasure.
ChefListener.prototype.exitLiquidMeasure = function(ctx) {
};


// Enter a parse tree produced by ChefParser#unknownMeasure.
ChefListener.prototype.enterUnknownMeasure = function(ctx) {
};

// Exit a parse tree produced by ChefParser#unknownMeasure.
ChefListener.prototype.exitUnknownMeasure = function(ctx) {
};


// Enter a parse tree produced by ChefParser#ingredientLabel.
ChefListener.prototype.enterIngredientLabel = function(ctx) {
};

// Exit a parse tree produced by ChefParser#ingredientLabel.
ChefListener.prototype.exitIngredientLabel = function(ctx) {
};


// Enter a parse tree produced by ChefParser#method.
ChefListener.prototype.enterMethod = function(ctx) {
};

// Exit a parse tree produced by ChefParser#method.
ChefListener.prototype.exitMethod = function(ctx) {
};


// Enter a parse tree produced by ChefParser#statement.
ChefListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ChefParser#statement.
ChefListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ChefParser#stdin.
ChefListener.prototype.enterStdin = function(ctx) {
};

// Exit a parse tree produced by ChefParser#stdin.
ChefListener.prototype.exitStdin = function(ctx) {
};


// Enter a parse tree produced by ChefParser#put.
ChefListener.prototype.enterPut = function(ctx) {
};

// Exit a parse tree produced by ChefParser#put.
ChefListener.prototype.exitPut = function(ctx) {
};


// Enter a parse tree produced by ChefParser#fold.
ChefListener.prototype.enterFold = function(ctx) {
};

// Exit a parse tree produced by ChefParser#fold.
ChefListener.prototype.exitFold = function(ctx) {
};


// Enter a parse tree produced by ChefParser#add.
ChefListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by ChefParser#add.
ChefListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by ChefParser#remove.
ChefListener.prototype.enterRemove = function(ctx) {
};

// Exit a parse tree produced by ChefParser#remove.
ChefListener.prototype.exitRemove = function(ctx) {
};


// Enter a parse tree produced by ChefParser#combine.
ChefListener.prototype.enterCombine = function(ctx) {
};

// Exit a parse tree produced by ChefParser#combine.
ChefListener.prototype.exitCombine = function(ctx) {
};


// Enter a parse tree produced by ChefParser#divide.
ChefListener.prototype.enterDivide = function(ctx) {
};

// Exit a parse tree produced by ChefParser#divide.
ChefListener.prototype.exitDivide = function(ctx) {
};


// Enter a parse tree produced by ChefParser#addDry.
ChefListener.prototype.enterAddDry = function(ctx) {
};

// Exit a parse tree produced by ChefParser#addDry.
ChefListener.prototype.exitAddDry = function(ctx) {
};


// Enter a parse tree produced by ChefParser#liquefyIngredient.
ChefListener.prototype.enterLiquefyIngredient = function(ctx) {
};

// Exit a parse tree produced by ChefParser#liquefyIngredient.
ChefListener.prototype.exitLiquefyIngredient = function(ctx) {
};


// Enter a parse tree produced by ChefParser#liquefy.
ChefListener.prototype.enterLiquefy = function(ctx) {
};

// Exit a parse tree produced by ChefParser#liquefy.
ChefListener.prototype.exitLiquefy = function(ctx) {
};


// Enter a parse tree produced by ChefParser#stirBowl.
ChefListener.prototype.enterStirBowl = function(ctx) {
};

// Exit a parse tree produced by ChefParser#stirBowl.
ChefListener.prototype.exitStirBowl = function(ctx) {
};


// Enter a parse tree produced by ChefParser#stir.
ChefListener.prototype.enterStir = function(ctx) {
};

// Exit a parse tree produced by ChefParser#stir.
ChefListener.prototype.exitStir = function(ctx) {
};


// Enter a parse tree produced by ChefParser#mix.
ChefListener.prototype.enterMix = function(ctx) {
};

// Exit a parse tree produced by ChefParser#mix.
ChefListener.prototype.exitMix = function(ctx) {
};


// Enter a parse tree produced by ChefParser#clean.
ChefListener.prototype.enterClean = function(ctx) {
};

// Exit a parse tree produced by ChefParser#clean.
ChefListener.prototype.exitClean = function(ctx) {
};


// Enter a parse tree produced by ChefParser#pour.
ChefListener.prototype.enterPour = function(ctx) {
};

// Exit a parse tree produced by ChefParser#pour.
ChefListener.prototype.exitPour = function(ctx) {
};


// Enter a parse tree produced by ChefParser#loopStart.
ChefListener.prototype.enterLoopStart = function(ctx) {
};

// Exit a parse tree produced by ChefParser#loopStart.
ChefListener.prototype.exitLoopStart = function(ctx) {
};


// Enter a parse tree produced by ChefParser#loopEnd.
ChefListener.prototype.enterLoopEnd = function(ctx) {
};

// Exit a parse tree produced by ChefParser#loopEnd.
ChefListener.prototype.exitLoopEnd = function(ctx) {
};


// Enter a parse tree produced by ChefParser#setAside.
ChefListener.prototype.enterSetAside = function(ctx) {
};

// Exit a parse tree produced by ChefParser#setAside.
ChefListener.prototype.exitSetAside = function(ctx) {
};


// Enter a parse tree produced by ChefParser#serveWith.
ChefListener.prototype.enterServeWith = function(ctx) {
};

// Exit a parse tree produced by ChefParser#serveWith.
ChefListener.prototype.exitServeWith = function(ctx) {
};


// Enter a parse tree produced by ChefParser#refrigerate.
ChefListener.prototype.enterRefrigerate = function(ctx) {
};

// Exit a parse tree produced by ChefParser#refrigerate.
ChefListener.prototype.exitRefrigerate = function(ctx) {
};


// Enter a parse tree produced by ChefParser#nth.
ChefListener.prototype.enterNth = function(ctx) {
};

// Exit a parse tree produced by ChefParser#nth.
ChefListener.prototype.exitNth = function(ctx) {
};


// Enter a parse tree produced by ChefParser#pth.
ChefListener.prototype.enterPth = function(ctx) {
};

// Exit a parse tree produced by ChefParser#pth.
ChefListener.prototype.exitPth = function(ctx) {
};


// Enter a parse tree produced by ChefParser#serves.
ChefListener.prototype.enterServes = function(ctx) {
};

// Exit a parse tree produced by ChefParser#serves.
ChefListener.prototype.exitServes = function(ctx) {
};


// Enter a parse tree produced by ChefParser#number.
ChefListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ChefParser#number.
ChefListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ChefParser#divider.
ChefListener.prototype.enterDivider = function(ctx) {
};

// Exit a parse tree produced by ChefParser#divider.
ChefListener.prototype.exitDivider = function(ctx) {
};


// Enter a parse tree produced by ChefParser#verb.
ChefListener.prototype.enterVerb = function(ctx) {
};

// Exit a parse tree produced by ChefParser#verb.
ChefListener.prototype.exitVerb = function(ctx) {
};


// Enter a parse tree produced by ChefParser#verbed.
ChefListener.prototype.enterVerbed = function(ctx) {
};

// Exit a parse tree produced by ChefParser#verbed.
ChefListener.prototype.exitVerbed = function(ctx) {
};



exports.ChefListener = ChefListener;