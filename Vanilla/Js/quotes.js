const quotes=[
{
    quote : "With great power comes great responsibilly",
    /*큰 힘에는 큰 책임이 따른다*/
    // quote : "큰 힘에는 큰 책임이 따른다",
    author:"Ben parker",
},
{
    quote:"If you lose hope and confidence you can't do anything",
    /*희망감과 자신감을 잃으면 아무것도 할 수 없습니다*/
    // quote:"희망감과 자신감을 잃으면 아무것도 할 수 없습니다",
    author:"?",
},
{
    quote:"I never dreamed about success, I worked for it",
    /*나는 결코 성공에 대해 꿈구지 않았다, 나는 꿈을 위해 행동했다*/
    // quote:"나는 결코 성공에 대해 꿈구지 않았다, 나는 꿈을 위해 행동했다",
    author:"Estee Lauder",
},
{
    quote:"Do not try to be original, just try to be good.",
    /*독특한 사람이 되려 하지 마라, 좋은 사람이 되도록 해라
        original(독창적인)*/
    // quote:"독특한 사람이 되려 하지 마라, 좋은 사람이 되도록 해라",
    author:"Pual Rand",
},
{
    quote:"Do not be afraid to give up the good to go fot the great",
    /*더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.*/
    // quote:"더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.",
    author:"John D.Rockefeller",
},
{
    quote:"The road to success and the road to failure are almost exactly the same.",
    /*성공으로 가는 길과 실패로 가는 길은 거의 같다*/
    // quote:"성공으로 가는 길과 실패로 가는 길은 거의 같다",
    author:"Colin R. Davis",
},
{
    quote:"It is better to fail in originality than to succeed in imitation",
    /*창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다*/
    // quote:"창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다",
    author:"Herman Melville",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;