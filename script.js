// complete the given function

function palindrome(str){
	str.trim();
	let n=str.length();
	let l=0;
	let r=n-1;
	let count=0;

	for(let i=0;i<n/2;i++){
		if(str.charAt(l)==str.charAt(r){
			count++;
		})
	}
	if(count==n/2)
		console.log("true");
	else 
		console.log("false");
}
module.exports = palindrome
