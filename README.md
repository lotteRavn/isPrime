# isPrime

Your assignment is as follows:

Place the given function in a JavaScript library file.
Write a simple HTML5 document and include the library in the head.
Write another js-file that requires the user to enter a positive integer with max-size of 253-1 = 9007199254740991, eg 9007195909437503 :)
Then it must call isPrime with the entered number as input. The result must be displayed on the page. The code must time the function as follows:

let start = new Date();
let b = isPrime(arg);
let stop = new Date();
let elapsed = stop - start;

Put the three files into their own repo. Test, commit, and correct until it works.
Create a git branch and change isPrime in the branch to a less naive, and faster version. Test, commit, and correct until it works.
Create a second git branch from the previous branch, and change isPrime in the branch to an even less naive, and faster version. Test, commit, and correct until it works.
Hand in the repo with all three branches. This means that you have three working versions of isPrime.


