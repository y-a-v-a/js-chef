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

## To do

A lot of stuff needs to be done. Basically only processing integers to their ascii characters works. The rest is planned for the future. It will be ready when it's done.

## Resources

* http://www.dangermouse.net/esoteric/chef.html
* https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
* https://github.com/maxbelanger/ratatouille/tree/master/grammar
* http://p-helpers.appspot.com/chef/chef.html

## Program resources

* chef/hello-world.chef is taken from http://www.dangermouse.net/esoteric/chef.html
* chef/fibonacci.chef is taken from http://www.dangermouse.net/esoteric/chef.html
* chef/hello-world-cake.chef is taken from https://esolangs.org/wiki/Chef
* chef/hello-world-2.chef is taken from http://progopedia.com/language/chef/
* chef/factorial.chef is taken from http://progopedia.com/language/chef/
* chef/fibonacci-2.chef is taken from http://progopedia.com/language/chef/

## License

wftpl license applies to code originally written by @y-a-v-a as stated in the applicable files. Source: http://www.wtfpl.net/txt/copying/
