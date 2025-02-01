//your JS code here. If required.

let arr = [1,2,3,4];
let output = document.getElementById('output');
function displays(){
	return new Promise ((resolve, reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	})
}

displays().then((arr)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			let filterArr(()=>{
				let filterArr = arr.filter((item)=>item%2==0);
				resolve(filterArr);
			},1000)
		})
	})
}).then((arr)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			let double = arr.map((item)=>item*2);
		},2000)
	})
}).then((doubleArr)=>{
	output.textContent = `Even Numbers: ${doubleArr}`
})
.catch((error) => { console.log('error', error); })