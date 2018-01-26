// Generated from Chef.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ChefListener = require('./ChefListener').ChefListener;
var grammarFileName = "Chef.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003?\u0187\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002[\n\u0002\u0003",
    "\u0002\u0005\u0002^\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003d\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0006\u0005l\n\u0005\r\u0005\u000e\u0005",
    "m\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006",
    "\u0006u\n\u0006\r\u0006\u000e\u0006v\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0006\u0007~\n\u0007\r\u0007\u000e\u0007\u007f",
    "\u0003\b\u0005\b\u0083\n\b\u0003\b\u0005\b\u0086\n\b\u0003\b\u0005\b",
    "\u0089\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u0093\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\u000e\u0006\u000e\u009c\n\u000e\r\u000e\u000e\u000e\u009d",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u00a4\n",
    "\u000f\r\u000f\u000e\u000f\u00a5\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00bc\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c7",
    "\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00d0\n\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u00d9\n\u0014\u0003\u0014\u0005\u0014\u00dc\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00e5\n\u0015\u0003\u0015\u0005\u0015\u00e8\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00f1\n\u0016\u0003\u0016\u0005\u0016\u00f4\n\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u00fd\n\u0017\u0003\u0017\u0005\u0017\u0100",
    "\n\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u0108\n\u0018\u0003\u0018\u0005\u0018\u010b",
    "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u0117\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0005\u001b\u011e\n\u001b\u0003\u001b\u0005\u001b\u0121\n\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u012c\n\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0133",
    "\n\u001d\u0003\u001d\u0005\u001d\u0136\n\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u013d\n\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0144",
    "\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0149\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0005$\u0164\n$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u0170",
    "\n%\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003(\u0005(\u017d\n(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003",
    "+\u0003+\u0003+\u0003+\u0002\u0002,\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "PRT\u0002\b\u0003\u0002;=\u0003\u0002\u0004\u0005\u0003\u0002\u0006",
    "\t\u0003\u0002\n\r\u0003\u0002\u000e\u0013\u0003\u0002$%\u0002\u01a4",
    "\u0002V\u0003\u0002\u0002\u0002\u0004a\u0003\u0002\u0002\u0002\u0006",
    "h\u0003\u0002\u0002\u0002\bk\u0003\u0002\u0002\u0002\nr\u0003\u0002",
    "\u0002\u0002\fz\u0003\u0002\u0002\u0002\u000e\u0082\u0003\u0002\u0002",
    "\u0002\u0010\u008d\u0003\u0002\u0002\u0002\u0012\u0092\u0003\u0002\u0002",
    "\u0002\u0014\u0094\u0003\u0002\u0002\u0002\u0016\u0096\u0003\u0002\u0002",
    "\u0002\u0018\u0098\u0003\u0002\u0002\u0002\u001a\u009b\u0003\u0002\u0002",
    "\u0002\u001c\u009f\u0003\u0002\u0002\u0002\u001e\u00bb\u0003\u0002\u0002",
    "\u0002 \u00bd\u0003\u0002\u0002\u0002\"\u00c1\u0003\u0002\u0002\u0002",
    "$\u00ca\u0003\u0002\u0002\u0002&\u00d3\u0003\u0002\u0002\u0002(\u00df",
    "\u0003\u0002\u0002\u0002*\u00eb\u0003\u0002\u0002\u0002,\u00f7\u0003",
    "\u0002\u0002\u0002.\u0103\u0003\u0002\u0002\u00020\u010e\u0003\u0002",
    "\u0002\u00022\u0112\u0003\u0002\u0002\u00024\u011a\u0003\u0002\u0002",
    "\u00026\u0126\u0003\u0002\u0002\u00028\u012f\u0003\u0002\u0002\u0002",
    ":\u0139\u0003\u0002\u0002\u0002<\u0140\u0003\u0002\u0002\u0002>\u014c",
    "\u0003\u0002\u0002\u0002@\u0151\u0003\u0002\u0002\u0002B\u0159\u0003",
    "\u0002\u0002\u0002D\u015b\u0003\u0002\u0002\u0002F\u015f\u0003\u0002",
    "\u0002\u0002H\u016f\u0003\u0002\u0002\u0002J\u0171\u0003\u0002\u0002",
    "\u0002L\u0173\u0003\u0002\u0002\u0002N\u0179\u0003\u0002\u0002\u0002",
    "P\u017e\u0003\u0002\u0002\u0002R\u0181\u0003\u0002\u0002\u0002T\u0183",
    "\u0003\u0002\u0002\u0002VW\u0005\u0004\u0003\u0002WZ\u0005L\'\u0002",
    "XY\u0007>\u0002\u0002Y[\u0005\u0006\u0004\u0002ZX\u0003\u0002\u0002",
    "\u0002Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\^\u0007",
    ">\u0002\u0002]\\\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^",
    "_\u0003\u0002\u0002\u0002_`\u0007\u0002\u0002\u0003`\u0003\u0003\u0002",
    "\u0002\u0002ac\u0005\b\u0005\u0002bd\u0005\n\u0006\u0002cb\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0005",
    "\f\u0007\u0002fg\u0005\u001c\u000f\u0002g\u0005\u0003\u0002\u0002\u0002",
    "hi\u0005\u0004\u0003\u0002i\u0007\u0003\u0002\u0002\u0002jl\u0007;\u0002",
    "\u0002kj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mk\u0003\u0002",
    "\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0007",
    "=\u0002\u0002pq\u0007>\u0002\u0002q\t\u0003\u0002\u0002\u0002rt\u0007",
    ">\u0002\u0002su\t\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002xy\u0005P)\u0002y\u000b\u0003\u0002\u0002",
    "\u0002z{\u0007\u0003\u0002\u0002{}\u0007>\u0002\u0002|~\u0005\u000e",
    "\b\u0002}|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f",
    "}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080",
    "\r\u0003\u0002\u0002\u0002\u0081\u0083\u0007<\u0002\u0002\u0082\u0081",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0085",
    "\u0003\u0002\u0002\u0002\u0084\u0086\u0005\u0010\t\u0002\u0085\u0084",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088",
    "\u0003\u0002\u0002\u0002\u0087\u0089\u0005\u0012\n\u0002\u0088\u0087",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0003\u0002\u0002\u0002\u008a\u008b\u0005\u001a\u000e\u0002\u008b\u008c",
    "\u0007>\u0002\u0002\u008c\u000f\u0003\u0002\u0002\u0002\u008d\u008e",
    "\t\u0003\u0002\u0002\u008e\u0011\u0003\u0002\u0002\u0002\u008f\u0093",
    "\u0005\u0014\u000b\u0002\u0090\u0093\u0005\u0016\f\u0002\u0091\u0093",
    "\u0005\u0018\r\u0002\u0092\u008f\u0003\u0002\u0002\u0002\u0092\u0090",
    "\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0013",
    "\u0003\u0002\u0002\u0002\u0094\u0095\t\u0004\u0002\u0002\u0095\u0015",
    "\u0003\u0002\u0002\u0002\u0096\u0097\t\u0005\u0002\u0002\u0097\u0017",
    "\u0003\u0002\u0002\u0002\u0098\u0099\t\u0006\u0002\u0002\u0099\u0019",
    "\u0003\u0002\u0002\u0002\u009a\u009c\u0007;\u0002\u0002\u009b\u009a",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009b",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u001b",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0007>\u0002\u0002\u00a0\u00a1",
    "\u0007\u0014\u0002\u0002\u00a1\u00a3\u0007>\u0002\u0002\u00a2\u00a4",
    "\u0005\u001e\u0010\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0003\u0002\u0002\u0002\u00a6\u001d\u0003\u0002\u0002\u0002\u00a7\u00bc",
    "\u0005 \u0011\u0002\u00a8\u00bc\u0005\"\u0012\u0002\u00a9\u00bc\u0005",
    "$\u0013\u0002\u00aa\u00bc\u0005&\u0014\u0002\u00ab\u00bc\u0005(\u0015",
    "\u0002\u00ac\u00bc\u0005*\u0016\u0002\u00ad\u00bc\u0005,\u0017\u0002",
    "\u00ae\u00bc\u0005.\u0018\u0002\u00af\u00bc\u00050\u0019\u0002\u00b0",
    "\u00bc\u00052\u001a\u0002\u00b1\u00bc\u00054\u001b\u0002\u00b2\u00bc",
    "\u00056\u001c\u0002\u00b3\u00bc\u00058\u001d\u0002\u00b4\u00bc\u0005",
    ":\u001e\u0002\u00b5\u00bc\u0005<\u001f\u0002\u00b6\u00bc\u0005> \u0002",
    "\u00b7\u00bc\u0005@!\u0002\u00b8\u00bc\u0005B\"\u0002\u00b9\u00bc\u0005",
    "D#\u0002\u00ba\u00bc\u0005F$\u0002\u00bb\u00a7\u0003\u0002\u0002\u0002",
    "\u00bb\u00a8\u0003\u0002\u0002\u0002\u00bb\u00a9\u0003\u0002\u0002\u0002",
    "\u00bb\u00aa\u0003\u0002\u0002\u0002\u00bb\u00ab\u0003\u0002\u0002\u0002",
    "\u00bb\u00ac\u0003\u0002\u0002\u0002\u00bb\u00ad\u0003\u0002\u0002\u0002",
    "\u00bb\u00ae\u0003\u0002\u0002\u0002\u00bb\u00af\u0003\u0002\u0002\u0002",
    "\u00bb\u00b0\u0003\u0002\u0002\u0002\u00bb\u00b1\u0003\u0002\u0002\u0002",
    "\u00bb\u00b2\u0003\u0002\u0002\u0002\u00bb\u00b3\u0003\u0002\u0002\u0002",
    "\u00bb\u00b4\u0003\u0002\u0002\u0002\u00bb\u00b5\u0003\u0002\u0002\u0002",
    "\u00bb\u00b6\u0003\u0002\u0002\u0002\u00bb\u00b7\u0003\u0002\u0002\u0002",
    "\u00bb\u00b8\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002",
    "\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc\u001f\u0003\u0002\u0002\u0002",
    "\u00bd\u00be\u0007\u0015\u0002\u0002\u00be\u00bf\u0005\u001a\u000e\u0002",
    "\u00bf\u00c0\u0007\u0016\u0002\u0002\u00c0!\u0003\u0002\u0002\u0002",
    "\u00c1\u00c2\u0007\u0017\u0002\u0002\u00c2\u00c3\u0005\u001a\u000e\u0002",
    "\u00c3\u00c6\u0007\u0018\u0002\u0002\u00c4\u00c7\u0007\u0019\u0002\u0002",
    "\u00c5\u00c7\u0005H%\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6",
    "\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007\u001a\u0002\u0002\u00c9",
    "#\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u001b\u0002\u0002\u00cb",
    "\u00cc\u0005\u001a\u000e\u0002\u00cc\u00cf\u0007\u0018\u0002\u0002\u00cd",
    "\u00d0\u0007\u0019\u0002\u0002\u00ce\u00d0\u0005H%\u0002\u00cf\u00cd",
    "\u0003\u0002\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0007\u001a\u0002\u0002\u00d2%\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0007\u001c\u0002\u0002\u00d4\u00db\u0005\u001a\u000e\u0002\u00d5\u00d8",
    "\u0007\u001d\u0002\u0002\u00d6\u00d9\u0007\u0019\u0002\u0002\u00d7\u00d9",
    "\u0005H%\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d7\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da\u0003",
    "\u0002\u0002\u0002\u00da\u00dc\u0007\u001e\u0002\u0002\u00db\u00d5\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0007=\u0002\u0002\u00de\'\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007\u001f\u0002\u0002\u00e0\u00e7\u0005\u001a",
    "\u000e\u0002\u00e1\u00e4\u0007 \u0002\u0002\u00e2\u00e5\u0007\u0019",
    "\u0002\u0002\u00e3\u00e5\u0005H%\u0002\u00e4\u00e2\u0003\u0002\u0002",
    "\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e8\u0007\u001e\u0002",
    "\u0002\u00e7\u00e1\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007=\u0002",
    "\u0002\u00ea)\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007!\u0002\u0002",
    "\u00ec\u00f3\u0005\u001a\u000e\u0002\u00ed\u00f0\u0007\u0018\u0002\u0002",
    "\u00ee\u00f1\u0007\u0019\u0002\u0002\u00ef\u00f1\u0005H%\u0002\u00f0",
    "\u00ee\u0003\u0002\u0002\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f4\u0007\u001e\u0002\u0002\u00f3\u00ed\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5",
    "\u00f6\u0007=\u0002\u0002\u00f6+\u0003\u0002\u0002\u0002\u00f7\u00f8",
    "\u0007\"\u0002\u0002\u00f8\u00ff\u0005\u001a\u000e\u0002\u00f9\u00fc",
    "\u0007\u0018\u0002\u0002\u00fa\u00fd\u0007\u0019\u0002\u0002\u00fb\u00fd",
    "\u0005H%\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003",
    "\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003",
    "\u0002\u0002\u0002\u00fe\u0100\u0007\u001e\u0002\u0002\u00ff\u00f9\u0003",
    "\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101\u0003",
    "\u0002\u0002\u0002\u0101\u0102\u0007=\u0002\u0002\u0102-\u0003\u0002",
    "\u0002\u0002\u0103\u010a\u0007#\u0002\u0002\u0104\u0107\u0007\u001d",
    "\u0002\u0002\u0105\u0108\u0007\u0019\u0002\u0002\u0106\u0108\u0005H",
    "%\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0106\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002",
    "\u0002\u0002\u0109\u010b\u0007\u001e\u0002\u0002\u010a\u0104\u0003\u0002",
    "\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0007=\u0002\u0002\u010d/\u0003\u0002\u0002",
    "\u0002\u010e\u010f\t\u0007\u0002\u0002\u010f\u0110\u0005\u001a\u000e",
    "\u0002\u0110\u0111\u0007=\u0002\u0002\u01111\u0003\u0002\u0002\u0002",
    "\u0112\u0113\t\u0007\u0002\u0002\u0113\u0116\u0007&\u0002\u0002\u0114",
    "\u0117\u0007\u0019\u0002\u0002\u0115\u0117\u0005H%\u0002\u0116\u0114",
    "\u0003\u0002\u0002\u0002\u0116\u0115\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119",
    "\u0007\u001a\u0002\u0002\u01193\u0003\u0002\u0002\u0002\u011a\u0120",
    "\u0007\'\u0002\u0002\u011b\u011e\u0007\u0019\u0002\u0002\u011c\u011e",
    "\u0005H%\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011d\u011c\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u011f\u0003",
    "\u0002\u0002\u0002\u011f\u0121\u0007\u001e\u0002\u0002\u0120\u011d\u0003",
    "\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122\u0003",
    "\u0002\u0002\u0002\u0122\u0123\u0007(\u0002\u0002\u0123\u0124\u0007",
    "<\u0002\u0002\u0124\u0125\u0007)\u0002\u0002\u01255\u0003\u0002\u0002",
    "\u0002\u0126\u0127\u0007\'\u0002\u0002\u0127\u0128\u0005\u001a\u000e",
    "\u0002\u0128\u012b\u0007\u0018\u0002\u0002\u0129\u012c\u0007\u0019\u0002",
    "\u0002\u012a\u012c\u0005H%\u0002\u012b\u0129\u0003\u0002\u0002\u0002",
    "\u012b\u012a\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002",
    "\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u012e\u0007\u001a\u0002\u0002",
    "\u012e7\u0003\u0002\u0002\u0002\u012f\u0135\u0007*\u0002\u0002\u0130",
    "\u0133\u0007\u0019\u0002\u0002\u0131\u0133\u0005H%\u0002\u0132\u0130",
    "\u0003\u0002\u0002\u0002\u0132\u0131\u0003\u0002\u0002\u0002\u0132\u0133",
    "\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0136",
    "\u0007\u001e\u0002\u0002\u0135\u0132\u0003\u0002\u0002\u0002\u0135\u0136",
    "\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0007+\u0002\u0002\u01389\u0003\u0002\u0002\u0002\u0139\u013c\u0007",
    ",\u0002\u0002\u013a\u013d\u0007\u0019\u0002\u0002\u013b\u013d\u0005",
    "H%\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013b\u0003\u0002",
    "\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002",
    "\u0002\u0002\u013e\u013f\u0007\u001a\u0002\u0002\u013f;\u0003\u0002",
    "\u0002\u0002\u0140\u0143\u0007-\u0002\u0002\u0141\u0144\u0007\u0019",
    "\u0002\u0002\u0142\u0144\u0005H%\u0002\u0143\u0141\u0003\u0002\u0002",
    "\u0002\u0143\u0142\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0148\u0007.\u0002",
    "\u0002\u0146\u0149\u0007\u0019\u0002\u0002\u0147\u0149\u0005J&\u0002",
    "\u0148\u0146\u0003\u0002\u0002\u0002\u0148\u0147\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002",
    "\u014a\u014b\u0007/\u0002\u0002\u014b=\u0003\u0002\u0002\u0002\u014c",
    "\u014d\u0005R*\u0002\u014d\u014e\u0007\u0019\u0002\u0002\u014e\u014f",
    "\u0005\u001a\u000e\u0002\u014f\u0150\u0007=\u0002\u0002\u0150?\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0005R*\u0002\u0152\u0153\u0007\u0019",
    "\u0002\u0002\u0153\u0154\u0005\u001a\u000e\u0002\u0154\u0155\u0003\u0002",
    "\u0002\u0002\u0155\u0156\u00070\u0002\u0002\u0156\u0157\u0005T+\u0002",
    "\u0157\u0158\u0007=\u0002\u0002\u0158A\u0003\u0002\u0002\u0002\u0159",
    "\u015a\u00071\u0002\u0002\u015aC\u0003\u0002\u0002\u0002\u015b\u015c",
    "\u00072\u0002\u0002\u015c\u015d\u0007;\u0002\u0002\u015d\u015e\u0007",
    "=\u0002\u0002\u015eE\u0003\u0002\u0002\u0002\u015f\u0163\u00073\u0002",
    "\u0002\u0160\u0161\u0007(\u0002\u0002\u0161\u0162\u0007<\u0002\u0002",
    "\u0162\u0164\u00074\u0002\u0002\u0163\u0160\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002",
    "\u0165\u0166\u0007=\u0002\u0002\u0166G\u0003\u0002\u0002\u0002\u0167",
    "\u0168\u0007<\u0002\u0002\u0168\u0170\u00075\u0002\u0002\u0169\u016a",
    "\u0007<\u0002\u0002\u016a\u0170\u00076\u0002\u0002\u016b\u016c\u0007",
    "<\u0002\u0002\u016c\u0170\u00077\u0002\u0002\u016d\u016e\u0007<\u0002",
    "\u0002\u016e\u0170\u00078\u0002\u0002\u016f\u0167\u0003\u0002\u0002",
    "\u0002\u016f\u0169\u0003\u0002\u0002\u0002\u016f\u016b\u0003\u0002\u0002",
    "\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u0170I\u0003\u0002\u0002",
    "\u0002\u0171\u0172\u0005H%\u0002\u0172K\u0003\u0002\u0002\u0002\u0173",
    "\u0174\u0007>\u0002\u0002\u0174\u0175\u0007>\u0002\u0002\u0175\u0176",
    "\u00079\u0002\u0002\u0176\u0177\u0007<\u0002\u0002\u0177\u0178\u0007",
    "=\u0002\u0002\u0178M\u0003\u0002\u0002\u0002\u0179\u017c\u0007<\u0002",
    "\u0002\u017a\u017b\u0007=\u0002\u0002\u017b\u017d\u0007<\u0002\u0002",
    "\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002",
    "\u017dO\u0003\u0002\u0002\u0002\u017e\u017f\u0007>\u0002\u0002\u017f",
    "\u0180\u0007>\u0002\u0002\u0180Q\u0003\u0002\u0002\u0002\u0181\u0182",
    "\u0007;\u0002\u0002\u0182S\u0003\u0002\u0002\u0002\u0183\u0184\u0005",
    "R*\u0002\u0184\u0185\u0007:\u0002\u0002\u0185U\u0003\u0002\u0002\u0002",
    "\'Z]cmv\u007f\u0082\u0085\u0088\u0092\u009d\u00a5\u00bb\u00c6\u00cf",
    "\u00d8\u00db\u00e4\u00e7\u00f0\u00f3\u00fc\u00ff\u0107\u010a\u0116\u011d",
    "\u0120\u012b\u0132\u0135\u013c\u0143\u0148\u0163\u016f\u017c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Ingredients.'", "'heaped'", "'level'", "'g'", 
                     "'kg'", "'pinch'", "'pinches'", "'ml'", "'l'", "'dash'", 
                     "'dashes'", "'cup'", "'cups'", "'teaspoon'", "'teaspoons'", 
                     "'tablespoon'", "'tablespoons'", "'Method.'", "'Take'", 
                     "'from refrigerator.'", "'Put'", "'into'", "'the'", 
                     "'mixing bowl.'", "'Fold'", "'Add'", "'to'", "'mixing bowl'", 
                     "'Remove'", "'from'", "'Combine'", "'Divide'", "'Add dry ingredients'", 
                     "'Liquefy'", "'Liquify'", "'contents of'", "'Stir'", 
                     "'for'", "'minutes.'", "'Mix'", "'well.'", "'Clean'", 
                     "'Pour contents of'", "'mixing bowl into'", "'baking dish.'", 
                     "'until'", "'Set aside.'", "'Serve with'", "'Refrigerate'", 
                     "'hours'", "'st'", "'nd'", "'rd'", "'th'", "'Serves'", 
                     "'ed'", null, null, "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "WORD", "INT", "PERIOD", "NEWLINE", 
                      "WS" ];

var ruleNames =  [ "program", "recipe", "auxiliary", "title", "comments", 
                   "ingredients", "ingredient", "measureType", "measure", 
                   "dryMeasure", "liquidMeasure", "unknownMeasure", "ingredientLabel", 
                   "method", "statement", "stdin", "put", "fold", "add", 
                   "remove", "combine", "divide", "addDry", "liquefyIngredient", 
                   "liquefy", "stirBowl", "stir", "mix", "clean", "pour", 
                   "loopStart", "loopEnd", "setAside", "serveWith", "refrigerate", 
                   "nth", "pth", "serves", "number", "divider", "verb", 
                   "verbed" ];

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
ChefParser.T__35 = 36;
ChefParser.T__36 = 37;
ChefParser.T__37 = 38;
ChefParser.T__38 = 39;
ChefParser.T__39 = 40;
ChefParser.T__40 = 41;
ChefParser.T__41 = 42;
ChefParser.T__42 = 43;
ChefParser.T__43 = 44;
ChefParser.T__44 = 45;
ChefParser.T__45 = 46;
ChefParser.T__46 = 47;
ChefParser.T__47 = 48;
ChefParser.T__48 = 49;
ChefParser.T__49 = 50;
ChefParser.T__50 = 51;
ChefParser.T__51 = 52;
ChefParser.T__52 = 53;
ChefParser.T__53 = 54;
ChefParser.T__54 = 55;
ChefParser.T__55 = 56;
ChefParser.WORD = 57;
ChefParser.INT = 58;
ChefParser.PERIOD = 59;
ChefParser.NEWLINE = 60;
ChefParser.WS = 61;

ChefParser.RULE_program = 0;
ChefParser.RULE_recipe = 1;
ChefParser.RULE_auxiliary = 2;
ChefParser.RULE_title = 3;
ChefParser.RULE_comments = 4;
ChefParser.RULE_ingredients = 5;
ChefParser.RULE_ingredient = 6;
ChefParser.RULE_measureType = 7;
ChefParser.RULE_measure = 8;
ChefParser.RULE_dryMeasure = 9;
ChefParser.RULE_liquidMeasure = 10;
ChefParser.RULE_unknownMeasure = 11;
ChefParser.RULE_ingredientLabel = 12;
ChefParser.RULE_method = 13;
ChefParser.RULE_statement = 14;
ChefParser.RULE_stdin = 15;
ChefParser.RULE_put = 16;
ChefParser.RULE_fold = 17;
ChefParser.RULE_add = 18;
ChefParser.RULE_remove = 19;
ChefParser.RULE_combine = 20;
ChefParser.RULE_divide = 21;
ChefParser.RULE_addDry = 22;
ChefParser.RULE_liquefyIngredient = 23;
ChefParser.RULE_liquefy = 24;
ChefParser.RULE_stirBowl = 25;
ChefParser.RULE_stir = 26;
ChefParser.RULE_mix = 27;
ChefParser.RULE_clean = 28;
ChefParser.RULE_pour = 29;
ChefParser.RULE_loopStart = 30;
ChefParser.RULE_loopEnd = 31;
ChefParser.RULE_setAside = 32;
ChefParser.RULE_serveWith = 33;
ChefParser.RULE_refrigerate = 34;
ChefParser.RULE_nth = 35;
ChefParser.RULE_pth = 36;
ChefParser.RULE_serves = 37;
ChefParser.RULE_number = 38;
ChefParser.RULE_divider = 39;
ChefParser.RULE_verb = 40;
ChefParser.RULE_verbed = 41;

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

ProgramContext.prototype.recipe = function() {
    return this.getTypedRuleContext(RecipeContext,0);
};

ProgramContext.prototype.serves = function() {
    return this.getTypedRuleContext(ServesContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(ChefParser.EOF, 0);
};

ProgramContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.NEWLINE);
    } else {
        return this.getToken(ChefParser.NEWLINE, i);
    }
};


ProgramContext.prototype.auxiliary = function() {
    return this.getTypedRuleContext(AuxiliaryContext,0);
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
        this.state = 84;
        this.recipe();
        this.state = 85;
        this.serves();
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 86;
            this.match(ChefParser.NEWLINE);
            this.state = 87;
            this.auxiliary();

        }
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.NEWLINE) {
            this.state = 90;
            this.match(ChefParser.NEWLINE);
        }

        this.state = 93;
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

function RecipeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_recipe;
    return this;
}

RecipeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecipeContext.prototype.constructor = RecipeContext;

RecipeContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

RecipeContext.prototype.ingredients = function() {
    return this.getTypedRuleContext(IngredientsContext,0);
};

RecipeContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};

RecipeContext.prototype.comments = function() {
    return this.getTypedRuleContext(CommentsContext,0);
};

RecipeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterRecipe(this);
	}
};

RecipeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitRecipe(this);
	}
};




ChefParser.RecipeContext = RecipeContext;

ChefParser.prototype.recipe = function() {

    var localctx = new RecipeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ChefParser.RULE_recipe);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.title();
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.NEWLINE) {
            this.state = 96;
            this.comments();
        }

        this.state = 99;
        this.ingredients();
        this.state = 100;
        this.method();
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

function AuxiliaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_auxiliary;
    return this;
}

AuxiliaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuxiliaryContext.prototype.constructor = AuxiliaryContext;

AuxiliaryContext.prototype.recipe = function() {
    return this.getTypedRuleContext(RecipeContext,0);
};

AuxiliaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterAuxiliary(this);
	}
};

AuxiliaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitAuxiliary(this);
	}
};




ChefParser.AuxiliaryContext = AuxiliaryContext;

ChefParser.prototype.auxiliary = function() {

    var localctx = new AuxiliaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ChefParser.RULE_auxiliary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.recipe();
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

TitleContext.prototype.NEWLINE = function() {
    return this.getToken(ChefParser.NEWLINE, 0);
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
    this.enterRule(localctx, 6, ChefParser.RULE_title);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 104;
            this.match(ChefParser.WORD);
            this.state = 107; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChefParser.WORD);
        this.state = 109;
        this.match(ChefParser.PERIOD);
        this.state = 110;
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

CommentsContext.prototype.NEWLINE = function() {
    return this.getToken(ChefParser.NEWLINE, 0);
};

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


CommentsContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChefParser.INT);
    } else {
        return this.getToken(ChefParser.INT, i);
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
    this.enterRule(localctx, 8, ChefParser.RULE_comments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(ChefParser.NEWLINE);
        this.state = 114; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 113;
            _la = this._input.LA(1);
            if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ChefParser.WORD - 57)) | (1 << (ChefParser.INT - 57)) | (1 << (ChefParser.PERIOD - 57)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 116; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (ChefParser.WORD - 57)) | (1 << (ChefParser.INT - 57)) | (1 << (ChefParser.PERIOD - 57)))) !== 0));
        this.state = 118;
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
    this.enterRule(localctx, 10, ChefParser.RULE_ingredients);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(ChefParser.T__0);
        this.state = 121;
        this.match(ChefParser.NEWLINE);
        this.state = 123; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 122;
            this.ingredient();
            this.state = 125; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__1) | (1 << ChefParser.T__2) | (1 << ChefParser.T__3) | (1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6) | (1 << ChefParser.T__7) | (1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10) | (1 << ChefParser.T__11) | (1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16))) !== 0) || _la===ChefParser.WORD || _la===ChefParser.INT);
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

IngredientContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
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
    this.enterRule(localctx, 12, ChefParser.RULE_ingredient);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.INT) {
            this.state = 127;
            this.match(ChefParser.INT);
        }

        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__1 || _la===ChefParser.T__2) {
            this.state = 130;
            this.measureType();
        }

        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__3) | (1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6) | (1 << ChefParser.T__7) | (1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10) | (1 << ChefParser.T__11) | (1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16))) !== 0)) {
            this.state = 133;
            this.measure();
        }

        this.state = 136;
        this.ingredientLabel();
        this.state = 137;
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
    this.enterRule(localctx, 14, ChefParser.RULE_measureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(_la===ChefParser.T__1 || _la===ChefParser.T__2)) {
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
    this.enterRule(localctx, 16, ChefParser.RULE_measure);
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ChefParser.T__3:
        case ChefParser.T__4:
        case ChefParser.T__5:
        case ChefParser.T__6:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.dryMeasure();
            break;
        case ChefParser.T__7:
        case ChefParser.T__8:
        case ChefParser.T__9:
        case ChefParser.T__10:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.liquidMeasure();
            break;
        case ChefParser.T__11:
        case ChefParser.T__12:
        case ChefParser.T__13:
        case ChefParser.T__14:
        case ChefParser.T__15:
        case ChefParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
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
    this.enterRule(localctx, 18, ChefParser.RULE_dryMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__3) | (1 << ChefParser.T__4) | (1 << ChefParser.T__5) | (1 << ChefParser.T__6))) !== 0))) {
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
    this.enterRule(localctx, 20, ChefParser.RULE_liquidMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__7) | (1 << ChefParser.T__8) | (1 << ChefParser.T__9) | (1 << ChefParser.T__10))) !== 0))) {
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
    this.enterRule(localctx, 22, ChefParser.RULE_unknownMeasure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__11) | (1 << ChefParser.T__12) | (1 << ChefParser.T__13) | (1 << ChefParser.T__14) | (1 << ChefParser.T__15) | (1 << ChefParser.T__16))) !== 0))) {
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
    this.enterRule(localctx, 24, ChefParser.RULE_ingredientLabel);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 152;
            this.match(ChefParser.WORD);
            this.state = 155; 
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
    this.enterRule(localctx, 26, ChefParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(ChefParser.NEWLINE);
        this.state = 158;
        this.match(ChefParser.T__17);
        this.state = 159;
        this.match(ChefParser.NEWLINE);
        this.state = 161; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 160;
            this.statement();
            this.state = 163; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ChefParser.T__18) | (1 << ChefParser.T__20) | (1 << ChefParser.T__24) | (1 << ChefParser.T__25) | (1 << ChefParser.T__28) | (1 << ChefParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ChefParser.T__31 - 32)) | (1 << (ChefParser.T__32 - 32)) | (1 << (ChefParser.T__33 - 32)) | (1 << (ChefParser.T__34 - 32)) | (1 << (ChefParser.T__36 - 32)) | (1 << (ChefParser.T__39 - 32)) | (1 << (ChefParser.T__41 - 32)) | (1 << (ChefParser.T__42 - 32)) | (1 << (ChefParser.T__46 - 32)) | (1 << (ChefParser.T__47 - 32)) | (1 << (ChefParser.T__48 - 32)) | (1 << (ChefParser.WORD - 32)))) !== 0));
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

StatementContext.prototype.fold = function() {
    return this.getTypedRuleContext(FoldContext,0);
};

StatementContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

StatementContext.prototype.remove = function() {
    return this.getTypedRuleContext(RemoveContext,0);
};

StatementContext.prototype.combine = function() {
    return this.getTypedRuleContext(CombineContext,0);
};

StatementContext.prototype.divide = function() {
    return this.getTypedRuleContext(DivideContext,0);
};

StatementContext.prototype.addDry = function() {
    return this.getTypedRuleContext(AddDryContext,0);
};

StatementContext.prototype.liquefyIngredient = function() {
    return this.getTypedRuleContext(LiquefyIngredientContext,0);
};

StatementContext.prototype.liquefy = function() {
    return this.getTypedRuleContext(LiquefyContext,0);
};

StatementContext.prototype.stirBowl = function() {
    return this.getTypedRuleContext(StirBowlContext,0);
};

StatementContext.prototype.stir = function() {
    return this.getTypedRuleContext(StirContext,0);
};

StatementContext.prototype.mix = function() {
    return this.getTypedRuleContext(MixContext,0);
};

StatementContext.prototype.clean = function() {
    return this.getTypedRuleContext(CleanContext,0);
};

StatementContext.prototype.pour = function() {
    return this.getTypedRuleContext(PourContext,0);
};

StatementContext.prototype.loopStart = function() {
    return this.getTypedRuleContext(LoopStartContext,0);
};

StatementContext.prototype.loopEnd = function() {
    return this.getTypedRuleContext(LoopEndContext,0);
};

StatementContext.prototype.setAside = function() {
    return this.getTypedRuleContext(SetAsideContext,0);
};

StatementContext.prototype.serveWith = function() {
    return this.getTypedRuleContext(ServeWithContext,0);
};

StatementContext.prototype.refrigerate = function() {
    return this.getTypedRuleContext(RefrigerateContext,0);
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
    this.enterRule(localctx, 28, ChefParser.RULE_statement);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.stdin();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
            this.put();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 167;
            this.fold();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 168;
            this.add();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 169;
            this.remove();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 170;
            this.combine();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 171;
            this.divide();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 172;
            this.addDry();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 173;
            this.liquefyIngredient();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 174;
            this.liquefy();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 175;
            this.stirBowl();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 176;
            this.stir();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 177;
            this.mix();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 178;
            this.clean();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 179;
            this.pour();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 180;
            this.loopStart();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 181;
            this.loopEnd();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 182;
            this.setAside();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 183;
            this.serveWith();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 184;
            this.refrigerate();
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
    this.enterRule(localctx, 30, ChefParser.RULE_stdin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(ChefParser.T__18);
        this.state = 188;
        this.ingredientLabel();
        this.state = 189;
        this.match(ChefParser.T__19);
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
    this.enterRule(localctx, 32, ChefParser.RULE_put);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(ChefParser.T__20);
        this.state = 192;
        this.ingredientLabel();
        this.state = 193;
        this.match(ChefParser.T__21);
        this.state = 196;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 194;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 195;
        	this.nth();
        	break;
        case ChefParser.T__23:
        	break;
        default:
        	break;
        }
        this.state = 198;
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

function FoldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_fold;
    return this;
}

FoldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FoldContext.prototype.constructor = FoldContext;

FoldContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

FoldContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

FoldContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterFold(this);
	}
};

FoldContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitFold(this);
	}
};




ChefParser.FoldContext = FoldContext;

ChefParser.prototype.fold = function() {

    var localctx = new FoldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ChefParser.RULE_fold);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(ChefParser.T__24);
        this.state = 201;
        this.ingredientLabel();
        this.state = 202;
        this.match(ChefParser.T__21);
        this.state = 205;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 203;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 204;
        	this.nth();
        	break;
        case ChefParser.T__23:
        	break;
        default:
        	break;
        }
        this.state = 207;
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

function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_add;
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;

AddContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

AddContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitAdd(this);
	}
};




ChefParser.AddContext = AddContext;

ChefParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ChefParser.RULE_add);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(ChefParser.T__25);
        this.state = 210;
        this.ingredientLabel();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__26) {
            this.state = 211;
            this.match(ChefParser.T__26);
            this.state = 214;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 212;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 213;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 216;
            this.match(ChefParser.T__27);
        }

        this.state = 219;
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

function RemoveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_remove;
    return this;
}

RemoveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemoveContext.prototype.constructor = RemoveContext;

RemoveContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

RemoveContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

RemoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterRemove(this);
	}
};

RemoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitRemove(this);
	}
};




ChefParser.RemoveContext = RemoveContext;

ChefParser.prototype.remove = function() {

    var localctx = new RemoveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ChefParser.RULE_remove);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(ChefParser.T__28);
        this.state = 222;
        this.ingredientLabel();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__29) {
            this.state = 223;
            this.match(ChefParser.T__29);
            this.state = 226;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 224;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 225;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 228;
            this.match(ChefParser.T__27);
        }

        this.state = 231;
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

function CombineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_combine;
    return this;
}

CombineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CombineContext.prototype.constructor = CombineContext;

CombineContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

CombineContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

CombineContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterCombine(this);
	}
};

CombineContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitCombine(this);
	}
};




ChefParser.CombineContext = CombineContext;

ChefParser.prototype.combine = function() {

    var localctx = new CombineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ChefParser.RULE_combine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(ChefParser.T__30);
        this.state = 234;
        this.ingredientLabel();
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__21) {
            this.state = 235;
            this.match(ChefParser.T__21);
            this.state = 238;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 236;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 237;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 240;
            this.match(ChefParser.T__27);
        }

        this.state = 243;
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

function DivideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_divide;
    return this;
}

DivideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideContext.prototype.constructor = DivideContext;

DivideContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

DivideContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

DivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterDivide(this);
	}
};

DivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitDivide(this);
	}
};




ChefParser.DivideContext = DivideContext;

ChefParser.prototype.divide = function() {

    var localctx = new DivideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ChefParser.RULE_divide);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(ChefParser.T__31);
        this.state = 246;
        this.ingredientLabel();
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__21) {
            this.state = 247;
            this.match(ChefParser.T__21);
            this.state = 250;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 248;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 249;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 252;
            this.match(ChefParser.T__27);
        }

        this.state = 255;
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

function AddDryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_addDry;
    return this;
}

AddDryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddDryContext.prototype.constructor = AddDryContext;

AddDryContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

AddDryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterAddDry(this);
	}
};

AddDryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitAddDry(this);
	}
};




ChefParser.AddDryContext = AddDryContext;

ChefParser.prototype.addDry = function() {

    var localctx = new AddDryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ChefParser.RULE_addDry);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(ChefParser.T__32);
        this.state = 264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__26) {
            this.state = 258;
            this.match(ChefParser.T__26);
            this.state = 261;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 259;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 260;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 263;
            this.match(ChefParser.T__27);
        }

        this.state = 266;
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

function LiquefyIngredientContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_liquefyIngredient;
    return this;
}

LiquefyIngredientContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiquefyIngredientContext.prototype.constructor = LiquefyIngredientContext;

LiquefyIngredientContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

LiquefyIngredientContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterLiquefyIngredient(this);
	}
};

LiquefyIngredientContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitLiquefyIngredient(this);
	}
};




ChefParser.LiquefyIngredientContext = LiquefyIngredientContext;

ChefParser.prototype.liquefyIngredient = function() {

    var localctx = new LiquefyIngredientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ChefParser.RULE_liquefyIngredient);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        _la = this._input.LA(1);
        if(!(_la===ChefParser.T__33 || _la===ChefParser.T__34)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 269;
        this.ingredientLabel();
        this.state = 270;
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
    this.enterRule(localctx, 48, ChefParser.RULE_liquefy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        _la = this._input.LA(1);
        if(!(_la===ChefParser.T__33 || _la===ChefParser.T__34)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 273;
        this.match(ChefParser.T__35);
        this.state = 276;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 274;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 275;
        	this.nth();
        	break;
        case ChefParser.T__23:
        	break;
        default:
        	break;
        }
        this.state = 278;
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

function StirBowlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_stirBowl;
    return this;
}

StirBowlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StirBowlContext.prototype.constructor = StirBowlContext;

StirBowlContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
};

StirBowlContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

StirBowlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterStirBowl(this);
	}
};

StirBowlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitStirBowl(this);
	}
};




ChefParser.StirBowlContext = StirBowlContext;

ChefParser.prototype.stirBowl = function() {

    var localctx = new StirBowlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ChefParser.RULE_stirBowl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(ChefParser.T__36);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__22 || _la===ChefParser.T__27 || _la===ChefParser.INT) {
            this.state = 283;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 281;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 282;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 285;
            this.match(ChefParser.T__27);
        }

        this.state = 288;
        this.match(ChefParser.T__37);
        this.state = 289;
        this.match(ChefParser.INT);
        this.state = 290;
        this.match(ChefParser.T__38);
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

function StirContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_stir;
    return this;
}

StirContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StirContext.prototype.constructor = StirContext;

StirContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

StirContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

StirContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterStir(this);
	}
};

StirContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitStir(this);
	}
};




ChefParser.StirContext = StirContext;

ChefParser.prototype.stir = function() {

    var localctx = new StirContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ChefParser.RULE_stir);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(ChefParser.T__36);
        this.state = 293;
        this.ingredientLabel();
        this.state = 294;
        this.match(ChefParser.T__21);
        this.state = 297;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 295;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 296;
        	this.nth();
        	break;
        case ChefParser.T__23:
        	break;
        default:
        	break;
        }
        this.state = 299;
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

function MixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_mix;
    return this;
}

MixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixContext.prototype.constructor = MixContext;

MixContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

MixContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterMix(this);
	}
};

MixContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitMix(this);
	}
};




ChefParser.MixContext = MixContext;

ChefParser.prototype.mix = function() {

    var localctx = new MixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ChefParser.RULE_mix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(ChefParser.T__39);
        this.state = 307;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__22 || _la===ChefParser.T__27 || _la===ChefParser.INT) {
            this.state = 304;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case ChefParser.T__22:
            	this.state = 302;
            	this.match(ChefParser.T__22);
            	break;
            case ChefParser.INT:
            	this.state = 303;
            	this.nth();
            	break;
            case ChefParser.T__27:
            	break;
            default:
            	break;
            }
            this.state = 306;
            this.match(ChefParser.T__27);
        }

        this.state = 309;
        this.match(ChefParser.T__40);
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

function CleanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_clean;
    return this;
}

CleanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CleanContext.prototype.constructor = CleanContext;

CleanContext.prototype.nth = function() {
    return this.getTypedRuleContext(NthContext,0);
};

CleanContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterClean(this);
	}
};

CleanContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitClean(this);
	}
};




ChefParser.CleanContext = CleanContext;

ChefParser.prototype.clean = function() {

    var localctx = new CleanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ChefParser.RULE_clean);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(ChefParser.T__41);
        this.state = 314;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 312;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 313;
        	this.nth();
        	break;
        case ChefParser.T__23:
        	break;
        default:
        	break;
        }
        this.state = 316;
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
    this.enterRule(localctx, 58, ChefParser.RULE_pour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(ChefParser.T__42);
        this.state = 321;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 319;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 320;
        	this.nth();
        	break;
        case ChefParser.T__43:
        	break;
        default:
        	break;
        }
        this.state = 323;
        this.match(ChefParser.T__43);
        this.state = 326;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ChefParser.T__22:
        	this.state = 324;
        	this.match(ChefParser.T__22);
        	break;
        case ChefParser.INT:
        	this.state = 325;
        	this.pth();
        	break;
        case ChefParser.T__44:
        	break;
        default:
        	break;
        }
        this.state = 328;
        this.match(ChefParser.T__44);
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

function LoopStartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_loopStart;
    return this;
}

LoopStartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopStartContext.prototype.constructor = LoopStartContext;

LoopStartContext.prototype.verb = function() {
    return this.getTypedRuleContext(VerbContext,0);
};

LoopStartContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

LoopStartContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterLoopStart(this);
	}
};

LoopStartContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitLoopStart(this);
	}
};




ChefParser.LoopStartContext = LoopStartContext;

ChefParser.prototype.loopStart = function() {

    var localctx = new LoopStartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ChefParser.RULE_loopStart);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.verb();
        this.state = 331;
        this.match(ChefParser.T__22);
        this.state = 332;
        this.ingredientLabel();
        this.state = 333;
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

function LoopEndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_loopEnd;
    return this;
}

LoopEndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopEndContext.prototype.constructor = LoopEndContext;

LoopEndContext.prototype.verb = function() {
    return this.getTypedRuleContext(VerbContext,0);
};

LoopEndContext.prototype.verbed = function() {
    return this.getTypedRuleContext(VerbedContext,0);
};

LoopEndContext.prototype.ingredientLabel = function() {
    return this.getTypedRuleContext(IngredientLabelContext,0);
};

LoopEndContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterLoopEnd(this);
	}
};

LoopEndContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitLoopEnd(this);
	}
};




ChefParser.LoopEndContext = LoopEndContext;

ChefParser.prototype.loopEnd = function() {

    var localctx = new LoopEndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ChefParser.RULE_loopEnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.verb();

        this.state = 336;
        this.match(ChefParser.T__22);
        this.state = 337;
        this.ingredientLabel();
        this.state = 339;
        this.match(ChefParser.T__45);
        this.state = 340;
        this.verbed();
        this.state = 341;
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

function SetAsideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_setAside;
    return this;
}

SetAsideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetAsideContext.prototype.constructor = SetAsideContext;


SetAsideContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterSetAside(this);
	}
};

SetAsideContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitSetAside(this);
	}
};




ChefParser.SetAsideContext = SetAsideContext;

ChefParser.prototype.setAside = function() {

    var localctx = new SetAsideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ChefParser.RULE_setAside);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(ChefParser.T__46);
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

function ServeWithContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_serveWith;
    return this;
}

ServeWithContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServeWithContext.prototype.constructor = ServeWithContext;

ServeWithContext.prototype.WORD = function() {
    return this.getToken(ChefParser.WORD, 0);
};

ServeWithContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterServeWith(this);
	}
};

ServeWithContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitServeWith(this);
	}
};




ChefParser.ServeWithContext = ServeWithContext;

ChefParser.prototype.serveWith = function() {

    var localctx = new ServeWithContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ChefParser.RULE_serveWith);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(ChefParser.T__47);
        this.state = 346;
        this.match(ChefParser.WORD);
        this.state = 347;
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

function RefrigerateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_refrigerate;
    return this;
}

RefrigerateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefrigerateContext.prototype.constructor = RefrigerateContext;

RefrigerateContext.prototype.INT = function() {
    return this.getToken(ChefParser.INT, 0);
};

RefrigerateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterRefrigerate(this);
	}
};

RefrigerateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitRefrigerate(this);
	}
};




ChefParser.RefrigerateContext = RefrigerateContext;

ChefParser.prototype.refrigerate = function() {

    var localctx = new RefrigerateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ChefParser.RULE_refrigerate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        this.match(ChefParser.T__48);
        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.T__37) {
            this.state = 350;
            this.match(ChefParser.T__37);
            this.state = 351;
            this.match(ChefParser.INT);
            this.state = 352;
            this.match(ChefParser.T__49);
        }

        this.state = 355;
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
    this.enterRule(localctx, 70, ChefParser.RULE_nth);
    try {
        this.state = 365;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 357;
            this.match(ChefParser.INT);
            this.state = 358;
            this.match(ChefParser.T__50);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 359;
            this.match(ChefParser.INT);
            this.state = 360;
            this.match(ChefParser.T__51);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 361;
            this.match(ChefParser.INT);
            this.state = 362;
            this.match(ChefParser.T__52);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 363;
            this.match(ChefParser.INT);
            this.state = 364;
            this.match(ChefParser.T__53);
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
    this.enterRule(localctx, 72, ChefParser.RULE_pth);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
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
    this.enterRule(localctx, 74, ChefParser.RULE_serves);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.match(ChefParser.NEWLINE);
        this.state = 370;
        this.match(ChefParser.NEWLINE);
        this.state = 371;
        this.match(ChefParser.T__54);
        this.state = 372;
        this.match(ChefParser.INT);
        this.state = 373;
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
    this.enterRule(localctx, 76, ChefParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(ChefParser.INT);
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChefParser.PERIOD) {
            this.state = 376;
            this.match(ChefParser.PERIOD);
            this.state = 377;
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
    this.enterRule(localctx, 78, ChefParser.RULE_divider);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(ChefParser.NEWLINE);
        this.state = 381;
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

function VerbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_verb;
    return this;
}

VerbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbContext.prototype.constructor = VerbContext;

VerbContext.prototype.WORD = function() {
    return this.getToken(ChefParser.WORD, 0);
};

VerbContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterVerb(this);
	}
};

VerbContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitVerb(this);
	}
};




ChefParser.VerbContext = VerbContext;

ChefParser.prototype.verb = function() {

    var localctx = new VerbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ChefParser.RULE_verb);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.match(ChefParser.WORD);
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

function VerbedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChefParser.RULE_verbed;
    return this;
}

VerbedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbedContext.prototype.constructor = VerbedContext;

VerbedContext.prototype.verb = function() {
    return this.getTypedRuleContext(VerbContext,0);
};

VerbedContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.enterVerbed(this);
	}
};

VerbedContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChefListener ) {
        listener.exitVerbed(this);
	}
};




ChefParser.VerbedContext = VerbedContext;

ChefParser.prototype.verbed = function() {

    var localctx = new VerbedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ChefParser.RULE_verbed);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.verb();
        this.state = 386;
        this.match(ChefParser.T__55);
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
