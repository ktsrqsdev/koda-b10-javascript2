// Minitask 1
const r = 7
let luas, keliling

if (r % 7 == 0) {
    luas = 22/7 * r * r
    keliling = 2 * 22/7 * r
} else {
    luas = 3.14 * r * r
    keliling = 2 * 3.14 * r
}

console.log(luas)
console.log(keliling)


// Minitask 2
const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
}

console.log(we.are.the.best)

const hello = {
    world: "hello world"
}

console.log(hello.world)

const obj = {
    str: [
        0,
        1,
        2,
        [
            0,
            [
                0,
                1,
                {
                    man: [
                        {
                            tech: {
                                academy: "tech academy"
                            }
                        }
                    ]
                }

            ]
        ]
    ]
};

console.log(obj.str[3][1][2].man[0].tech.academy)

const my = [
    {
        favorite:[
            0,
            1,
            2,
            {
                fruit: {
                    is: "Apple"
                }
            }
        ]
    }
]

console.log(my[0].favorite[3].fruit.is)

const num = {
    first: [0,16],
    second: [0,1,16]
}

console.log(num.first[1] + num.second[2])
