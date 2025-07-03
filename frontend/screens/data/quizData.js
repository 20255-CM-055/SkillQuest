export const quizCategories = [
  // JavaScript Categories
  {
    id: 'javascript-easy',
    name: 'JavaScript',
    difficulty: 'Easy',
    gradient: ['#F7DF1E', '#F0DB4F'],
    questions: [
      {
        question: 'Which of the following is the correct way to declare a variable in JavaScript?',
        options: ['var x = 5;', 'variable x = 5;', 'v x = 5;', 'declare x = 5;'],
        correct: 0,
      },
      {
        question: 'What is the result of 3 + "3" in JavaScript?',
        options: ['6', '33', 'Error', 'undefined'],
        correct: 1,
      },
      {
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correct: 0,
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");', 'msgBox("Hello World");'],
        correct: 0,
      },
      {
        question: 'Which operator is used to assign a value to a variable?',
        options: ['*', '=', 'x', '-'],
        correct: 1,
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        options: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
        correct: 2,
      },
      {
        question: 'How do you create a function in JavaScript?',
        options: ['function myFunction() {}', 'create myFunction() {}', 'function = myFunction() {}', 'def myFunction() {}'],
        correct: 0,
      },
      {
        question: 'Which event occurs when the user clicks on an HTML element?',
        options: ['onchange', 'onclick', 'onmouseclick', 'onmouseover'],
        correct: 1,
      },
      {
        question: 'How do you write "Hello World" in JavaScript?',
        options: ['document.write("Hello World")', 'response.write("Hello World")', 'echo("Hello World")', 'print("Hello World")'],
        correct: 0,
      },
      {
        question: 'Which symbol is used for comments in JavaScript?',
        options: ['/* */', '//', 'Both A and B', '<!-- -->'],
        correct: 2,
      },
    ],
  },
  {
    id: 'javascript-medium',
    name: 'JavaScript',
    difficulty: 'Medium',
    gradient: ['#F7DF1E', '#F0DB4F'],
    questions: [
      {
        question: 'What does "typeof null" return in JavaScript?',
        options: ['null', 'undefined', 'object', 'string'],
        correct: 2,
      },
      {
        question: 'Which operator is used for strict equality comparison?',
        options: ['=', '==', '===', '!='],
        correct: 2,
      },
      {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: ['Refers to the current function', 'Refers to the current object', 'Refers to the global object', 'Creates a new variable'],
        correct: 1,
      },
      {
        question: 'Which method is used to remove the last element from an array?',
        options: ['pop()', 'push()', 'shift()', 'splice()'],
        correct: 0,
      },
      {
        question: 'What is a closure in JavaScript?',
        options: ['A way to close the browser', 'A function with access to outer scope', 'A method to end loops', 'A type of variable'],
        correct: 1,
      },
      {
        question: 'What is the difference between let and var?',
        options: ['No difference', 'let has block scope, var has function scope', 'var is newer', 'let is faster'],
        correct: 1,
      },
      {
        question: 'What does the Array.map() method do?',
        options: ['Filters array elements', 'Creates a new array with transformed elements', 'Sorts the array', 'Removes duplicates'],
        correct: 1,
      },
      {
        question: 'What is event bubbling in JavaScript?',
        options: ['Creating new events', 'Events propagating from child to parent', 'Removing events', 'Event optimization'],
        correct: 1,
      },
      {
        question: 'What is the purpose of JSON.stringify()?',
        options: ['Parse JSON string', 'Convert object to JSON string', 'Validate JSON', 'Format JSON'],
        correct: 1,
      },
      {
        question: 'What is the difference between undefined and null?',
        options: ['No difference', 'undefined means not declared, null means intentionally empty', 'null is a string', 'undefined is faster'],
        correct: 1,
      },
    ],
  },
  {
    id: 'javascript-hard',
    name: 'JavaScript',
    difficulty: 'Hard',
    gradient: ['#F7DF1E', '#F0DB4F'],
    questions: [
      {
        question: 'What is the output of: console.log(0.1 + 0.2 === 0.3)?',
        options: ['true', 'false', 'undefined', 'NaN'],
        correct: 1,
      },
      {
        question: 'Which of the following creates a new execution context in JavaScript?',
        options: ['Function call', 'Variable declaration', 'Loop iteration', 'Conditional statement'],
        correct: 0,
      },
      {
        question: 'What is the difference between call() and apply() methods?',
        options: ['No difference', 'call() takes arguments separately, apply() takes an array', 'apply() is faster', 'call() is deprecated'],
        correct: 1,
      },
      {
        question: 'What happens when you use "use strict" in JavaScript?',
        options: ['Makes code run faster', 'Enables strict mode with stricter error checking', 'Disables all errors', 'Makes variables global'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the Symbol data type?',
        options: ['To create mathematical symbols', 'To create unique identifiers', 'To store large numbers', 'To handle strings'],
        correct: 1,
      },
      {
        question: 'What is a Promise in JavaScript?',
        options: ['A guarantee', 'An object representing eventual completion of async operation', 'A type of loop', 'A variable type'],
        correct: 1,
      },
      {
        question: 'What is the difference between async/await and Promises?',
        options: ['No difference', 'async/await is syntactic sugar for Promises', 'Promises are faster', 'async/await is deprecated'],
        correct: 1,
      },
      {
        question: 'What is prototype inheritance in JavaScript?',
        options: ['Class-based inheritance', 'Objects inheriting from other objects', 'Function inheritance', 'Variable inheritance'],
        correct: 1,
      },
      {
        question: 'What is the event loop in JavaScript?',
        options: ['A type of loop', 'Mechanism for handling asynchronous operations', 'Event creation system', 'DOM manipulation'],
        correct: 1,
      },
      {
        question: 'What is hoisting in JavaScript?',
        options: ['Lifting heavy objects', 'Variable and function declarations moved to top of scope', 'Code optimization', 'Memory management'],
        correct: 1,
      },
    ],
  },

  // Python Categories
  {
    id: 'python-easy',
    name: 'Python',
    difficulty: 'Easy',
    gradient: ['orange', '#FFD343'],
    questions: [
      {
        question: 'Which of the following is the correct way to create a list in Python?',
        options: ['list = []', 'list = ()', 'list = {}', 'list = <>'],
        correct: 0,
      },
      {
        question: 'How do you print "Hello World" in Python?',
        options: ['echo "Hello World"', 'print("Hello World")', 'console.log("Hello World")', 'printf("Hello World")'],
        correct: 1,
      },
      {
        question: 'Which keyword is used to define a function in Python?',
        options: ['function', 'def', 'func', 'define'],
        correct: 1,
      },
      {
        question: 'What is the correct file extension for Python files?',
        options: ['.py', '.python', '.pt', '.pyt'],
        correct: 0,
      },
      {
        question: 'Which operator is used for exponentiation in Python?',
        options: ['^', '**', 'exp', 'pow'],
        correct: 1,
      },
      {
        question: 'How do you create a comment in Python?',
        options: ['// comment', '/* comment */', '# comment', '<!-- comment -->'],
        correct: 2,
      },
      {
        question: 'Which of the following is used to get user input in Python?',
        options: ['input()', 'get()', 'read()', 'scan()'],
        correct: 0,
      },
      {
        question: 'What is the correct way to create a dictionary in Python?',
        options: ['dict = []', 'dict = ()', 'dict = {}', 'dict = <>'],
        correct: 2,
      },
      {
        question: 'Which keyword is used for conditional statements in Python?',
        options: ['if', 'when', 'condition', 'check'],
        correct: 0,
      },
      {
        question: 'How do you create a string in Python?',
        options: ['str = "text"', 'str = text', 'str = [text]', 'str = {text}'],
        correct: 0,
      },
    ],
  },
  {
    id: 'python-medium',
    name: 'Python',
    difficulty: 'Medium',
    gradient: ['orange', '#FFD343'],
    questions: [
      {
        question: 'What is the output of print(2 ** 3) in Python?',
        options: ['6', '8', '9', '23'],
        correct: 1,
      },
      {
        question: 'What does the len() function do?',
        options: ['Returns the length of an object', 'Creates a new list', 'Converts to string', 'Sorts a list'],
        correct: 0,
      },
      {
        question: 'Which of the following is a mutable data type in Python?',
        options: ['tuple', 'string', 'list', 'int'],
        correct: 2,
      },
      {
        question: 'What is the purpose of the "self" parameter in Python class methods?',
        options: ['It refers to the class', 'It refers to the current instance', 'It creates a new object', 'It is optional'],
        correct: 1,
      },
      {
        question: 'Which method is used to add an item to the end of a list?',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correct: 1,
      },
      {
        question: 'What is list comprehension in Python?',
        options: ['A way to understand lists', 'Concise way to create lists', 'List documentation', 'List sorting method'],
        correct: 1,
      },
      {
        question: 'What is the difference between == and is in Python?',
        options: ['No difference', '== compares values, is compares identity', 'is is faster', '== is deprecated'],
        correct: 1,
      },
      {
        question: 'What does the range() function return?',
        options: ['A list', 'A tuple', 'A range object', 'A string'],
        correct: 2,
      },
      {
        question: 'What is a lambda function in Python?',
        options: ['A named function', 'An anonymous function', 'A class method', 'A built-in function'],
        correct: 1,
      },
      {
        question: 'What is the purpose of __init__ method?',
        options: ['To delete objects', 'To initialize objects', 'To copy objects', 'To compare objects'],
        correct: 1,
      },
    ],
  },
  {
    id: 'python-hard',
    name: 'Python',
    difficulty: 'Hard',
    gradient: ['orange', '#FFD343'],
    questions: [
      {
        question: 'What is a decorator in Python?',
        options: ['A design pattern', 'A function that modifies another function', 'A type of loop', 'A data structure'],
        correct: 1,
      },
      {
        question: 'What is the Global Interpreter Lock (GIL) in Python?',
        options: ['A security feature', 'A mechanism that prevents multiple threads from executing Python code simultaneously', 'A type of variable', 'A debugging tool'],
        correct: 1,
      },
      {
        question: 'What is the difference between __str__ and __repr__ methods?',
        options: ['No difference', '__str__ is for end users, __repr__ is for developers', '__repr__ is faster', '__str__ is deprecated'],
        correct: 1,
      },
      {
        question: 'What does the "yield" keyword do in Python?',
        options: ['Stops the program', 'Creates a generator', 'Raises an exception', 'Imports a module'],
        correct: 1,
      },
      {
        question: 'What is metaclass in Python?',
        options: ['A parent class', 'A class whose instances are classes', 'A method decorator', 'A type of inheritance'],
        correct: 1,
      },
      {
        question: 'What is the difference between deepcopy and shallow copy?',
        options: ['No difference', 'deepcopy creates independent copy, shallow copy shares references', 'shallow copy is faster', 'deepcopy is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a context manager in Python?',
        options: ['A file manager', 'An object that defines runtime context for executing code', 'A memory manager', 'A process manager'],
        correct: 1,
      },
      {
        question: 'What is the purpose of *args and **kwargs?',
        options: ['Variable arguments and keyword arguments', 'Multiplication operators', 'Import statements', 'Comment syntax'],
        correct: 0,
      },
      {
        question: 'What is monkey patching in Python?',
        options: ['Bug fixing', 'Dynamically modifying classes or modules at runtime', 'Code optimization', 'Testing technique'],
        correct: 1,
      },
      {
        question: 'What is the difference between staticmethod and classmethod?',
        options: ['No difference', 'staticmethod has no access to class, classmethod receives class as first argument', 'classmethod is faster', 'staticmethod is deprecated'],
        correct: 1,
      },
    ],
  },

  // Java Categories
  {
    id: 'java-easy',
    name: 'Java',
    difficulty: 'Easy',
    gradient: ['#ED8B00', '#F89820'],
    questions: [
      {
        question: 'Which keyword is used to create a class in Java?',
        options: ['class', 'Class', 'create', 'new'],
        correct: 0,
      },
      {
        question: 'What is the correct way to create an object in Java?',
        options: ['MyClass obj = new MyClass();', 'MyClass obj = MyClass();', 'obj = new MyClass();', 'new MyClass() obj;'],
        correct: 0,
      },
      {
        question: 'Which method is the entry point of a Java program?',
        options: ['start()', 'main()', 'run()', 'begin()'],
        correct: 1,
      },
      {
        question: 'What is the correct file extension for Java files?',
        options: ['.java', '.class', '.jar', '.jav'],
        correct: 0,
      },
      {
        question: 'Which keyword is used to inherit a class in Java?',
        options: ['inherits', 'extends', 'implements', 'super'],
        correct: 1,
      },
      {
        question: 'How do you print "Hello World" in Java?',
        options: ['System.out.println("Hello World");', 'print("Hello World");', 'console.log("Hello World");', 'echo "Hello World";'],
        correct: 0,
      },
      {
        question: 'Which of the following is a primitive data type in Java?',
        options: ['String', 'int', 'Array', 'Object'],
        correct: 1,
      },
      {
        question: 'What is the correct way to declare an integer variable?',
        options: ['int x;', 'integer x;', 'Int x;', 'INTEGER x;'],
        correct: 0,
      },
      {
        question: 'Which keyword is used to create constants in Java?',
        options: ['const', 'final', 'static', 'constant'],
        correct: 1,
      },
      {
        question: 'What is the correct syntax for a for loop in Java?',
        options: ['for (int i = 0; i < 10; i++)', 'for i in range(10)', 'for (i = 0; i < 10; i++)', 'foreach (int i = 0; i < 10; i++)'],
        correct: 0,
      },
    ],
  },
  {
    id: 'java-medium',
    name: 'Java',
    difficulty: 'Medium',
    gradient: ['#ED8B00', '#F89820'],
    questions: [
      {
        question: 'Which of the following is the correct way to declare a main method in Java?',
        options: [
          'public static void main(String args[])',
          'public void main(String args[])',
          'static public void main(String args[])',
          'Both A and C',
        ],
        correct: 3,
      },
      {
        question: 'What is the default value of a boolean variable in Java?',
        options: ['true', 'false', '0', 'null'],
        correct: 1,
      },
      {
        question: 'What is the size of int data type in Java?',
        options: ['16 bits', '32 bits', '64 bits', '8 bits'],
        correct: 1,
      },
      {
        question: 'Which of the following is not a Java keyword?',
        options: ['static', 'Boolean', 'void', 'private'],
        correct: 1,
      },
      {
        question: 'What is method overloading in Java?',
        options: ['Using same method name with different parameters', 'Overriding parent methods', 'Creating multiple classes', 'Using multiple inheritance'],
        correct: 0,
      },
      {
        question: 'What is the difference between String and StringBuilder?',
        options: ['No difference', 'String is immutable, StringBuilder is mutable', 'StringBuilder is faster', 'String is deprecated'],
        correct: 1,
      },
      {
        question: 'What is encapsulation in Java?',
        options: ['Hiding implementation details', 'Creating multiple classes', 'Using inheritance', 'Method overloading'],
        correct: 0,
      },
      {
        question: 'What is the purpose of the "this" keyword?',
        options: ['Refers to parent class', 'Refers to current object', 'Creates new object', 'Calls static methods'],
        correct: 1,
      },
      {
        question: 'What is an interface in Java?',
        options: ['A class', 'A contract that classes must implement', 'A method', 'A variable'],
        correct: 1,
      },
      {
        question: 'What is the difference between abstract class and interface?',
        options: ['No difference', 'Abstract class can have concrete methods, interface cannot (before Java 8)', 'Interface is faster', 'Abstract class is deprecated'],
        correct: 1,
      },
    ],
  },
  {
    id: 'java-hard',
    name: 'Java',
    difficulty: 'Hard',
    gradient: ['#ED8B00', '#F89820'],
    questions: [
      {
        question: 'What is the difference between ArrayList and LinkedList?',
        options: ['No difference', 'ArrayList uses arrays, LinkedList uses nodes', 'LinkedList is faster', 'ArrayList is deprecated'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the "volatile" keyword in Java?',
        options: ['Makes variables faster', 'Ensures visibility of changes across threads', 'Creates constants', 'Handles exceptions'],
        correct: 1,
      },
      {
        question: 'What is the difference between == and equals() in Java?',
        options: ['No difference', '== compares references, equals() compares content', 'equals() is faster', '== is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a lambda expression in Java?',
        options: ['A type of loop', 'An anonymous function', 'A design pattern', 'A data structure'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the Stream API in Java?',
        options: ['File handling', 'Functional-style operations on collections', 'Network programming', 'GUI development'],
        correct: 1,
      },
      {
        question: 'What is garbage collection in Java?',
        options: ['Manual memory management', 'Automatic memory management', 'File cleanup', 'Code optimization'],
        correct: 1,
      },
      {
        question: 'What is the difference between HashMap and ConcurrentHashMap?',
        options: ['No difference', 'ConcurrentHashMap is thread-safe', 'HashMap is faster', 'ConcurrentHashMap is deprecated'],
        correct: 1,
      },
      {
        question: 'What is reflection in Java?',
        options: ['Code mirroring', 'Ability to inspect and modify classes at runtime', 'Performance optimization', 'Error handling'],
        correct: 1,
      },
      {
        question: 'What is the purpose of synchronized keyword?',
        options: ['Speed optimization', 'Thread synchronization', 'Memory management', 'Exception handling'],
        correct: 1,
      },
      {
        question: 'What is the difference between Comparable and Comparator?',
        options: ['No difference', 'Comparable is for natural ordering, Comparator for custom ordering', 'Comparator is faster', 'Comparable is deprecated'],
        correct: 1,
      },
    ],
  },

  // C++ Categories
  {
    id: 'cpp-easy',
    name: 'C++',
    difficulty: 'Easy',
    gradient: ['#00599C', '#004482'],
    questions: [
      {
        question: 'Which header file is required for input/output operations?',
        options: ['<stdio.h>', '<iostream>', '<conio.h>', '<stdlib.h>'],
        correct: 1,
      },
      {
        question: 'What is the correct way to declare a variable in C++?',
        options: ['int x;', 'integer x;', 'var x;', 'declare x;'],
        correct: 0,
      },
      {
        question: 'Which symbol is used to end a statement in C++?',
        options: ['.', ',', ';', ':'],
        correct: 2,
      },
      {
        question: 'What is the correct way to include a header file?',
        options: ['#include <filename>', 'include <filename>', '#import <filename>', 'using <filename>'],
        correct: 0,
      },
      {
        question: 'Which keyword is used to define a class in C++?',
        options: ['class', 'struct', 'object', 'define'],
        correct: 0,
      },
      {
        question: 'How do you print "Hello World" in C++?',
        options: ['cout << "Hello World";', 'print("Hello World");', 'printf("Hello World");', 'echo "Hello World";'],
        correct: 0,
      },
      {
        question: 'Which operator is used for input in C++?',
        options: ['>>', '<<', '->', '::'],
        correct: 0,
      },
      {
        question: 'What is the correct way to declare a function?',
        options: ['int function();', 'function int();', 'def function();', 'function();'],
        correct: 0,
      },
      {
        question: 'Which namespace is commonly used for standard C++ functions?',
        options: ['std', 'standard', 'cpp', 'system'],
        correct: 0,
      },
      {
        question: 'What is the main function signature in C++?',
        options: ['int main()', 'void main()', 'main()', 'int start()'],
        correct: 0,
      },
    ],
  },
  {
    id: 'cpp-medium',
    name: 'C++',
    difficulty: 'Medium',
    gradient: ['#00599C', '#004482'],
    questions: [
      {
        question: 'Which operator is used to access members of a class through a pointer?',
        options: ['.', '->', '::', '&'],
        correct: 1,
      },
      {
        question: 'What is the correct way to declare a pointer in C++?',
        options: ['int ptr;', 'int *ptr;', 'int &ptr;', 'pointer int ptr;'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the "virtual" keyword in C++?',
        options: ['To create virtual memory', 'To enable polymorphism', 'To create virtual variables', 'To optimize code'],
        correct: 1,
      },
      {
        question: 'Which of the following is used for dynamic memory allocation?',
        options: ['malloc()', 'new', 'alloc()', 'Both A and B'],
        correct: 3,
      },
      {
        question: 'What is a constructor in C++?',
        options: ['A destructor', 'A special method called when object is created', 'A type of variable', 'A loop structure'],
        correct: 1,
      },
      {
        question: 'What is the difference between struct and class in C++?',
        options: ['No difference', 'struct members are public by default, class members are private', 'struct is faster', 'class is deprecated'],
        correct: 1,
      },
      {
        question: 'What is function overloading?',
        options: ['Using same function name with different parameters', 'Calling functions multiple times', 'Creating multiple functions', 'Optimizing functions'],
        correct: 0,
      },
      {
        question: 'What is the purpose of const keyword?',
        options: ['Makes variables faster', 'Makes variables unchangeable', 'Creates constants only', 'Optimizes memory'],
        correct: 1,
      },
      {
        question: 'What is inheritance in C++?',
        options: ['Copying code', 'Deriving new class from existing class', 'Creating multiple classes', 'Optimizing classes'],
        correct: 1,
      },
      {
        question: 'What is the scope resolution operator?',
        options: ['::', '->', '.', '&'],
        correct: 0,
      },
    ],
  },
  {
    id: 'cpp-hard',
    name: 'C++',
    difficulty: 'Hard',
    gradient: ['#00599C', '#004482'],
    questions: [
      {
        question: 'What is RAII in C++?',
        options: ['A design pattern', 'Resource Acquisition Is Initialization', 'A type of inheritance', 'A memory management technique'],
        correct: 1,
      },
      {
        question: 'What is the difference between stack and heap memory?',
        options: ['No difference', 'Stack is automatic, heap is dynamic', 'Heap is faster', 'Stack is unlimited'],
        correct: 1,
      },
      {
        question: 'What is a smart pointer in C++?',
        options: ['A fast pointer', 'A pointer that manages memory automatically', 'A pointer to functions', 'A debugging tool'],
        correct: 1,
      },
      {
        question: 'What is template specialization?',
        options: ['A type of inheritance', 'Providing specific implementation for template', 'A design pattern', 'A compilation technique'],
        correct: 1,
      },
      {
        question: 'What is the purpose of move semantics in C++11?',
        options: ['To move files', 'To optimize resource transfer', 'To change variable types', 'To handle exceptions'],
        correct: 1,
      },
      {
        question: 'What is the difference between unique_ptr and shared_ptr?',
        options: ['No difference', 'unique_ptr has exclusive ownership, shared_ptr allows shared ownership', 'shared_ptr is faster', 'unique_ptr is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a lambda expression in C++?',
        options: ['A type of loop', 'An anonymous function', 'A class method', 'A template'],
        correct: 1,
      },
      {
        question: 'What is the purpose of constexpr?',
        options: ['Runtime constants', 'Compile-time constants and functions', 'Variable optimization', 'Memory management'],
        correct: 1,
      },
      {
        question: 'What is perfect forwarding?',
        options: ['Fast function calls', 'Preserving value category when forwarding arguments', 'Memory optimization', 'Template optimization'],
        correct: 1,
      },
      {
        question: 'What is the difference between override and final?',
        options: ['No difference', 'override ensures virtual function overriding, final prevents further overriding', 'final is faster', 'override is deprecated'],
        correct: 1,
      },
    ],
  },

  // C Categories
  {
    id: 'c-easy',
    name: 'C',
    difficulty: 'Easy',
    gradient: ['#A8B9CC', '#283593'],
    questions: [
      {
        question: 'Which header file contains the declaration of printf()?',
        options: ['<stdio.h>', '<stdlib.h>', '<string.h>', '<conio.h>'],
        correct: 0,
      },
      {
        question: 'What is the size of char data type in C?',
        options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
        correct: 0,
      },
      {
        question: 'Which symbol is used to terminate a statement in C?',
        options: ['.', ',', ';', ':'],
        correct: 2,
      },
      {
        question: 'What is the correct way to declare an integer variable?',
        options: ['int x;', 'integer x;', 'var x;', 'number x;'],
        correct: 0,
      },
      {
        question: 'Which function is used to read a character from keyboard?',
        options: ['getchar()', 'scanf()', 'gets()', 'read()'],
        correct: 0,
      },
      {
        question: 'How do you print "Hello World" in C?',
        options: ['printf("Hello World");', 'print("Hello World");', 'cout << "Hello World";', 'echo "Hello World";'],
        correct: 0,
      },
      {
        question: 'Which operator is used to get the address of a variable?',
        options: ['*', '&', '->', '::'],
        correct: 1,
      },
      {
        question: 'What is the correct format specifier for integer?',
        options: ['%d', '%s', '%c', '%f'],
        correct: 0,
      },
      {
        question: 'Which keyword is used to define constants?',
        options: ['const', 'constant', 'final', 'static'],
        correct: 0,
      },
      {
        question: 'What is the entry point of a C program?',
        options: ['start()', 'main()', 'begin()', 'run()'],
        correct: 1,
      },
    ],
  },
  {
    id: 'c-medium',
    name: 'C',
    difficulty: 'Medium',
    gradient: ['#A8B9CC', '#283593'],
    questions: [
      {
        question: 'Which function is used to allocate memory dynamically in C?',
        options: ['alloc()', 'malloc()', 'memory()', 'new()'],
        correct: 1,
      },
      {
        question: 'What is the correct format specifier for integer in printf()?',
        options: ['%d', '%i', '%int', 'Both A and B'],
        correct: 3,
      },
      {
        question: 'What is a pointer in C?',
        options: ['A data type', 'A variable that stores address', 'A function', 'A keyword'],
        correct: 1,
      },
      {
        question: 'Which operator is used to get the address of a variable?',
        options: ['*', '&', '->', '::'],
        correct: 1,
      },
      {
        question: 'What is the difference between ++i and i++?',
        options: ['No difference', '++i increments before use, i++ increments after use', 'i++ is faster', '++i is deprecated'],
        correct: 1,
      },
      {
        question: 'What is the purpose of sizeof operator?',
        options: ['Gets variable value', 'Gets size of data type or variable', 'Allocates memory', 'Frees memory'],
        correct: 1,
      },
      {
        question: 'What is the difference between array and pointer?',
        options: ['No difference', 'Array is fixed size, pointer can point to different locations', 'Pointer is faster', 'Array is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a structure in C?',
        options: ['A function', 'A user-defined data type', 'A loop', 'A pointer'],
        correct: 1,
      },
      {
        question: 'What is the purpose of free() function?',
        options: ['Allocates memory', 'Deallocates memory', 'Copies memory', 'Moves memory'],
        correct: 1,
      },
      {
        question: 'What is recursion in C?',
        options: ['A loop', 'A function calling itself', 'A data structure', 'A pointer operation'],
        correct: 1,
      },
    ],
  },
  {
    id: 'c-hard',
    name: 'C',
    difficulty: 'Hard',
    gradient: ['#A8B9CC', '#283593'],
    questions: [
      {
        question: 'What is a dangling pointer?',
        options: ['A null pointer', 'A pointer pointing to deallocated memory', 'A pointer to function', 'A wild pointer'],
        correct: 1,
      },
      {
        question: 'What is the difference between malloc() and calloc()?',
        options: ['No difference', 'calloc() initializes memory to zero', 'malloc() is faster', 'calloc() is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a function pointer in C?',
        options: ['A pointer to function', 'A function that returns pointer', 'A pointer inside function', 'A debugging tool'],
        correct: 0,
      },
      {
        question: 'What is the purpose of volatile keyword in C?',
        options: ['Makes variables faster', 'Prevents compiler optimization', 'Creates constants', 'Handles memory'],
        correct: 1,
      },
      {
        question: 'What is memory leak?',
        options: ['Hardware failure', 'Allocated memory not freed', 'Stack overflow', 'Compilation error'],
        correct: 1,
      },
      {
        question: 'What is the difference between static and extern?',
        options: ['No difference', 'static limits scope, extern extends scope', 'extern is faster', 'static is deprecated'],
        correct: 1,
      },
      {
        question: 'What is a union in C?',
        options: ['Multiple structures', 'A data type where members share same memory', 'A function type', 'A pointer type'],
        correct: 1,
      },
      {
        question: 'What is the purpose of register keyword?',
        options: ['Creates variables', 'Suggests storing variable in CPU register', 'Allocates memory', 'Frees memory'],
        correct: 1,
      },
      {
        question: 'What is segmentation fault?',
        options: ['Compilation error', 'Runtime error due to invalid memory access', 'Logic error', 'Syntax error'],
        correct: 1,
      },
      {
        question: 'What is the difference between deep copy and shallow copy?',
        options: ['No difference', 'Deep copy copies all levels, shallow copy copies only first level', 'Shallow copy is faster', 'Deep copy is deprecated'],
        correct: 1,
      },
    ],
  },

  // HTML Categories
  {
    id: 'html-easy',
    name: 'HTML',
    difficulty: 'Easy',
    gradient: ['#E34F26', '#F16529'],
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hypertext Markup Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language',
          'Hypermedia Markup Language',
        ],
        correct: 0,
      },
      {
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correct: 1,
      },
      {
        question: 'Which tag is used to display an image?',
        options: ['<img>', '<image>', '<picture>', '<src>'],
        correct: 0,
      },
      {
        question: 'Which HTML element defines the title of a document?',
        options: ['<meta>', '<title>', '<head>', '<header>'],
        correct: 1,
      },
      {
        question: 'Which tag is used to create a paragraph?',
        options: ['<p>', '<para>', '<paragraph>', '<text>'],
        correct: 0,
      },
      {
        question: 'Which tag is used to create the largest heading?',
        options: ['<h1>', '<h6>', '<heading>', '<header>'],
        correct: 0,
      },
      {
        question: 'Which attribute specifies an alternate text for an image?',
        options: ['alt', 'title', 'src', 'href'],
        correct: 0,
      },
      {
        question: 'Which tag is used to create a line break?',
        options: ['<break>', '<br>', '<lb>', '<newline>'],
        correct: 1,
      },
      {
        question: 'Which tag is used to create a list item?',
        options: ['<li>', '<item>', '<list>', '<ul>'],
        correct: 0,
      },
      {
        question: 'Which tag is used to create bold text?',
        options: ['<bold>', '<b>', '<strong>', 'Both B and C'],
        correct: 3,
      },
    ],
  },
  {
    id: 'html-medium',
    name: 'HTML',
    difficulty: 'Medium',
    gradient: ['#E34F26', '#F16529'],
    questions: [
      {
        question: 'Which attribute specifies the URL of the linked document?',
        options: ['src', 'href', 'link', 'url'],
        correct: 1,
      },
      {
        question: 'Which HTML element is used to define important text?',
        options: ['<important>', '<b>', '<strong>', '<i>'],
        correct: 2,
      },
      {
        question: 'What is the correct HTML for creating a dropdown list?',
        options: ['<select>', '<input type="dropdown">', '<list>', '<dropdown>'],
        correct: 0,
      },
      {
        question: 'Which attribute is used to specify that an input field must be filled out?',
        options: ['validate', 'required', 'placeholder', 'mandatory'],
        correct: 1,
      },
      {
        question: 'What is the correct HTML for making a checkbox?',
        options: ['<input type="check">', '<input type="checkbox">', '<checkbox>', '<check>'],
        correct: 1,
      },
      {
        question: 'Which HTML element is used to specify a footer for a document?',
        options: ['<bottom>', '<footer>', '<section>', '<div>'],
        correct: 1,
      },
      {
        question: 'What is the correct HTML for creating a text area?',
        options: ['<textarea>', '<input type="textbox">', '<textbox>', '<input type="textarea">'],
        correct: 0,
      },
      {
        question: 'Which attribute specifies the width of an image?',
        options: ['width', 'size', 'w', 'dimension'],
        correct: 0,
      },
      {
        question: 'What is the correct HTML for creating a table?',
        options: ['<table>', '<tab>', '<tbl>', '<grid>'],
        correct: 0,
      },
      {
        question: 'Which tag is used to define a table row?',
        options: ['<tr>', '<row>', '<td>', '<table-row>'],
        correct: 0,
      },
    ],
  },
  {
    id: 'html-hard',
    name: 'HTML',
    difficulty: 'Hard',
    gradient: ['#E34F26', '#F16529'],
    questions: [
      {
        question: 'What is the purpose of the <canvas> element?',
        options: ['To display images', 'To draw graphics via JavaScript', 'To create forms', 'To embed videos'],
        correct: 1,
      },
      {
        question: 'Which HTML5 element is used for playing video files?',
        options: ['<movie>', '<video>', '<media>', '<play>'],
        correct: 1,
      },
      {
        question: 'What is the difference between <div> and <span>?',
        options: ['No difference', '<div> is block-level, <span> is inline', '<span> is deprecated', '<div> is faster'],
        correct: 1,
      },
      {
        question: 'What is semantic HTML?',
        options: ['HTML with CSS', 'HTML that conveys meaning', 'HTML with JavaScript', 'HTML5 only'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the data-* attributes?',
        options: ['For styling', 'To store custom data', 'For validation', 'For SEO'],
        correct: 1,
      },
      {
        question: 'What is the difference between localStorage and sessionStorage?',
        options: ['No difference', 'localStorage persists until cleared, sessionStorage expires with session', 'sessionStorage is faster', 'localStorage is deprecated'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the <meta> viewport tag?',
        options: ['SEO optimization', 'Responsive design control', 'Performance optimization', 'Security'],
        correct: 1,
      },
      {
        question: 'What is the difference between <article> and <section>?',
        options: ['No difference', '<article> is standalone content, <section> is thematic grouping', '<section> is deprecated', '<article> is faster'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the defer attribute in script tags?',
        options: ['Loads script immediately', 'Delays script execution until HTML parsing is complete', 'Caches the script', 'Compresses the script'],
        correct: 1,
      },
      {
        question: 'What is the difference between GET and POST methods?',
        options: ['No difference', 'GET sends data in URL, POST sends data in request body', 'POST is faster', 'GET is deprecated'],
        correct: 1,
      },
    ],
  },
];

// Utility function to get random questions from a category
export const getRandomQuestions = (category, count = 5) => {
  const questions = [...category.questions];
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Utility function to get a random category by language and difficulty
export const getRandomCategory = (language, difficulty) => {
  const categories = quizCategories.filter(
    cat => cat.name === language && cat.difficulty === difficulty
  );
  return categories[Math.floor(Math.random() * categories.length)];
};