for (let i = 0; i <= 20; i++) {
    if(i % 2 === 0) console.log(`${i} es par`);
    if(i % 2 === 1) console.log(`${i} es impar`);
}

const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i*multiplier}`);
}

for (let i = 1; i <=10; i++){
    console.log(`Tabla del ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}