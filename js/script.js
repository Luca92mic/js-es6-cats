const cats = [
    {
        name: 'Adam',
        age: 0.3,
        color: '#00ffff',
        gender: 'male'
    },
    {
        name: 'Emily',
        age: 0.8,
        color: '#f700ff',
        gender: 'female'
    },
    {
        name: 'Willoby',
        age: 1.3,
        color: '#ff6600',
        gender: 'male'
    },
    {
        name: 'Poppy',
        age : 0.2,
        color: '#00ff00',
        gender: 'female'
    }
];

cats.forEach((cat) => {

    let {name, color, gender, age} = cat;


    let ribbon_color;
    if(gender == 'female') {
        ribbon_color = 'pink';
    } else {
        ribbon_color = 'blue';
    }

    let ribbon_opacity = age * 100;


    cat.ribbon = {
        color: ribbon_color,
        opacity: ribbon_opacity
    };


    $('#cats-container').append(`
        <div style="color: ${color}">
            <i class="fas fa-2x fa-cat"></i>
            ${name}
        </div>
    `);
});


const female_cats = cats.filter((cat) => {

    return cat.gender == 'female';
});


female_cats.forEach((cat) => {
    // recupero il contenitore dei gatti femmina
    let female_container = $('#female-cats-container');
    // stampo il gatto corrente nel contenitore
    print_cat(cat, female_container);
});


const male_cats = cats.filter((cat) => {
    return cat.gender == 'male';
});

male_cats.forEach((cat) => {
    let male_container = $('#male-cats-container');
    print_cat(cat, male_container);
});

const ordered_cats = [...female_cats, ...male_cats];
console.log(ordered_cats);

const final_cats = ordered_cats.map((cat) => {
    console.log(cat);
    const {name, color, ribbon} = cat;
    const new_cat = {
        name,
        color,
        ribbon
    };
    return new_cat;
});
console.log(final_cats);

final_cats.forEach((cat) => print_cat(cat, $('#final-cats-container')));

function print_cat(cat_object, container) {
    let {name, color, ribbon} = cat_object;

    container.append(`
        <div style="color: ${color}">
            <i class="fas fa-2x fa-cat"></i>
            <i style="color: ${ribbon.color}; opacity: ${ribbon.opacity}%" class="fas fa-2x fa-ribbon"></i>
            ${name}
        </div>
    `);
}