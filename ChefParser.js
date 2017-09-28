// Generated from Chef.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ChefListener = require('./ChefListener').ChefListener;
var grammarFileName = "Chef.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003*\u00b2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0005\u00023\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003?\n\u0003\r\u0003\u000e",
    "\u0003@\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004",
    "G\n\u0004\r\u0004\u000e\u0004H\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0006\u0005P\n\u0005\r\u0005\u000e\u0005Q\u0003\u0006",
    "\u0005\u0006U\n\u0006\u0003\u0006\u0005\u0006X\n\u0006\u0003\u0006\u0005",
    "\u0006[\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005\tg\n\t\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0006\rp\n",
    "\r\r\r\u000e\rq\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006",
    "\u000ex\n\u000e\r\u000e\u000e\u000ey\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0080\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00a0\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u00ad\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0002",
    "\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.\u0002\b\u0005\u0002\u0003\u0003&&((\u0003",
    "\u0002\u0005\u0006\u0003\u0002\u0007\n\u0003\u0002\u000b\u000e\u0003",
    "\u0002\u000f\u0014\u0003\u0002\u001b\u001c\u0002\u00ae\u00020\u0003",
    "\u0002\u0002\u0002\u0004>\u0003\u0002\u0002\u0002\u0006F\u0003\u0002",
    "\u0002\u0002\bL\u0003\u0002\u0002\u0002\nT\u0003\u0002\u0002\u0002\f",
    "_\u0003\u0002\u0002\u0002\u000ea\u0003\u0002\u0002\u0002\u0010f\u0003",
    "\u0002\u0002\u0002\u0012h\u0003\u0002\u0002\u0002\u0014j\u0003\u0002",
    "\u0002\u0002\u0016l\u0003\u0002\u0002\u0002\u0018o\u0003\u0002\u0002",
    "\u0002\u001as\u0003\u0002\u0002\u0002\u001c\u007f\u0003\u0002\u0002",
    "\u0002\u001e\u0081\u0003\u0002\u0002\u0002 \u0085\u0003\u0002\u0002",
    "\u0002\"\u008b\u0003\u0002\u0002\u0002$\u0090\u0003\u0002\u0002\u0002",
    "&\u009f\u0003\u0002\u0002\u0002(\u00a1\u0003\u0002\u0002\u0002*\u00a3",
    "\u0003\u0002\u0002\u0002,\u00a9\u0003\u0002\u0002\u0002.\u00ae\u0003",
    "\u0002\u0002\u000202\u0005\u0004\u0003\u000213\u0005\u0006\u0004\u0002",
    "21\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000245\u0005\b\u0005\u000256\u0005\u001a\u000e\u000268\u0005*\u0016",
    "\u000279\u0005\u0002\u0002\u000287\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0007)\u0002\u0002;<\u0007",
    "\u0002\u0002\u0003<\u0003\u0003\u0002\u0002\u0002=?\u0007&\u0002\u0002",
    ">=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0007(",
    "\u0002\u0002CD\u0005.\u0018\u0002D\u0005\u0003\u0002\u0002\u0002EG\t",
    "\u0002\u0002\u0002FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JK\u0005.\u0018\u0002K\u0007\u0003\u0002\u0002\u0002LM\u0007\u0004",
    "\u0002\u0002MO\u0007)\u0002\u0002NP\u0005\n\u0006\u0002ON\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002R\t\u0003\u0002\u0002\u0002SU\u0005\f\u0007\u0002",
    "TS\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UW\u0003\u0002\u0002",
    "\u0002VX\u0005\u000e\b\u0002WV\u0003\u0002\u0002\u0002WX\u0003\u0002",
    "\u0002\u0002XZ\u0003\u0002\u0002\u0002Y[\u0005\u0010\t\u0002ZY\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002",
    "\\]\u0005\u0018\r\u0002]^\u0007)\u0002\u0002^\u000b\u0003\u0002\u0002",
    "\u0002_`\u0007\'\u0002\u0002`\r\u0003\u0002\u0002\u0002ab\t\u0003\u0002",
    "\u0002b\u000f\u0003\u0002\u0002\u0002cg\u0005\u0012\n\u0002dg\u0005",
    "\u0014\u000b\u0002eg\u0005\u0016\f\u0002fc\u0003\u0002\u0002\u0002f",
    "d\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002g\u0011\u0003\u0002",
    "\u0002\u0002hi\t\u0004\u0002\u0002i\u0013\u0003\u0002\u0002\u0002jk",
    "\t\u0005\u0002\u0002k\u0015\u0003\u0002\u0002\u0002lm\t\u0006\u0002",
    "\u0002m\u0017\u0003\u0002\u0002\u0002np\u0007&\u0002\u0002on\u0003\u0002",
    "\u0002\u0002pq\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002r\u0019\u0003\u0002\u0002\u0002st\u0007)\u0002\u0002",
    "tu\u0007\u0015\u0002\u0002uw\u0007)\u0002\u0002vx\u0005\u001c\u000f",
    "\u0002wv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z\u001b\u0003\u0002\u0002\u0002",
    "{\u0080\u0005\u001e\u0010\u0002|\u0080\u0005 \u0011\u0002}\u0080\u0005",
    "\"\u0012\u0002~\u0080\u0005$\u0013\u0002\u007f{\u0003\u0002\u0002\u0002",
    "\u007f|\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "~\u0003\u0002\u0002\u0002\u0080\u001d\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0007\u0016\u0002\u0002\u0082\u0083\u0005\u0018\r\u0002\u0083",
    "\u0084\u0007\u0017\u0002\u0002\u0084\u001f\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0007\u0018\u0002\u0002\u0086\u0087\u0005\u0018\r\u0002\u0087",
    "\u0088\u0007\u0019\u0002\u0002\u0088\u0089\u0005&\u0014\u0002\u0089",
    "\u008a\u0007\u001a\u0002\u0002\u008a!\u0003\u0002\u0002\u0002\u008b",
    "\u008c\t\u0007\u0002\u0002\u008c\u008d\u0007\u001d\u0002\u0002\u008d",
    "\u008e\u0005&\u0014\u0002\u008e\u008f\u0007\u001a\u0002\u0002\u008f",
    "#\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u001e\u0002\u0002\u0091",
    "\u0092\u0005&\u0014\u0002\u0092\u0093\u0007\u001f\u0002\u0002\u0093",
    "\u0094\u0005(\u0015\u0002\u0094\u0095\u0007 \u0002\u0002\u0095%\u0003",
    "\u0002\u0002\u0002\u0096\u00a0\u0007\u0003\u0002\u0002\u0097\u0098\u0007",
    "\'\u0002\u0002\u0098\u00a0\u0007!\u0002\u0002\u0099\u009a\u0007\'\u0002",
    "\u0002\u009a\u00a0\u0007\"\u0002\u0002\u009b\u009c\u0007\'\u0002\u0002",
    "\u009c\u00a0\u0007#\u0002\u0002\u009d\u009e\u0007\'\u0002\u0002\u009e",
    "\u00a0\u0007$\u0002\u0002\u009f\u0096\u0003\u0002\u0002\u0002\u009f",
    "\u0097\u0003\u0002\u0002\u0002\u009f\u0099\u0003\u0002\u0002\u0002\u009f",
    "\u009b\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0",
    "\'\u0003\u0002\u0002\u0002\u00a1\u00a2\u0005&\u0014\u0002\u00a2)\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0007)\u0002\u0002\u00a4\u00a5\u0007",
    ")\u0002\u0002\u00a5\u00a6\u0007%\u0002\u0002\u00a6\u00a7\u0007\'\u0002",
    "\u0002\u00a7\u00a8\u0007(\u0002\u0002\u00a8+\u0003\u0002\u0002\u0002",
    "\u00a9\u00ac\u0007\'\u0002\u0002\u00aa\u00ab\u0007(\u0002\u0002\u00ab",
    "\u00ad\u0007\'\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0003\u0002\u0002\u0002\u00ad-\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007)\u0002\u0002\u00af\u00b0\u0007)\u0002\u0002\u00b0/\u0003",
    "\u0002\u0002\u0002\u001028@HQTWZfqy\u007f\u009f\u00ac"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'the'", "'Ingredients.'", "'heaped'", "'level'", 
                     "'g'", "'kg'", "'pinch'", "'pinches'", "'ml'", "'l'", 
                     "'dash'", "'dashes'", "'cup'", "'cups'", "'teaspoon'", 
                     "'teaspoons'", "'tablespoon'", "'tablespoons'", "'Method.'", 
                     "'Take'", "'from refrigerator.'", "'Put'", "'into'", 
                     "'mixing bowl.'", "'Liquefy'", "'Liquify'", "'contents of'", 
                     "'Pour contents of'", "'mixing bowl into'", "'baking dish.'", 
                     "'st'", "'nd'", "'rd'", "'th'", "'Serves'", null, null, 
                     "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "WORD", "INT", "PERIOD", "NEWLINE", "WS" ];

var ruleNames =  [ "program", "title", "comments", "ingredients", "ingredient", 
                   "value", "measureType", "measure", "dryMeasure", "liquidMeasure", 
                   "unknownMeasure", "ingredientLabel", "method", "statement", 
                   "stdin", "put", "liquefy", "pour", "nth", "pth", "serves", 
                   "number", "divider" ];

function ChefParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ChefParser.prototype = Object.create(antlr4.Parser.prototype);
ChefParser.prototype.constructor = ChefParser;

Object.defineProperty(ChefParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ChefParser.EOF = antlr4.Token.EOF;
ChefParser.T__0 = 1;
ChefParser.T__1 = 2;
ChefParser.T__2 = 3;
ChefParser.T__3 = 4;
ChefParser.T__4 = 5;
ChefParser.T__5 = 6;
ChefParser.T__6 = 7;
ChefParser.T__7 = 8;
ChefParser.T__8 = 9;
ChefParser.T__9 = 10;
ChefParser.T__10 = 11;
ChefParser.T__11 = 12;
ChefParser.T__12 = 13;
ChefParser.T__13 = 14;
ChefParser.T__14 = 15;
ChefParser.T__15 = 16;
ChefParser.T__16 = 17;
ChefParser.T__17 = 18;
ChefParser.T__18 = 19;
ChefParser.T__19 = 20;
ChefParser.T__20 = 21;
ChefParser.T__21 = 22;
ChefParser.T__22 = 23;
ChefParser.T__23 = 24;
ChefParser.T__24 = 25;
ChefParser.T__25 = 26;
ChefParser.T__26 = 27;
ChefParser.T__27 = 28;
ChefParser.T__28 = 29;
ChefParser.T__29 = 30;
ChefParser.T__30 = 31;
ChefParser.T__31 = 32;
ChefParser.T__32 = 33;
ChefParser.T__33 = 34;
ChefParser.T__34 = 35;
ChefParser.WORD = 36;
ChefParser.INT = 37;
ChefParser.PERIOD = 38;
ChefParser.NEWLINE = 39;
ChefParser.WS = 40;

ChefParser.RULE_program = 0;
ChefParser.RULE_title = 1;
ChefParser.RULE_comments = 2;
ChefParser.RULE_ingredients = 3;
ChefParser.RULE_ingredient = 4;
ChefParser.RULE_value = 5;
ChefParser.RULE_measureType = 6;
ChefParser.RULE_measure = 7;
ChefParser.RULE_dryMeasure = 8;
ChefParser.RULE_liquidMeasure = 9;
ChefParser.RULE_unknownMeasure = 10;
ChefParser.RULE_ingredientLabel = 11;
ChefParser.RULE_method = 12;
ChefParser.RULE_statement = 13;
ChefParser.RULE_stdin = 14;
ChefParser.RULE_put = 15;
ChefParser.RULE_liquefy = 16;
ChefParser.RULE_pour = 17;
ChefParser.RULE_nth = 18;
ChefParser.RULE_pth = 19;
ChefParser.RULE_serves = 20;
ChefParser.RULE_number = 21;
ChefParser.RULE_divider = 22;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

ProgramContext.prototype.ingredients = function() {
    return this.getTypedRuleContext(IngredientsContext,0);
};

ProgramContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};

ProgramContext.prototype.serves = function() {
    return this.getTypedRuleContext(ServesContext,0);
};

ProgramContext.prototype.NEWLINE = function() {
    return this.getToken(ChefParser.NEWLINE, 0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(ChefParser.EOF, 0);
};

ProgramContext.prototype.comments = function() {
    return this.getTypedRuleContext(CommentsContext,0);
};

ProgramContext.prototype.program = function() {
    return this.getTypedRuleContext(ProgramContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitProgram(this);
	}
};




ChefParser.ProgramContext = ProgramContext;

ChefParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ChefParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.title();
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__0 || _la===ChefParser.WORD || _la===ChefParser.PERIOD) {
            this.state = 47;
            this.comments();
        }

        this.state = 50;
        this.ingredients();
        this.state = 51;
        this.method();
        this.state = 52;
        this.serves();
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.WORD) {
            this.state = 53;
            this.program();
        }

        this.state = 56;
        this.match(ChefParser.NEWLINE);
        this.state = 57;
        this.match(ChefParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_title;
    return this;
}

TitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleContext.prototype.constructor = TitleContext;

TitleContext.prototype.PERIOD = function() {
    return this.getToken(ChefParser.PERIOD, 0);
};

TitleContext.prototype.divider = function() {
    return this.getTypedRuleContext(DividerContext,0);
};

TitleContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.WORD);
    } else {
        return this.getToken(ChefParser.WORD, i);
    }
};


TitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterTitle(this);
	}
};

TitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitTitle(this);
	}
};




ChefParser.TitleContext = TitleContext;

ChefParser.prototype.title = function() {

    var localctx = new TitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ChefParser.RULE_title);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 59;
            this.match(ChefParser.WORD);
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChefParser.WORD);
        this.state = 64;
        this.match(ChefParser.PERIOD);
        this.state = 65;
        this.divider();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_comments;
    return this;
}

CommentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentsContext.prototype.constructor = CommentsContext;

CommentsContext.prototype.divider = function() {
    return this.getTypedRuleContext(DividerContext,0);
};

CommentsContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.WORD);
    } else {
        return this.getToken(ChefParser.WORD, i);
    }
};


CommentsContext.prototype.PERIOD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.PERIOD);
    } else {
        return this.getToken(ChefParser.PERIOD, i);
    }
};


CommentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterComments(this);
	}
};

CommentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitComments(this);
	}
};




ChefParser.CommentsContext = CommentsContext;

ChefParser.prototype.comments = function() {

    var localctx = new CommentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ChefParser.RULE_comments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 67;
            _la = this._input.LA(1);
            if(!(_la===ChefParser.T__0 || _la===ChefParser.WORD || _la===ChefParser.PERIOD)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 70; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChefParser.T__0 || _la===ChefParser.WORD || _la===ChefParser.PERIOD);
        this.state = 72;
        this.divider();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IngredientsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_ingredients;
    return this;
}

IngredientsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IngredientsContext.prototype.constructor = IngredientsContext;

IngredientsContext.prototype.NEWLINE = function() {
    return this.getToken(ChefParser.NEWLINE, 0);
};

IngredientsContext.prototype.ingredient = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IngredientContext);
    } else {
        return this.getTypedRuleContext(IngredientContext,i);
    }
};

IngredientsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterIngredients(this);
	}
};

IngredientsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitIngredients(this);
	}
};




ChefParser.IngredientsContext = IngredientsContext;

ChefParser.prototype.ingredients = function() {

    var localctx = new IngredientsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ChefParser.RULE_ingredients);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ChefParser.T__1);
        this.state = 75;
        this.match(ChefParser.NEWLINE);
        this.state = 77; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 76;
            this.ingredient();
            this.state = 79; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__2) | (1 << ChefParser.T__3) | (1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6) | (1 << ChefParser.T__7) | (1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10) | (1 << ChefParser.T__11) | (1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16) | (1 << ChefParser.T__17))) !== 0) || _la===ChefParser.WORD || _la===ChefParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IngredientContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_ingredient;
    return this;
}

IngredientContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IngredientContext.prototype.constructor = IngredientContext;

IngredientContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

IngredientContext.prototype.NEWLINE = function() {
    return this.getToken(ChefParser.NEWLINE, 0);
};

IngredientContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

IngredientContext.prototype.measureType = function() {
    return this.getTypedRuleContext(MeasureTypeContext,0);
};

IngredientContext.prototype.measure = function() {
    return this.getTypedRuleContext(MeasureContext,0);
};

IngredientContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterIngredient(this);
	}
};

IngredientContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitIngredient(this);
	}
};




ChefParser.IngredientContext = IngredientContext;

ChefParser.prototype.ingredient = function() {

    var localctx = new IngredientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ChefParser.RULE_ingredient);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.INT) {
            this.state = 81;
            this.value();
        }

        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__2 || _la===ChefParser.T__3) {
            this.state = 84;
            this.measureType();
        }

        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6) | (1 << ChefParser.T__7) | (1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10) | (1 << ChefParser.T__11) | (1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16) | (1 << ChefParser.T__17))) !== 0)) {
            this.state = 87;
            this.measure();
        }

        this.state = 90;
        this.ingredientLabel();
        this.state = 91;
        this.match(ChefParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitValue(this);
	}
};




ChefParser.ValueContext = ValueContext;

ChefParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ChefParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(ChefParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MeasureTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_measureType;
    return this;
}

MeasureTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MeasureTypeContext.prototype.constructor = MeasureTypeContext;


MeasureTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterMeasureType(this);
	}
};

MeasureTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitMeasureType(this);
	}
};




ChefParser.MeasureTypeContext = MeasureTypeContext;

ChefParser.prototype.measureType = function() {

    var localctx = new MeasureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ChefParser.RULE_measureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        _la = this._input.LA(1);
        if(!(_la===ChefParser.T__2 || _la===ChefParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MeasureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_measure;
    return this;
}

MeasureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MeasureContext.prototype.constructor = MeasureContext;

MeasureContext.prototype.dryMeasure = function() {
    return this.getTypedRuleContext(DryMeasureContext,0);
};

MeasureContext.prototype.liquidMeasure = function() {
    return this.getTypedRuleContext(LiquidMeasureContext,0);
};

MeasureContext.prototype.unknownMeasure = function() {
    return this.getTypedRuleContext(UnknownMeasureContext,0);
};

MeasureContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterMeasure(this);
	}
};

MeasureContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitMeasure(this);
	}
};




ChefParser.MeasureContext = MeasureContext;

ChefParser.prototype.measure = function() {

    var localctx = new MeasureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ChefParser.RULE_measure);
    try {
        this.state = 100;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ChefParser.T__4:
        case ChefParser.T__5:
        case ChefParser.T__6:
        case ChefParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.dryMeasure();
            break;
        case ChefParser.T__8:
        case ChefParser.T__9:
        case ChefParser.T__10:
        case ChefParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.liquidMeasure();
            break;
        case ChefParser.T__12:
        case ChefParser.T__13:
        case ChefParser.T__14:
        case ChefParser.T__15:
        case ChefParser.T__16:
        case ChefParser.T__17:
            this.enterOuterAlt(localctx, 3);
            this.state = 99;
            this.unknownMeasure();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DryMeasureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_dryMeasure;
    return this;
}

DryMeasureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DryMeasureContext.prototype.constructor = DryMeasureContext;


DryMeasureContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterDryMeasure(this);
	}
};

DryMeasureContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitDryMeasure(this);
	}
};




ChefParser.DryMeasureContext = DryMeasureContext;

ChefParser.prototype.dryMeasure = function() {

    var localctx = new DryMeasureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ChefParser.RULE_dryMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6) | (1 << ChefParser.T__7))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiquidMeasureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_liquidMeasure;
    return this;
}

LiquidMeasureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiquidMeasureContext.prototype.constructor = LiquidMeasureContext;


LiquidMeasureContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterLiquidMeasure(this);
	}
};

LiquidMeasureContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitLiquidMeasure(this);
	}
};




ChefParser.LiquidMeasureContext = LiquidMeasureContext;

ChefParser.prototype.liquidMeasure = function() {

    var localctx = new LiquidMeasureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ChefParser.RULE_liquidMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10) | (1 << ChefParser.T__11))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnknownMeasureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_unknownMeasure;
    return this;
}

UnknownMeasureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnknownMeasureContext.prototype.constructor = UnknownMeasureContext;


UnknownMeasureContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterUnknownMeasure(this);
	}
};

UnknownMeasureContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitUnknownMeasure(this);
	}
};




ChefParser.UnknownMeasureContext = UnknownMeasureContext;

ChefParser.prototype.unknownMeasure = function() {

    var localctx = new UnknownMeasureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ChefParser.RULE_unknownMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16) | (1 << ChefParser.T__17))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IngredientLabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_ingredientLabel;
    return this;
}

IngredientLabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IngredientLabelContext.prototype.constructor = IngredientLabelContext;

IngredientLabelContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.WORD);
    } else {
        return this.getToken(ChefParser.WORD, i);
    }
};


IngredientLabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterIngredientLabel(this);
	}
};

IngredientLabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitIngredientLabel(this);
	}
};




ChefParser.IngredientLabelContext = IngredientLabelContext;

ChefParser.prototype.ingredientLabel = function() {

    var localctx = new IngredientLabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ChefParser.RULE_ingredientLabel);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 108;
            this.match(ChefParser.WORD);
            this.state = 111; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChefParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.NEWLINE);
    } else {
        return this.getToken(ChefParser.NEWLINE, i);
    }
};


MethodContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitMethod(this);
	}
};




ChefParser.MethodContext = MethodContext;

ChefParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ChefParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(ChefParser.NEWLINE);
        this.state = 114;
        this.match(ChefParser.T__18);
        this.state = 115;
        this.match(ChefParser.NEWLINE);
        this.state = 117; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 116;
            this.statement();
            this.state = 119; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__19) | (1 << ChefParser.T__21) | (1 << ChefParser.T__24) | (1 << ChefParser.T__25) | (1 << ChefParser.T__27))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.stdin = function() {
    return this.getTypedRuleContext(StdinContext,0);
};

StatementContext.prototype.put = function() {
    return this.getTypedRuleContext(PutContext,0);
};

StatementContext.prototype.liquefy = function() {
    return this.getTypedRuleContext(LiquefyContext,0);
};

StatementContext.prototype.pour = function() {
    return this.getTypedRuleContext(PourContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitStatement(this);
	}
};




ChefParser.StatementContext = StatementContext;

ChefParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ChefParser.RULE_statement);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ChefParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.stdin();
            break;
        case ChefParser.T__21:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.put();
            break;
        case ChefParser.T__24:
        case ChefParser.T__25:
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.liquefy();
            break;
        case ChefParser.T__27:
            this.enterOuterAlt(localctx, 4);
            this.state = 124;
            this.pour();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StdinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_stdin;
    return this;
}

StdinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StdinContext.prototype.constructor = StdinContext;

StdinContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

StdinContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterStdin(this);
	}
};

StdinContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitStdin(this);
	}
};




ChefParser.StdinContext = StdinContext;

ChefParser.prototype.stdin = function() {

    var localctx = new StdinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ChefParser.RULE_stdin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(ChefParser.T__19);
        this.state = 128;
        this.ingredientLabel();
        this.state = 129;
        this.match(ChefParser.T__20);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_put;
    return this;
}

PutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PutContext.prototype.constructor = PutContext;

PutContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

PutContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

PutContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterPut(this);
	}
};

PutContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitPut(this);
	}
};




ChefParser.PutContext = PutContext;

ChefParser.prototype.put = function() {

    var localctx = new PutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ChefParser.RULE_put);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(ChefParser.T__21);
        this.state = 132;
        this.ingredientLabel();
        this.state = 133;
        this.match(ChefParser.T__22);
        this.state = 134;
        this.nth();
        this.state = 135;
        this.match(ChefParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiquefyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_liquefy;
    return this;
}

LiquefyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiquefyContext.prototype.constructor = LiquefyContext;

LiquefyContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

LiquefyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterLiquefy(this);
	}
};

LiquefyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitLiquefy(this);
	}
};




ChefParser.LiquefyContext = LiquefyContext;

ChefParser.prototype.liquefy = function() {

    var localctx = new LiquefyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ChefParser.RULE_liquefy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        _la = this._input.LA(1);
        if(!(_la===ChefParser.T__24 || _la===ChefParser.T__25)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 138;
        this.match(ChefParser.T__26);
        this.state = 139;
        this.nth();
        this.state = 140;
        this.match(ChefParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_pour;
    return this;
}

PourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PourContext.prototype.constructor = PourContext;

PourContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

PourContext.prototype.pth = function() {
    return this.getTypedRuleContext(PthContext,0);
};

PourContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterPour(this);
	}
};

PourContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitPour(this);
	}
};




ChefParser.PourContext = PourContext;

ChefParser.prototype.pour = function() {

    var localctx = new PourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ChefParser.RULE_pour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(ChefParser.T__27);
        this.state = 143;
        this.nth();
        this.state = 144;
        this.match(ChefParser.T__28);
        this.state = 145;
        this.pth();
        this.state = 146;
        this.match(ChefParser.T__29);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_nth;
    return this;
}

NthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NthContext.prototype.constructor = NthContext;

NthContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
};

NthContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterNth(this);
	}
};

NthContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitNth(this);
	}
};




ChefParser.NthContext = NthContext;

ChefParser.prototype.nth = function() {

    var localctx = new NthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ChefParser.RULE_nth);
    try {
        this.state = 157;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.match(ChefParser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(ChefParser.INT);
            this.state = 150;
            this.match(ChefParser.T__30);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 151;
            this.match(ChefParser.INT);
            this.state = 152;
            this.match(ChefParser.T__31);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 153;
            this.match(ChefParser.INT);
            this.state = 154;
            this.match(ChefParser.T__32);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 155;
            this.match(ChefParser.INT);
            this.state = 156;
            this.match(ChefParser.T__33);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_pth;
    return this;
}

PthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PthContext.prototype.constructor = PthContext;

PthContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

PthContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterPth(this);
	}
};

PthContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitPth(this);
	}
};




ChefParser.PthContext = PthContext;

ChefParser.prototype.pth = function() {

    var localctx = new PthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ChefParser.RULE_pth);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.nth();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ServesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_serves;
    return this;
}

ServesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServesContext.prototype.constructor = ServesContext;

ServesContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.NEWLINE);
    } else {
        return this.getToken(ChefParser.NEWLINE, i);
    }
};


ServesContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
};

ServesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterServes(this);
	}
};

ServesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitServes(this);
	}
};




ChefParser.ServesContext = ServesContext;

ChefParser.prototype.serves = function() {

    var localctx = new ServesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ChefParser.RULE_serves);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(ChefParser.NEWLINE);
        this.state = 162;
        this.match(ChefParser.NEWLINE);
        this.state = 163;
        this.match(ChefParser.T__34);
        this.state = 164;
        this.match(ChefParser.INT);
        this.state = 165;
        this.match(ChefParser.PERIOD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.INT);
    } else {
        return this.getToken(ChefParser.INT, i);
    }
};


NumberContext.prototype.PERIOD = function() {
    return this.getToken(ChefParser.PERIOD, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitNumber(this);
	}
};




ChefParser.NumberContext = NumberContext;

ChefParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ChefParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(ChefParser.INT);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.PERIOD) {
            this.state = 168;
            this.match(ChefParser.PERIOD);
            this.state = 169;
            this.match(ChefParser.INT);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DividerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_divider;
    return this;
}

DividerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DividerContext.prototype.constructor = DividerContext;

DividerContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.NEWLINE);
    } else {
        return this.getToken(ChefParser.NEWLINE, i);
    }
};


DividerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterDivider(this);
	}
};

DividerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitDivider(this);
	}
};




ChefParser.DividerContext = DividerContext;

ChefParser.prototype.divider = function() {

    var localctx = new DividerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ChefParser.RULE_divider);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(ChefParser.NEWLINE);
        this.state = 173;
        this.match(ChefParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ChefParser = ChefParser;
