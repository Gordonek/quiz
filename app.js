let data = document.querySelectorAll(".questions div");
data.forEach(option => {
    option.addEventListener("click", function(){
        data.forEach(opt => {
            opt.classList.remove("active");
        });
        option.classList.add("active");
    })
});
const questions = [
    {
        "title": "W jaki sposób można dodać klasę do elemntu HTML w JavaScript?",
        "ans1": "element.addClass(\"klasa\")",
        "ans2": "element.className += \"klasa\"",
        "ans3": "element.classList.add(\"klasa\")",
        "ans4": "element.style.class = \"klasa\"",
        "correct": "ans3"
    },
    {
        "title": "Jakie jest domyślne zachowanie elementu display: flex?",
        "ans1": "Element zajmuje cała dostępną szerokość i wysokość",
        "ans2": "Element jest wyświetlany jako blok",
        "ans3": "Element jest wyświetlany jako wiersz",
        "ans4": "Element jest niewidoczny",
        "correct": "ans4"
    },
    {
        "title": "Jakie selektory w CSS mogą służyć do stylizowania elementu o identyfikatorze \"przycisk\"?",
        "ans1": ".przycisk",
        "ans2": "#przycisk",
        "ans3": "?przycisk",
        "ans4": "$przycisk",
        "correct": "ans2"
    },
    {
        "title": "Jak dodać atrybut do elementu HTML w JavaScript?",
        "ans1": "element.setAttribute(\"atrybut\",\"wartość\")",
        "ans2": "element.atrybut = \"wartość\"",
        "ans3": "element.classList.add(\"atrybut\")",
        "ans4": "element.style.atrybut = \"wartość\"",
        "correct": "ans1"
    },
    {
        "title": "Jakie są pseudo-klasy CSS używane do stylizowania elementów podczas interakcji z użytkownikiem?",
        "ans1": ":hover",
        "ans2": ":focus",
        "ans3": ":active",
        "ans4": "Wszystkie powyższe",
        "correct": "ans4"
    },
    {
        "title": "Co to jest 'event bubbling' w JavaScript?",
        "ans1": "Proces przekazywania zdarzenia z elementu potomnego do elementu nadrzędnego",
        "ans2": "Proces przekazywania zdarzenia z elementu nadrzędnego do elementu potomnego",
        "ans3": "Proces zatrzymania propagacji zdarzenia",
        "ans4": "Proces zmiany wartości właściwości elementu",
        "correct": "ans1"
    },
    {
        "title": "Który z poniższych selektorów NIE jest poprawny?",
        "ans1": "#main-content",
        "ans2": ".header-container",
        "ans3": "p.important",
        "ans4": "div[class=\"box\"]",
        "correct": "ans4"
    },
    {
        "title": "Jakie polecenie JavaScript służy do wyświetlania komunikatu w konsoli?",
        "ans1": "alert()",
        "ans2": "console.log()",
        "ans3": "window.alert()",
        "ans4": "print()",
        "correct": "ans2"
    },
    {
        "title": "Która funkcja PHP służy do łączenia dwóch ciągów znaków?",
        "ans1": "merge()",
        "ans2": "join()",
        "ans3": "concat()",
        "ans4": "add()",
        "correct": "ans3"
    },
    {
        "title": "Która funkcja JavaScript służy do dodawania zdarzenia kliknięcia do elementu?",
        "ans1": "onclick()",
        "ans2": "addEventListener()",
        "ans3": "click()",
        "ans4": "onmouseclick()",
        "correct": "ans2"
    },
    {
        "title": "Który z poniższych operatorów JavaScript służy do porównania dwóch wartości tego samego typu?",
        "ans1": "==",
        "ans2": "===",
        "ans3": "=",
        "ans4": "!=",
        "correct": "ans2"
    }
]
let score=0;
let used = [];
let number = 0;
let ready = false;
function loadQuestion(){
    number = Math.floor(Math.random()*11);
    let quest = document.querySelectorAll(".questions div");
    let error = document.getElementById("error");
    error.style.visibility = "hidden";
    if(used.includes(number) == false){
        used.push(number);
        console.log(used);
        title.innerText = questions[number]["title"];
        for(let i=0; i<quest.length; i++){
            quest[i].classList.remove("active");
            quest[i].innerText = questions[number]["ans"+(i+1)]
        }
        ready=true;
    }else{
        loadQuestion();
    }
}
function next(){
    let quest = document.querySelectorAll(".questions div");
    let active = document.querySelector(".active");
    let error = document.getElementById("error");
    if(active && ready){
        ready=false;
        if(active.id == questions[number]["correct"]){
            score+=1;
            error.classList.remove("bad");
            error.classList.add("good");
            error.innerText = "Dobra odpowiedź";
            error.style.visibility = "visible";
            if(used.length==5){
                setTimeout(end, 1000);
            }
            else{
                for(let i=0; i<quest.length; i++){
                    quest[i].classList.remove("active");
                }
                setTimeout(loadQuestion,1000);
            }
        }
        else{
            error.innerText = "Błędna odpowiedź";
            error.classList.add("bad");
            error.classList.remove("good");
            error.style.visibility = "visible";
            if(used.length==5){
                setTimeout(end, 1000);
            }else{
                setTimeout(loadQuestion,1000);
            }
        }
    }else if(ready){
        if(used.length<=5){
            error.classList.remove("bad","good");
            error.innerText = "Zaznacz odpowiedź!";
            error.style.visibility = "visible";
        }
    }
}
function end(){
    let title = document.getElementById("title");
    let quest = document.querySelectorAll(".questions div");
    let error = document.getElementById("error");
    for(let i=0; i<quest.length; i++){
        quest[i].classList.remove("active");
        quest[i].style.visibility = "hidden";
    }
    title.innerText = "Test skończony";
    error.classList.remove("bad","good");
    error.innerText = "Wynik: "+score+"/"+"5";
    error.style.visibility = "visible";
    document.getElementById("guzik").style.display = "none";
}