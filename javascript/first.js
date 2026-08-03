> null==undefined
true
> null===underfined
Uncaught ReferenceError: underfined is not defined
> null===undefined
false
> const id3=Symbol.for("id");
undefined
> const id4=Symbol.for("id");
undefined
> id3===id4
true
> const a=10n
undefined
> typeof(a)
'bigint'