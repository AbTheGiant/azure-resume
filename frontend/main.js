
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterab.azurewebsites.net/api/GetResumeCounter?code=6E//avEmRawNBpG6rp0/hRw9gBDNOoRCyn07B4nX8KzjO5qTzd2p/A==';
const localFunctionApi= 'http://localhost:3030/api/GetResumeCounter';




const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
    
}