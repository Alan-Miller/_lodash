require('dotenv').config();
const { port } = process.env
    , _ = require('lodash')
    , app = require('express')().listen(port, console.log(`App listening on ${port}.`));

// lodash variables
const hawkins = [
    { name: 'Eleven', season: 1, seenUpsideDown: true, power: 'telekinesis' },
    { name: 'Hopper', season: 1, seenUpsideDown: true, power: 'guns' },
    { name: 'Joyce', season: 1, seenUpsideDown: true, power: 'grit' },
    { name: 'Lucas', season: 1, seenUpsideDown: true, power: 'walkie-talkies' },
    { name: 'Dustin', season: 1, seenUpsideDown: true, power: 'swearing' },
    { name: 'Max', season: 2, seenUpsideDown: true, power: 'skateboarding' },
    { name: 'Mr. Clark', season: 1, seenUpsideDown: false, power: 'knowledge' },
    { name: 'Billy', season: 2, seenUpsideDown: false, power: 'anger' },
    { name: 'Eight', season: 2, seenUpsideDown: false, power: 'telepathy' },
    { name: 'Demigorgon', season: 1, seenUpsideDown: true, power: 'hunting' }
];
const mindFlayer = { name: 'Mind Flayer', season: 2, seenUpsideDown: true, power: 'flaying minds' }
const season1 = hawkins.filter(char => char.season === 1);
const season2new = hawkins.filter(char => char.season === 2);
const season2 = season1.concat(season2new).filter(char => char.name !== 'Demigorgon');

const party = ['Mike', 'Lucas', 'Will', 'Dustin', 'Eleven', 'Max'];
const teens = ['Steve', 'Nancy', 'Jonathan'];
const adults = ['Joyce', 'Hopper', 'Bob', 'Mr. Clark'];
const upsideDown = ['Mind Flayer', 'Demigorgon', 'Demidogs', 'vines'];
const baddies = upsideDown.concat(['Papa', 'Eight', 'Billy']);
const byerses = ['Joyce', 'Jonathan', 'Will'];
const newbies = ['Max', 'Billy', 'Mind Flayer', 'Demidogs'];
const lab = ['Eleven', 'Eight', 'Papa'];
const avClub = _.dropRight(party, 2).concat('Mr. Clark');

const elevenAndMike = ['Eleven', 'Mike'];
const maxAndLucas = ['Max', 'Lucas'];
const joyceAndBob = ['Joyce', 'Bob'];
const nancyAndDustin = ['Nancy', 'Dustin'];
const girls = [elevenAndMike, maxAndLucas, joyceAndBob, nancyAndDustin].map(pair => _.first(pair));
const boys = [elevenAndMike, maxAndLucas, joyceAndBob, nancyAndDustin].map(pair => _.last(pair));

const truthy = ['Dustin', 1, true, false, {pet: 'Dart'}, null, undefined, '', 0, NaN];

const diff1 = [{ 'x': 100, 'y': 200 }, { 'x': 400, 'y': 400 }];
const diff2 = [{ 'x': 100, 'y': 200 }];
const diffBy = val => val.x < 300 && val.y < 300;
// const interBy = name => name.replace(/./gi, '');
const nested = [1, [2], [3, [4, 5], 6], [7, [[8], [[[9], 10]]], 11]];
const numStrings = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven'];
let test = 'Stranger Things';

// LODASH ARRAYS
// test = _.chunk(peopleArray, 2);
// test = _.compact(truthy);
// test = _.concat(party, teens);
// test = _.difference(party, byerses); // party without Will
// test = _.difference(diff1, diff2);
// test = _.differenceBy(diff1, diff2, diffBy);
// test = _.differenceWith(diff1, diff2, _.isEqual);
// test = _.drop(teens, 1); // ship ['Nancy', 'Jonathan']
// test = _.dropRight(teens, 1); // ship ['Steve', 'Nancy'];
// test = _.dropWhile(hawkins, char => char.name !== 'Eleven');
// test = _.dropRightWhile(hawkins, 'seenUpsideDown');
// test = _.fill(party, 'UPSIDE DOWN', 2, 3);
// test = _.findIndex(hawkins, 'seenUpsideDown'); // 0
// test = _.findLastIndex(hawkins, ['power', 'walkie-talkies']); // 3
// test = _.first(teens); // Steve
// test = _.head(teens); // Steve
// test = _.flatten(nested);
// test = _.flattenDeep(nested);
// test = _.flattenDepth(nested, 4);
// test = _.fromPairs([elevenAndMike, maxAndLucas]);
// test = _.indexOf(upsideDown, 'Mind Flayer'); // 0
// test = _.initial(upsideDown); // all but vines
// test = _.intersection(baddies, lab); // Papa and Eight
// test = _.intersectionBy(diff1, diff2, 'x');
// test = _.intersectionWith(diff1, diff2, _.isEqual);
// test = _.join(nancyAndDustin, ' and '); // Nancy and Dustin
// test = _.last(party); // Max
// test = _.lastIndexOf(party, 'Lucas', 2); // 1
// test = _.nth(party, 1); // Lucas
// test = _.pull(byerses, 'Will'); // mutates array, removes Will
// test = _.pullAll(party, ['Eleven', 'Max']); // mutates array, boys only
// test = _.pullAllBy(hawkins, [{'season': 2}], 'season'); // mutates
// test = _.pullAllWith(baddies, ['Billy', 'Eight'], _.isEqual);
// test = _.pullAt(newbies, 1); // mutates and returns pulled
// test = _.remove(hawkins, _ => _.season === 2); // like filter but mutates
// test = _.reverse(byerses);
// test = _.slice(teens, 0, 1); // just Steve
// test = _.sortedIndex(maxAndLucas.sort(), 'Dustin'); // 0
// const sortHawk = hawkins.sort((a, b) => a.season - b.season);
// test = _.sortedIndexBy(sortHawk, mindFlayer, x => x.season); // 7

// test = _.sortedIndexOf();
// test = _.sortedLastIndex(maxAndLucas.sort(), 'Dustin'); // 0
// const sortHawk = hawkins.sort((a, b) => a.season - b.season);
// test = _.sortedLastIndexBy(sortHawk, mindFlayer, x => x.season); // 10

// test = _.sortedLastIndexOf();
// test = _.sortedUniq([1, 2, 7, 7, 2, 9, 8, 1]); // [1, 2, 7, 7, 2, 9, 8, 1]
// test = _.sortedUniqBy([1, 2, 7, 7, 9], x => x % 2); // [1, 2, 7]
// test = _.tail(hawkins); // all but Eleven
// test = _.take(hawkins, 2); // Eleven and Hopper
// test = _.takeRight(hawkins, 1); // Demigorgon
// test = _.takeRightWhile(hawkins, 'seenUpsideDown'); // Demigorgon
// test = _.takeWhile(hawkins, ['season', 1]); // Season 1 cast thru Dustin
// test = _.union(party, byerses);
// test = _.unionBy(party, byerses, n => n.length); 
// test = _.unionWith(party, byerses, (a, b) => a[0] === b[0]); 
// test = _.uniq([1, 2, 7, 7, 2, 9, 8, 1]); // [1, 2, 7, 9, 8]
// test = _.uniqBy([1, 2, 7, 7, 2, 9, 8, 1], x => x % 2); // [1, 2]
// const teamHawkins = party.concat(byerses);
// test = _.uniqWith(teamHawkins, (a, b) => a === b); //
// test= _.unzip([boys, girls]);
// test = _.unzipWith([girls, boys], (a, b) => a + ' and ' + b);
// test = _.without(teens, 'Nancy');
// test = _.xor(party, avClub); // not in the original party
// test = _.xorBy(party, avClub, name => name[0]); // Eleven
// test = _.xorWith(party, avClub, (a, b) => a === b); // not in original party
// test = _.zip(elevenAndMike, maxAndLucas, joyceAndBob);
// test = _.zipObject(['reliable', 'dogged', 'loyal'], teens);
// test = _.zipObjectDeep(['bigBad', 'minions[0]', 'minions[1]', 'minions[2]'], upsideDown);
// test = _.zipWith(elevenAndMike, maxAndLucas, (a, b) => a.length + b.length); // name lengths

// LODASH COLLECTIONS
// test = _.countBy(hawkins, 'season'); // 7 in season 1, 3 in season 2
// test = _.every(party, String);
// test = _.filter(hawkins, ['season', 2]); // Season 2 cast
// test = _.find(hawkins, ['power', 'swearing']); // Dustin
// test = _.findLast(upsideDown, char => char.slice(0, 4) === 'Demi'); // Demidogs
// test = _.flatMap(hawkins, char => [char.name, char.season]); // Flat array of names and season
// test = _.flatMapDeep(numStrings, num => [[[[[num]]]]]);
// test = _.flatMapDepth(numStrings, num => [[[[[num]]]]], 3);
// test = _.forEach(party, char => console.log(char));
// test = _.forEachRight(party, char => console.log(char));
// test = _.groupBy(hawkins, 'season'); // season 1 characters, then season 2 characters
// test = _.groupBy(adults, name => name.length); // name lengths
// test = _.includes(maxAndLucas, 'Dustin'); // false


// test = _.map(avClub, name => name + ' is a nerd'); // nerds

// LODASH OBJECTS
// test = _.toPairs(hawkins[6]);



// test = _.after(3, () => {console.log('OKAY GO!!!!!!!!!!!!')})
// test();
// test();
// test();

let count = 0;
function log() {
    console.log(count);
}
test = _.throttle(log, 3000);
const counter = setInterval(() => {
    count++;
}, 1000);
const go = setInterval(test, 1000);


// console.log('test:', test);