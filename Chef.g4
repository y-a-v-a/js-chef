/** Chef programming language  */

grammar Chef;

program
  : title comments? ingredients method serves (program)? NEWLINE EOF
  ;

title
  : (WORD)+ PERIOD divider
  ;

comments
  : (WORD | PERIOD | 'the')+ divider
  ;

ingredients
  : 'Ingredients.' NEWLINE ingredient+
  ;

ingredient
  : value? measureType? measure? ingredientLabel NEWLINE
  ;

value
  : INT
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
  | liquefy
  | pour
  ;

stdin
  : 'Take' ingredientLabel 'from refrigerator.'
  ;

put
  : 'Put' ingredientLabel 'into' nth 'mixing bowl.'
  ;

liquefy
  : ('Liquefy' | 'Liquify') 'contents of' nth 'mixing bowl.'
  ;

pour
  : 'Pour contents of' nth 'mixing bowl into' pth 'baking dish.'
  ;

nth
  : 'the'
  | INT 'st'
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

WORD
  : ('a' .. 'z' | 'A' .. 'Z' | '!' | '"' | ',')+
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

