// READ MOCK DATA YO
const API = 'https://gist.githubusercontent.com/Stenkilde/15d7054367d522471903a9eb59b1b9de/raw/ef478ea5cd9dd3b9fa290fdb107bce590cab02a3/charcters.json';

export const fetchAll = () => {
    return fetch(API).then(function(response) { 
	    return response.json();
    }).then(function(j) {
        return j;
    });
}