(defun display-something (val1 val2)
  (console-log (if (< val1 val2) ; if val1 < val2
    "First is smaller"
    "Second is smaller")))

(display-something (num (arg 2)) (num (arg 3)))
