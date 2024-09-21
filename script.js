
const accessKey="knRhd0HxqUgz1VdOQMRlJHwLB3lCdE3Z2JlJAWJ8jc0";

const searchform = document.getElementById("search_form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

let keyword ="";
let page = 1;

async function searchImage() {
    keyword = searchbox.value;
    const url = `https://real-time-image-search.p.rapidapi.com/search?query=${keyword}&limit=9&size=any&color=any&type=any&time=any&usage_rights=any&file_type=any&aspect_ratio=any&safe_search=off&region=us`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e70ec89dd0msh7bb105e4154aa21p135627jsn78a1fd5cd0f6',
            'x-rapidapi-host': 'real-time-image-search.p.rapidapi.com'
        }
    };

    //const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data);
    
    if(page===1){
        searchresult.innerHTML="";
    }

    const results = data.data;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.url;

        const imageLink = document.createElement("a");
        imageLink.href = result.source_url;        
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);


    })
    showmorebtn.style.display="block";
    

}
searchform.addEventListener("submit",(e)=>{
   e.preventDefault();
   page =1;
   searchImage();
})
showmorebtn.addEventListener("click",()=>{
    page++;
    searchImage();
})