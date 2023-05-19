const email = [
    {
        userEmail: "ilgiz@mail.kg",
        userPassword: "011088"
    }
]

const ul = document.getElementById("ul")

function renderemail(){
    ul.innerHTML = ""

    email.map((el)=>{

        console.log(123);
        const li = document.createElement("li")
        const p = document.createElement("p")

        li.innerHTML = el.userEmail
        p.innerHTML = el.userPassword

        ul.append(li)
        ul.append(p)



    })
}
renderemail()

const input = document.getElementById("input")
const pass = document.getElementById("pass")
const button = document.getElementById("button")

button.addEventListener("click", click )

function click(){

    const data = {

        userEmail: input.value,
        userPassword: pass.value

    }

    email.push(data)
    renderemail()

    
}