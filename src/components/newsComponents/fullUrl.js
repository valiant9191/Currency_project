// instruction how to get an Api Key: create file .env in home directory of files(at the same directory with this files README.md, package.json etc)
//      inside .env add REACT_APP_API_NEWS_KEY= 
//      after equals write your API key
//          how to get API Key: go to this link: http://newsapi.org/
//          push button Get API Key  YOU CAN SEE api key   
// 



const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = new Date();
const valueOfNews ='30'

const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&pageSize=${valueOfNews}&sortBy=publishedAt&language
=en&apiKey=8fbdc45f38704319840644466e6eaf15`

//// ${process.env.REACT_APP_API_NEWS_KEY}


export default fullUrl;