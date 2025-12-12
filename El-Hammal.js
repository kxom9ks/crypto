 do {
    let ans = prompt('Шифрование(E) или Расшифровка(D)? \n')
    if (ans == 'E') {
    Ham()
    var fin = prompt('Продолжить? (Нажмите Enter - если да, если нет - "N")  \n')
    }
    else if(ans == 'D') {
    maH()
    var fin = prompt('Продолжить? (Нажмите Enter - если да, если нет - "N") \n')
    }
} while (fin != 'N') 



    function Ham() {
    let c = +prompt('Введите основание: ')
    
    function euq(a, b) {
    let ost
    while (ost != 0) {
    ost = a % b
    a = b
    b = ost
    }
    return a
    }

    let p = Math.floor(Math.random() * 65536 + c) // Модуль
    while (euq(c, p) != 1) {
    let ans = 0
    ans = Math.floor(Math.random() * 65536 + c) 
    p = ans 
    }
    console.log('Модуль', p) 

    let x

    do {
    x = +prompt('Введите закрытый ключ: ')
    if (x > p - 1 || x <= 1) {
    console.log('Ещё раз!')
    } 
    } while (x > p - 1 || x <= 1)

    let y = (BigInt(c) ** BigInt(x)) % BigInt(p)

    console.log(y, 'Открытый ключ', c, 'Основание', p, 'Модуль', x, 'Закрытый ключ для y')
    let Mes = []
    let a_b = []
    let st_a_b = ''
    let M = prompt('Введите сообщение: ').split('')
    for (let i = 0; i < M.length; i++) {
        Mes.push(M[i].charCodeAt()) 
    }
    
    let key
    let keys = []
    do {
        key = Math.floor(Math.random() * p) 
        if (euq(p - 1, key) == 1 && key < p - 1) {
        keys.push(key)
        }
    } while (Mes.length != keys.length) 
    console.log(keys, 'Ключи (k)') 
    for (let i = 0; i < Mes.length; i++) {
    let a = (BigInt(c) ** BigInt(keys[i])) % BigInt(p)
    a_b.push(a) 
    let b = ((y ** BigInt(keys[i])) * BigInt(Mes[i])) % BigInt(p)
    a_b.push(b) 
    }
    for (let i = 0; i < a_b.length; i+=2) {
        if (a_b.length - 2 == i) {
        st_a_b += `${a_b[i]}, ${a_b[i + 1]}`
        }
        else {
            st_a_b += `${a_b[i]}, ${a_b[i + 1]}, `
        }
    }
    return console.log(st_a_b)

}


function maH() {
    let x_ = +prompt('Закрытый ключ: ')
    let p_ = BigInt(+prompt('Введите модуль: '))
    let sypher = prompt('Введите шифротекст: ').split(', ')
    let answer = ''
    let a = []
    let b = []
    let rev_end
    for (let i = 0; i < sypher.length; i+=2)
    {
        a.push(sypher[i])
        b.push(sypher[i + 1])
    }
    
    for (let j = 0; j < sypher.length / 2; j++) {
        
    let reverse = (BigInt(a[j]) ** BigInt(x_))
    for (let i = 0n; i < BigInt(p_); i++) {
    if(reverse * BigInt(i) % BigInt(p_) == 1n) {
        rev_end = i
    }
    }

    var MSG = (BigInt(b[j]) * rev_end) % p_
    answer += String.fromCharCode(Number(MSG) + 64) //Для задания
    //answer += String.fromCharCode(Number(MSG))
    }
    
    return console.log('Текст в расшифровке: ', answer)
}