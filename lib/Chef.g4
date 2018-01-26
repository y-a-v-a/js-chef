/**
 * Chef programming language grammar
 *
 * @author y_a_v_a
 * @license wtfpl v2
 * copyleft 2017 - no wrongs reversed
 */

grammar Chef;

program
  : recipe serves (NEWLINE auxiliary)? (NEWLINE)? EOF
  ;

recipe
  : title comments? ingredients method
  ;

auxiliary
  : recipe
  ;

title
  : (WORD)+ PERIOD NEWLINE
  ;

comments
  : NEWLINE (WORD | INT | PERIOD)+ divider
  ;

ingredients
  : 'Ingredients.' NEWLINE ingredient+
  ;

ingredient
  : INT? measureType? measure? ingredientLabel NEWLINE
  ;

measureType
  : 'heaped'
  | 'level'
  ;

measure
  : dryMeasure
  | liquidMeasure
  | unknownMeasure
  ;

dryMeasure
  : 'g'
  | 'kg'
  | 'pinch'
  | 'pinches'
  ;

liquidMeasure
  : 'ml'
  | 'l'
  | 'dash'
  | 'dashes'
  ;

unknownMeasure
  : 'cup'
  | 'cups'
  | 'teaspoon'
  | 'teaspoons'
  | 'tablespoon'
  | 'tablespoons'
  ;

ingredientLabel
  : (WORD)+
  ;

method
  : NEWLINE 'Method.' NEWLINE statement+
  ;

statement
  : stdin
  | put
  | fold
  | add
  | remove
  | combine
  | divide
  | addDry
  | liquefyIngredient
  | liquefy
  | stirBowl
  | stir
  | mix
  | clean
  | pour
  | loopStart
  | loopEnd
  | setAside
  | serveWith
  | refrigerate
  ;

stdin
  : 'Take' ingredientLabel 'from refrigerator.'
  ;

put
  : 'Put' ingredientLabel 'into' ('the' | nth)? 'mixing bowl.'
  ;

fold
  : 'Fold' ingredientLabel 'into' ('the' | nth)? 'mixing bowl.'
  ;

add
  : 'Add' ingredientLabel ('to' ('the' | nth)? 'mixing bowl')? '.'
  ;

remove
  : 'Remove' ingredientLabel ('from' ('the' | nth)? 'mixing bowl')? '.'
  ;

combine
  : 'Combine' ingredientLabel ('into' ('the' | nth)? 'mixing bowl')? '.'
  ;

divide
  : 'Divide' ingredientLabel ('into' ('the' | nth)? 'mixing bowl')? '.'
  ;

addDry
  : 'Add dry ingredients' ('to' ('the' | nth)? 'mixing bowl')? '.'
  ;

liquefyIngredient
  : ('Liquefy' | 'Liquify') ingredientLabel '.'
  ;

liquefy
  : ('Liquefy' | 'Liquify') 'contents of' ('the' | nth)? 'mixing bowl.'
  ;

stirBowl
  : 'Stir' (('the' | nth)? 'mixing bowl')? 'for' INT 'minutes.'
  ;

stir
  : 'Stir' ingredientLabel 'into' ('the' | nth)? 'mixing bowl.'
  ;

mix
  : 'Mix' (('the' | nth)? 'mixing bowl')? 'well.'
  ;

clean
  : 'Clean' ('the' | nth)? 'mixing bowl.'
  ;

pour
  : 'Pour contents of' ('the' | nth)? 'mixing bowl into' ('the' | pth)? 'baking dish.'
  ;

loopStart
  : verb 'the' ingredientLabel '.'
  ;

loopEnd
  : verb ('the' ingredientLabel) 'until' verbed '.'
  ;

setAside
  : 'Set aside.'
  ;

serveWith
  : 'Serve with' WORD '.'
  ;

refrigerate
  : 'Refrigerate' ('for' INT 'hours')? '.'
  ;

nth
  : INT 'st'
  | INT 'nd'
  | INT 'rd'
  | INT 'th'
  ;

pth
  : nth
  ;

serves
  : NEWLINE NEWLINE 'Serves' INT '.'
  ;

number
  : INT (PERIOD INT)?
  ;

divider
  : NEWLINE NEWLINE
  ;

verb
  : WORD
  ;

verbed
  : verb 'ed'
  ;

WORD
  : ('a' .. 'z' | 'A' .. 'Z' | '!' | '"' | ',' | '-')+
  ;

INT
  : ('0' .. '9')+
  ;

PERIOD
  : '.'
  ;

NEWLINE
  : ('\r')? '\n'
  ;

WS
   : [ \t] -> skip
   ;

