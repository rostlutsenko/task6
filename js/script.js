const name = [
    'americano',
    'americano_metrovaya',
    'bavarskaya', 
    'bavarskaya_metrovaya',
    'berluskoni',
    'chetyre_syra',
    'diablo',
    'diablo_metrovaya',
    'gurmeo', 
    'kalcone', 
    'karbonara', 
    'margarita', 
    'ovoshcnaya',
    'picca_ot_shefa',
    'pollo',
    'pollo_metrovaya'
];

let pizzas = {
    americano: ['BBQ sauce, marinara sauce, mozzarella cheese, mustard, sous-vide chicken fillet, hunting sausages, pepperoni, onion jam, corn, sweet pepper', 672, 120],
    americano_metrovaya: ['BBQ sauce, marinara sauce, mozzarella cheese, mustard, sous-vide chicken fillet, hunting sausages, pepperoni, onion jam, corn, sweet pepper', 1302, 330],
    margarita: ['Marinara sauce, tomatoes, mozzarella cheese, pesto sauce', 512, 85],
    karbonara: ['Mozzarella cheese, ham, bacon, champignons, parmesan, cherry tomatoes', 629, 115],
    pollo: ['Mozzarella cheese, marinara sauce, BBQ sauce, garlic, pineapple, sous-vide chicken fillet', 470, 130],
    pollo_metrovaya: ['Mozzarella cheese, marinara sauce, BBQ sauce, garlic, pineapple, sous-vide chicken fillet', 1300, 310],
    gurmeo: ['BBQ sauce, sous-vide chicken fillet, ham, hunting sausages, pepperoni, mozzarella cheese, mushrooms, onions, parsley', 592, 105],
    chetyre_syra: ['Cream sauce, mozzarella cheese, Dor Blue cheese, cheddar cheese, pear, parmesan cheese, walnut', 360, 95],
    diablo: ['Mozzarella cheese, pepperoni, chili pepper, Bulgarian pepper, onion, BBQ sauce, chili sauce, parsley', 650, 145],
    diablo_metrovaya: ['Mozzarella cheese, pepperoni, chili pepper, Bulgarian pepper, onion, BBQ sauce, chili sauce, parsley', 1512, 355],
    bavarskaya: ['Mozzarella cheese, marinara sauce, Munich sausages, hunting sausages, salted cucumber, mustard, onion, green onion', 710, 120],
    bavarskaya_metrovaya: ['Mozzarella cheese, marinara sauce, Munich sausages, hunting sausages, salted cucumber, mustard, onion, green onion', 1612, 360],
    kalcone: ['Marinara sauce, mozzarella cheese, mushrooms, dor blue cheese, tomatoes, ham, pesto', 480, 85],
    ovoshcnaya: ['Eggplant, oyster mushrooms, Bulgarian pepper, tomatoes, pesto sauce, marinara sauce', 412, 95],
    berluskoni: ['White mushroom cream sauce, mozzarella cheese, Dor Blue cheese, Parmesan cheese, mushrooms, oyster mushrooms, garlic sauce, truffle oil, parsley', 741, 135],
    picca_ot_shefa: ['Mozzarella cheese, black Camembert cheese, tuna sauce, zucchini', 680, 150]
}

let gridBtn = document.querySelector('.btn-grid');
let listBtn = document.querySelector('.btn-list');

gridBtn.addEventListener('click', () => showPizza(name, pizzas, 'card'));
listBtn.addEventListener('click', () => showPizza(name, pizzas, 'item'));


function showPizza(nameArr, pizzaArr, figureClass) {

    const productWrapper = document.querySelector('.product-wrapper');

    while (productWrapper.firstChild)
        productWrapper.removeChild(productWrapper.firstChild);

    for(let i = 0; i < nameArr.length; i++) {

        let card        = document.createElement('figure');
        let img         = document.createElement('img');
        let figcaption  = document.createElement('figcaption');
        let name        = document.createElement('h2');
        let composition = document.createElement('p');
        let calories    = document.createElement('p');
        let price       = document.createElement('h3');

        card.classList.add(figureClass);
        name.classList.add('name');
        composition.classList.add('composition');
        calories.classList.add('calories');
        price.classList.add('price');

        card.appendChild(img);
        card.appendChild(figcaption);
        
        figcaption.appendChild(name);
        figcaption.appendChild(composition);
        figcaption.appendChild(calories);
        figcaption.appendChild(price);

        let caloriesValue;
        let nameValue;
        let compositionValue;
        let priceValue;

        nameValue = nameArr[i];

        figureClass === 'card' ? compositionValue = pizzaArr[nameValue][0] : compositionValue = '';

        caloriesValue = pizzaArr[nameValue][1];
        priceValue    = pizzaArr[nameValue][2];

        img.setAttribute('src', `${figureClass}_photo/${nameValue}.png`);
        img.setAttribute('alt', nameValue.replace(/_/g, ' '));

        name.innerText        = nameValue.replace(/_/g, ' ');
        composition.innerText = compositionValue;
        calories.innerText    = caloriesValue;
        price.innerText       = priceValue;

        productWrapper.appendChild(card);
    }
}