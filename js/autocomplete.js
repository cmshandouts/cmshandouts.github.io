let availableKeywords = [
    '<a href="fc2017-18.html" class="href">First Comparitive Papers 2017-18</a>',
    '<a href="fc2018-19.html" class="href">First Comparitive Papers 2018-19</a>',
    '<a href="fc2019-20.html" class="href">First Comparitive Papers 2019-20</a>',
    '<a href="fc2021-22.html" class="href">First Comparitive Papers 2021-22</a>',
    '<a href="board2024.html" class="href">Board Exam Question Papers 2023-24</a>',
    '<a href="board2023.html" class="href">Board Exam Question Papers 2022-23</a>'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length){
            result = availableKeywords.filter((keyword)=>{
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    })
    resultsBox.innerHTML = "<ul>"+content.join('')+"</ul>";
}

/*function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}*/