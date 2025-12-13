let mod, a, b
function someeuq(a, mod) {
    let buff;
    let buffm = mod;
    let x_i_0 = 1;
    let x_i_1 = 0;
    while (mod != 1) {
        
      buff = x_i_1
      x_i_1 = x_i_0 - ((Math.floor(a / mod)) * x_i_1)
      x_i_0 = buff
      buff = mod
      mod = a % mod
      a = buff
      if (mod == 0) {
          return mod
      }
    }
    return ((x_i_1 % buffm) + buffm) % buffm
} 

function vei() {
    let y, x, arr = []
    
    do {
    a = +prompt("a") 
    b = +prompt("b")
    mod = +prompt("Module: ")
    if ((((((4 * (a ** 3)) + (27 * (b ** 2))) % mod) + mod) % mod) == 0) {
        console.log("Сингулярная кривая!")
    } 
    } while (((4 * (a ** 3)) + (27 * (b ** 2))) % mod == 0) 
    

    for (let i = 0; i < mod; i++) { // выборка пересечений
        for (let j = 0; j < mod; j++)  {
            if (((((i ** 3) + (a * i)) + b) % mod) == ((j ** 2) % mod)) {
                arr.push([i, j])
            }
    }
    }
    return arr
}

function calc() {
     let ans, w, w1, w2, arr = vei(), anss = [], l, x_3, y_3, before = [], l_1, l_2, fin = [], count = 0
     do {
        let asc = 64
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i], String.fromCharCode(asc += 1))
            anss.push(String.fromCharCode(asc))
        }
        ans = +prompt("1 - сложение одинаковой координаты n-раз, 2 - сложение разных координат\n")
        if (ans == 1) {
            w = prompt("Название координаты?")
            ans = +prompt("Скалярное сложение")
        if (ans >= 2) {
            l = ((((((3 * (arr[w.charCodeAt() - 65][0] ** 2)) + a) % mod) * someeuq((2 * arr[w.charCodeAt() - 65][1] + mod) % mod, mod)) % mod) + mod) % mod
                x_3 = ((((l ** 2) - (2 * arr[w.charCodeAt() - 65][0])) % mod) + mod) % mod
                y_3 = (((l * (arr[w.charCodeAt() - 65][0] - x_3) - arr[w.charCodeAt() - 65][1]) % mod) + mod) % mod
                console.log(x_3, y_3, '!')
                before.push(arr[w.charCodeAt() - 65])
                arr.splice(w.charCodeAt() - 65, 1, [x_3, y_3])
                
        if (ans >= 3) {
                for (let i = 0; i < ans - 2; i++) {
                    if (before[0] == arr[w.charCodeAt() - 65]) {
                l = ((((((3 * (arr[w.charCodeAt() - 65][0] ** 2)) + a) % mod) * someeuq((2 * arr[w.charCodeAt() - 65][1] + mod) % mod, mod)) % mod) + mod) % mod
                x_3 = ((((l ** 2) - (2 * arr[w.charCodeAt() - 65][0])) % mod) + mod) % mod
                y_3 = (((l * (arr[w.charCodeAt() - 65][0] - x_3) - arr[w.charCodeAt() - 65][1]) % mod) + mod) % mod
                
                arr.splice(w.charCodeAt() - 65, 1, [x_3, y_3])
                console.log(arr[w.charCodeAt() - 65])
                }
                else {
                   l_1 = ((((arr[w.charCodeAt() - 65][1] - before[0][1]) % mod) + mod) % mod == 0) ? 0 : (((arr[w.charCodeAt() - 65][1] - before[0][1]) % mod) + mod) % mod
                   l_2 = (((someeuq(((arr[w.charCodeAt() - 65][0] - before[0][0]) + mod) % mod, mod) + mod) % mod) == 0) ? 0 : ((someeuq(((arr[w.charCodeAt() - 65][0] - before[0][0]) + mod) % mod, mod) + mod) % mod)
                   l = (l_1 * l_2) % mod
                   x_3 = ((((l ** 2) - (arr[w.charCodeAt() - 65][0] + before[0][0])) % mod) + mod) % mod
                   y_3 = ((((l * (arr[w.charCodeAt() - 65][0] - x_3)) - arr[w.charCodeAt() - 65][1]) % mod) + mod) % mod
                   arr.splice(w.charCodeAt() - 65, 1, [x_3, y_3])
                   console.log(arr[w.charCodeAt() - 65])
                }
                }
                }
        fin.push(arr[w.charCodeAt() - 65])
        arr.splice(w.charCodeAt() - 65, 1, before[0])
        for (let i = 0; i < arr.length; i++) {
        if (fin[0].join("") == arr[i].join("")) {
            console.log(`Точка приемлема и равна нынешней ${String.fromCharCode(65 + i)}` )
            console.log('x', fin[0][0], 'y', fin[0][1])
        }
        else if (fin[0].join("") != arr[i].join("")) {
            count++
            if (count == arr.length) {
                console.log("Точка бесконечности! (O [∞; ∞])")
                console.log('x', fin[0][0], 'y', fin[0][1])
            }
        }
        }
    }
        }
     else if (ans == 2) {
         w1 = prompt("Название 1 координаты?")
         w2 = prompt("Название 2 координаты?")
         l_1 = ((((arr[w1.charCodeAt() - 65][1] - arr[w2.charCodeAt() - 65][1]) % mod) + mod) % mod == 0) ? 0 : (((arr[w1.charCodeAt() - 65][1] - arr[w2.charCodeAt() - 65][1]) % mod) + mod) % mod
                   l_2 = (((((arr[w1.charCodeAt() - 65][0] - arr[w2.charCodeAt() - 65][0]) + mod) % mod + mod) % mod) == 0) ? 0 : ((someeuq(((arr[w1.charCodeAt() - 65][0] - arr[w2.charCodeAt() - 65][0]) + mod) % mod, mod) + mod) % mod)
                   l = (l_1 * l_2) % mod
                   x_3 = ((((l ** 2) - (arr[w1.charCodeAt() - 65][0] + arr[w2.charCodeAt() - 65][0])) % mod) + mod) % mod
                   y_3 = ((((l * (arr[w1.charCodeAt() - 65][0] - x_3)) - arr[w1.charCodeAt() - 65][1]) % mod) + mod) % mod
        fin.push(x_3, y_3)
        for (let i = 0; i < arr.length; i++) {
        if (fin.join("") == arr[i].join("")) {
            console.log(`Точка приемлема и равна нынешней ${String.fromCharCode(65 + i)}` )
            console.log('x', x_3, 'y', y_3)
        }
        else if (fin.join("") != arr[i].join("")) {
            count++
            if (count == arr.length) {
                console.log("Точка бесконечности! (O [∞; ∞])")
                console.log('x', x_3, 'y', y_3)
            }
        }
        }
     }
        else if (anss.find(anss => anss == w) == undefined) {
            ans = false
        }
        else {
            ans = false
        }
    } while (ans == false) 
}

calc()
