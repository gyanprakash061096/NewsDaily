console.log("hello");
// 6c08b6b72fdd4568a53be084fad4a5dc
let apiKey='6c08b6b72fdd4568a53be084fad4a5dc';
let date=document.getElementById('date');
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
date.innerHTML = "Top 20 headlines for "+month +" "+ d.getDate()+", "+d.getFullYear();

// populating news in dom and grab the news then get request :

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('get', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6c08b6b72fdd4568a53be084fad4a5dc', true)
xhr.onload=function(){
    if(this.status===200){
        let json= JSON.parse(this.responseText);
        let articles= json.articles; 
        let newsHTML="";
        articles.forEach(function(element,index) {
        let news= `
<div class="accordion-item" >
          <h2 class="accordion-header" id="heading${index}">
            <button 
              class="accordion-button collapsed" style="background-color: #DFDFDE;opacity: 0.85;"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${index}"
              aria-expanded="true"
              aria-controls="collapse${index}"
              id="btn"
            >
            ${element.title} <hr>
            </button>
          </h2>
          <div 
            id="collapse${index}"
            class="accordion-collapse collapse " 
            aria-labelledby="heading${index}"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style="background-color: #9FC088;">
              ${element.content}. <a href="${element.url}" target="_blank">Read more... </a>
            </div>
          </div>
        </div> `;
        newsHTML+=news;

    });
        newsAccordion.innerHTML=newsHTML;
        console.log(articles);
    }
    else{
        console.log("ni aya");
    }
    
}

xhr.send();
