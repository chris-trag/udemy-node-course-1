

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
Google's V8 engine is open sources and editable
