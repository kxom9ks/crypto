let alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 
	'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

function someeuq(a, mod) {
    let buff;
    let buffm = mod;
    let x_i_0 = 1;
    let x_i_1 = 0;
    while (mod != 1) {
      buff = x_i_1;
      x_i_1 = x_i_0 - ((Math.floor(a / mod)) * x_i_1);
      x_i_0 = buff;
      buff = mod;
      mod = a % mod;
      a = buff;
      if (mod == 0) {
          console.log("Числа не взаимно простые");
          return mod;
      }
      
    }
    return ((x_i_1 % buffm) + buffm) % buffm;
} 


function transp(K) {
    let transp = [[],[],[]];
    transp[0].push(1 * (K[1][1] * K[2][2] - K[1][2] * K[2][1]))
    transp[1].push(-1 * (K[1][0] * K[2][2] - K[1][2] * K[2][0]))
    transp[2].push(1 * (K[1][0] * K[2][1] - K[1][1] * K[2][0])) 
    transp[0].push(-1 * (K[0][1] * K[2][2] - K[2][1] * K[0][2]))  
    transp[1].push(1 * (K[0][0] * K[2][2] - K[2][0] * K[0][2])) 
    transp[2].push(-1 * (K[0][0] * K[2][1] - K[0][1] * K[2][0])) 
    transp[0].push(1 * (K[0][1] * K[1][2] - K[1][1] * K[0][2])) 
    transp[1].push(-1 * (K[0][0] * K[1][2] - K[1][0] * K[0][2])) 
    transp[2].push(1 * (K[0][0] * K[1][1] - K[1][0] * K[0][1])) 
    
    return transp
}


function modarr(arr, mod) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j] = ((arr[i][j] % mod) + mod) % mod;
        }
    }
    return arr
}

function delta(A, mod, K) {
    let del = 0;
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 3; j++) {
                del += A[i][j] * K[j][i]
            }
        }
    return ((del % mod) + mod) % mod;
}

function revA(arr, reverse) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j] *= reverse
        }
    }
    return arr
}

function decrypt(arr, C, mod) {
    let decryptarr = [];
    let d = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            d += arr[i][j] * C[j]
        }
        decryptarr.push(alphabet[d % mod])
        d = 0;
    }
    return decryptarr
}

function Hill() {
    let K = [[], [], []];
    let mod = +prompt("Mod: ")
    let C = []
    let buff
    
    C = prompt("C ").split(" ").map((x)=>+x) // Ввод зашифрованного сообщения
    
    for (let i = 0; i < 3; i++) { //Ввод матричного ключа
        K[i] = prompt("K ").split(" ").map((x)=>+x)
    } 
    console.log(C, K) 
    let A = transp(K); //Транспонированная матрица (вычисление миноров + строка => столбец)
    let del = delta(A, mod, K); // Вычисление определителя матрицы
    let A_modarr = modarr(A, mod) // Вычисление модуля элементов транспонированой матрицы
    let del_reverse = someeuq(del, mod) // Вычисление обратного определителя 
    let revdelarr = revA(A_modarr, del_reverse) // Умножение каждого элемента на обратное число
    let revdelarrmod = modarr(revdelarr, mod) // Вычисление модуля обратного числа
    let dec = decrypt(revdelarrmod, C, mod) // Расшифрованное сообщение

    console.log(K, 'Ключевая матрица')
    console.log(A, 'Транспонированая матрица')
    console.log(del, 'Определитель')
    console.log(del_reverse, 'Обратный определитель')
    console.log(revdelarr, 'Матрица с обратным определителем')
    console.log(revdelarrmod, 'Матрица с обратным определителем по модулю')
    console.log(dec, 'Расшифровка')
    
}
Hill()