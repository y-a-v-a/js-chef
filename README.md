# js-chef
JavaScript parser for Chef programming language

## Commands

Prerequisites

```bash
$ npm install
```

Get antlr to process the gramar:

```bash
$ antlr Chef.g4 -Dlanguage=JavaScript
```

Run the js-chef parser:

```bash
$ node index.js
```


## Resources

* http://www.dangermouse.net/esoteric/chef.html
* https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
* https://github.com/maxbelanger/ratatouille/tree/master/grammar
