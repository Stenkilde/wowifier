// READ MOCK DATA YO

export const fetchAll = () => {
    fetch('https://gist.githubusercontent.com/Stenkilde/15d7054367d522471903a9eb59b1b9de/raw/0a04355b5c35a4c63fc6c62533ad311657399354/test.json').then(function(response) { 
	    return response.json();
    }).then(function(j) {
        return j;
    });
}