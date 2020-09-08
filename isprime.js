"use strict"

let n;
const isPrime = function (prime) {

	    for (var i = 3; i < Math.sqrt(prime); i += 2) {
	        if (prime % i === 0) {
	            return false;
	        	}
	        }
	        return true;
	    }

if (n = false) {
	document.write (n);
}


/**
let start = new Date();
let b = isPrime(prime);
let stop = new Date();
let elapsed = stop - start;
} **/