
function reverse(c, mod) {
    let arr1
    for (let i = 0; i < mod; i++) {
        if(c * i % mod == 1) {
        arr1 = i
    }
}
    return arr1
}

function euq(a, b) {
let ost
while (ost != 0) {
    ost = a % b
    a = b
    b = ost
}
return a
}

function eiler(c) {
    let arr = []
    for (let i = 1; i <= c; i++) {
    if (euq(c, i) == 1) {
        arr.push(i)
    }
    }
        return arr.length
    
}
   

function decrypt() {
let amod = +prompt("A Модуль")
let bmod = +prompt("B Модуль")
let mod = amod * bmod
let e = +prompt("Степень")
let d = reverse(e, eiler(mod))

//let mes = prompt("Сообщение").split(" ").map((x)=>+x)

let ans = ''

for (let i = 0; i < globarr.length; i++) {
    ans += String.fromCharCode(Number((BigInt(globarr[i]) ** BigInt(d)) % BigInt(mod)))
}
return console.log(ans)
}

function crypt() {
let a 
let b 
let mod
let eiln
let e
let d
let M
let C
let globarr = []
do {
    a = +prompt("1-ое простое число") 
    b = +prompt("2-ое простое число")
    if (euq(a, b) != 1) {
        alert("Нужны взаимно простые числа!")
    }
} while(euq(a, b) != 1)
    
    mod = a * b
    eiln = eiler(a) * eiler(b)
    do {
       e = +prompt("Введи число больше единицы и меньше " + eiler(mod) + "(Взаимно простое)") 
       if (euq(e, eiler(mod)) != 1) {
          alert("Нужно число взаимно простое с " + eiler(mod))
           if (e < 1 || e > eiler(mod)) {
               alert("Нужно число больше 1 и меньше " + eiler(mod))
           }
       }
       else if (e < 1 || e > eiler(mod)) {
           console.log("Нужно число больше 1 и меньше " + eiler(mod))
           if (euq(e, eiler(mod)) != 1) {
               alert("Нужно число взаимно простое с " + eiler(mod))
           }
       }
    } while(euq(e, eiler(mod)) != 1 || e < 1 || e > eiler(mod))
     d = reverse(e, eiler(mod))
     M = prompt().split("").map(x => x.charCodeAt())
     for (let i = 0; i < M.length; i++) {
       globarr.push(BigInt(M[i]) ** BigInt(e) % BigInt(mod))
     }
    return globarr
}

let answer
let globarr
do {
    answer = +prompt("1 - шифр, 2 - расшифр, 3 - выкл")
    if (answer == 1) {
        globarr = crypt()
    }
    else if (answer == 2) {
        alert(globarr)
        decrypt()
    }
} while (answer != 3)
