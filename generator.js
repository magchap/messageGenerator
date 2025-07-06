const grape = ["Pinot Noir", "Chardonnay", "Cabernet Sauvignon", "Sauvignon Blanc", "Syrah", "Riesling", "Merlot", "Chenin Blanc"]

const country = ["French", "German", "American", "Australian", "English", "Kiwi", "Chilean", "South African"]

const vintage = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"]

const generator = () => {
        let random = Math.floor(Math.random() * 8);
        let rGrape = grape[random];
        let rCountry = country[random];
        let rVintage = vintage[random];
        return "Tonight you should drink a " + rCountry + ' ' + rGrape + ' from ' + rVintage + '. Enjoy!';
}

console.log(generator());

