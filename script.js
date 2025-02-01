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
				let filterArr = arr.filter((item)=>item%2==0);
				resolve(filterArr);
			},1000)
		})
	}).then((arr)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			let double = arr.map((item)=>item*2);
		},2000)
	})
}).then((filter)=>{
	output.textContent = `Even Numbers: ${filter}`
}).then((doubleArr)=>{
	output.textContent = `double Numbers: ${doubleArr}`
})
.catch((error) => { console.log('error', error); })