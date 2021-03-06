# DecafLISP

A dialect of lisp, meant for the Node.js runtime. What's the use of this? Not much other than to just fool around. In fact, I only wrote it to learn compilers.

## Installation

```shell
# Might require sudo
$ npm install -g decaf-lisp
```

Copy the code into a `hello-world.lisp` file.

```lisp
(console-log "Hello, World!")
```

And then run the code.

```shell
$ decaf-lisp hello-world.lisp
# -> Hello, World!
```

## More examples

### `if`-statements

```lisp
(if (< 5 6)
  ("5 is less than 6!")
  ("Weird..."))
```

If you want the above to outputed to the console, then you would simply prepend the above code with a `console-log` call.

```lisp
(console-log (if (< 5 6)
  ("5 is less than 6!")
  ("Weird...")))
```

### function definition

```lisp
(defun myfunc (somParam)
  (console-log someParam))

; Calling the function.
(myfunc "Hello, World!")
; -> "Hello, World!"
```

### Anonymous functions

```lisp
(console-log
  ((lambda (one, two)
    (+ one two)) 1 2))
; -> "3"
```

### Factorial function

```lisp
(defun fact (n)
  (if (= n)
    1
    (* (- n 1) n)))

(console-log (fact 3))
```

## TODO

* command-line options