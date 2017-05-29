

**Command Line Interface:** A utility to type commands to your computer rather than clicking

**Arguments:** Values you give your program that affects how it runs
* essentially passing parameters to a function

## Understanding the V8 Javascript Engine
_Processors, Machine Code, and C++_

Microprocessor is a very small machine with parts that work in tandem with electrical inputs and do a job. Not all Microprocessors are the same.

Microprocessors are designed to speak a language that in terms processing Instructions. (IA-32, x86-64, ARM, MIPS are some of the most popular)

Machine code (language: Programming languages spoken by computer processors. _Every_ program you run on your computer has been converted (compiled) into machine code.

Programming languages are compiled into Machine code:
(Levels of abstraction from top to bottom of this list)
- Machine language
  - Assembly language
  - C/C++
  - Javascript - high level programming languages, far removed from the Microprocessor

## Node is written in C++ (important to remember)
It's a C++ program and V8 (the thing that converts JS to machine code) is written in C++

ECMASCRIPT: The standard javascript is based on. Needed because there are so many engines.

**A Javascript Engine:** A program that converts JS code into something the computer processor can understand.

## V8 under the hood
Google's V8 engine is open sources and editable. It's written in C and supports the ECMA standard. In addition, Node extended Javascript in order to be a fully functioning server programming language. Crazy stuff.


## Modules && require

modules.exports exposes values from other sources

### Objects and Object Literals
Name / Value pairs: A name which maps to a value

_The name may be defined more than once, but only can have one value in a any given **context**_

**Object:** A collection of name/value pairs
_The simplest definition when talking about Javascript_


* name
  * name
    * name/value
    * name/value
  * name
    * name/value

Javascript objects are names, connected to Values

* Object
  * Primitive "property"
  * Function "method"
  * Object "property"

**Object Literal:** Name/Value pairs separated by commands and surrounded by curly braces
_This is simply a shorthand way to create Javascript objects in code_

{
  Street: 'Main',
  Number:100,
  Apartment: {
    Floor: 3,
    Number: 301
  }
}


## Inheritance: One Object gets access to the properties and methods of another object.

**Prototypal Inheritance**
"Prototype chain" - access to anything down the Line

### How to we manage this?

### Function constructors
_A normal function that is used to construct objects_
This 'this' variable points to a new empty object, and that object is returned from the function automatically.


### Primitives
_A type of data that represents a single value_
Such as a number or a string. In other words, **not an object**

**Passing by Value or Passing by Reference**
a = b //passing something by value, it gets compiled

**Passing by Reference**
When you reference a value within an Object, you are passing by reference and therefore able to modify the existing values.


## Immediately Invoked Function Expressions (IIFE)

**Scope**
Where in code you have access to a particular variable or function.
