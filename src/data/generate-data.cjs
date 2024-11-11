const fs = require('fs');

const randomDate = (start, end) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

const randomEyeColor = () => {
    const eyeColors = ["blue", "green", "brown", "hazel"];
    return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    console.log(names);

    let content = "export const data = [";
    for (let i = 0; i < count; i++) {
        //losowanie imienia z bilioteki imion
        const name = names[~~((Math.random() * names.length) / 1)];
        const person = {
            id: i + 1,
            name: name,
            birth: randomDate(new Date(1970, 0, 1), new Date(2023, 11, 31)),
            eyes: randomEyeColor(),
            rating: Math.floor(Math.random() * 11)
        };
        console.log(person);
        content += JSON.stringify(person) + ",\n";
    }

    content += "];"

    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});