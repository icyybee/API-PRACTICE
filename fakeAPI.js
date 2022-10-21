//FETCH API
async function apiRequest() {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');

    const response = await request.json();
    return response;
}

apiRequest().then(request => {
    console.log(request)
})

// AXIOS API
// async function axiosRequest() {
//     const request = await axios.get('https://jsonplaceholder.typicode.com/users');
        
//     console.log(request);
// }

// axiosRequest();