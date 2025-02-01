let arr = [1, 2, 3, 4];
let output = document.getElementById('output');

function displays() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

displays()
    .then((arr) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const filterArr = arr.filter((item) => Math.floor(item % 2) === 0);
                resolve(filterArr); // Resolve with filtered array
				output.textContent = `${filterArr}`;
            }, 1000);
        }); 
    }) 
    .then((filterArr) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                const doubleArr = filterArr.map((item) => item * 2);
                resolve( doubleArr); 
            }, 2000);  
        });
    })
    .then((doubleArr) => {
        output.textContent = `${doubleArr}`;
    })
    .catch((error) => {
        console.error('Error:', error);




		
    });