(defun display-something (val1 val2)
  (if (< val1 val2)
    (log "First is great"))
    (log "Second is greater"))

(display-something (arg 1) (arg 2))
