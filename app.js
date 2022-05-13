const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas hic optio. Exercitationem, repudiandae eum. Nobis error quasi enim aut ipsum, eveniet facilis cumque, rem modi vel, quia alias? Consequuntur neque asperiores fugit voluptates at suscipit numquam aperiam nam, officia rerum, aliquam sed corrupti voluptate ab repudiandae distinctio laborum inventore!"
    },

    {
        name: "Nagy Zsanett",
        job: "Marketing manager",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas hic optio. Exercitationem, repudiandae eum. Nobis error quasi enim aut ipsum, eveniet facilis cumque, rem modi vel, quia alias? Consequuntur neque asperiores fugit voluptates at suscipit numquam "
    },

    {
        name: "Török Bálint",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas hic optio. Exercitationem, repudiandae eum. Nobis error quasi enim aut ipsum, eveniet facilis cumque, rem modi vel, quia alias? Consequuntur neque asperiores fugit voluptates at suscipit numquam aperiam nam, officia rerum, aliquam sed corrupti voluptate ab repudiandae distinctio laborum inventore!"
    }

]

//A használni kívánt elemek eltárolása változóba
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló érték megadása (ez fogja reprezentálni az aktuális elemet a tömbömben)
let current = 0;

//Kiinduló személy betöltése
window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})


//Írunk egy függvényt, amellyel ki tudjuk választani a következő emberünket
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Gombnyomásra ugorjunk a következő emberren
nextBtn.addEventListener("click", () => {

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})

//Gombnyomásra ugorjunk az előző emberre
prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = reviews.length -1;
    }

    showPerson(current);
})

