import $ from 'jquery';
import Rx from 'rxjs/Rx';
import { getSubscriber, getObjectSubscriber, getGithubUser } from './utils/getSubscriber';

// const input = $('#input');
// const button = $('#button');
// const coords = $('#coords');
//
// const buttonStream$ = Rx.Observable.fromEvent(button, 'click');
//
// buttonStream$.subscribe((x) => {
//   console.log('Clicked!');
// }, (err) => {
//   console.log(err);
// }, () => {
//   console.log('Completed!');
// });
//
// const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
// inputStream$.subscribe(x => console.log(x.target.value));
// const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove')
//   .subscribe((x) => {
//     // console.log(x.clientX, x.clientY);
//     coords.html('X: ' + x.clientX + ' Y: ' + x.clientY);
//   });

// let nums = [33, 45, 23, 23, 4, 5];
// let nums$ = Rx.Observable.from(nums);
// nums$.subscribe(getSubscriber('nums'));

// const users = [
//   {name: 'John Doe', email: 'jdoe@gmail.com'},
//   {name: 'Sam Smith', email: 'ssmith@gmail.com'},
//   {name: 'Jen Thompson', email: 'jthompson@gmail.com'}
// ];
// const users$ = Rx.Observable.from(users);
// users$.subscribe(getObjectSubscriber('users'));

// const s = new Set(['Foo', 43, {name: 'Jeff'}]);
// const s$ = Rx.Observable.from(s);
// s$.subscribe(getSubscriber('set'));

// const m = new Map([[1, 2], [3, 4], [5,6]]);
// const m$ = Rx.Observable.from(m);
// m$.subscribe(getSubscriber('map'));

// const str = 'This is a string.';
// const str$ = Rx.Observable.from(str);
// str$.subscribe(getSubscriber('str'));

// const source$ = new Rx.Observable(observer => {
//   console.log('Creating Observable...');
//   observer.next('A value');
//   observer.next('Another value');
//   observer.error('Something wrong');
//   setTimeout(function () {
//     observer.next('Hello world');
//     observer.complete();
//   }, 3000);
//
// });
// source$.subscribe(getSubscriber('myObserver'));

// setTimeout(function() {
//   source$.subscribe(getSubscriber('myobs'));
// }, 5000);

// cold observer sample
// const source$ = Rx.Observable.create(observer => {
//   observer.next(Date.now());
// });
//
// source$.subscribe(getSubscriber('one'));
// source$.subscribe(getSubscriber('two'));

// hot observer sample
// const source$ = Rx.Observable.create(observer => {
//   observer.next(Date.now());
// }).publish();
//
// source$.subscribe(getSubscriber('one'));
// source$.subscribe(getSubscriber('two'));
//
// source$.connect();

// Another hot observer sample
// const source$ = Rx.Observable.interval(1000)
//   .publish();
//
// source$.connect();
// setTimeout(() => {
//   source$.subscribe(getSubscriber('one'));
//   setTimeout(() => {
//     source$.subscribe(getSubscriber('two'));
//   }, 4000);
// }, 2000);

// const source$ = Rx.Observable.interval(1000)
//   .publish().refCount();
//
// setTimeout(() => {
//   source$.subscribe(getSubscriber('one'));
//   setTimeout(() => {
//     source$.subscribe(getSubscriber('two'));
//   }, 4000);
// }, 2000);

// const source$ = Rx.Observable.interval(1000)
//   .take(5)
//   .subscribe(getSubscriber("interval"));

// const source$ = Rx.Observable.timer(3000, 1000)
//   .take(5)
//   .subscribe(getSubscriber("timer"));

// const source$ = Rx.Observable.range(0, 10)
//   .subscribe(getSubscriber('range'));

// const source$ = Rx.Observable.of(45, 'hello', [1, 2])
//   .subscribe(getSubscriber('of'));

// let i = 0;
// const source$ = Rx.Observable.defer(function () {
//   i++;
//   return Rx.Observable.of(i);
// });
// source$.subscribe(getSubscriber('one'));
// source$.subscribe(getSubscriber('two'));
// source$.subscribe(getSubscriber('three'));

// Rx.Observable.interval(1000)
//   .take(10)
//   .map(v => v * v)
//   .subscribe(getSubscriber("map"));

// let names = ["Bob", "Jane", "Mike"];
// Rx.Observable.from(names)
//   .map(v => v.toUpperCase())
//   .subscribe(getSubscriber("name"));

// const input = $('#input');
// const length = $('#length');
//
// Rx.Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .map(v => {
//     return {
//       value: v,
//       length: v.length
//     }
//   })
//   .subscribe(x => {
//     length.text(x.length);
//   });

// Rx.Observable.fromPromise(getGithubUser('philipdai'))
//   .map(obj => obj.data.name)
//   .subscribe(name => {
//     console.log(name);
//   });

// Rx.Observable.interval(2000)
//   .mapTo('Hello World')
//   .take(3)
//   .subscribe(getSubscriber("mapTo"));

// let arr = [
//   {value: 0},
//   {value: 1},
//   {value: 2}
// ]
//
// Rx.Observable.from(arr)
//   .pluck('value')
//   .subscribe(x => {
//     console.log(x);
//   });

// Rx.Observable.interval(1000)
//   .buffer(Rx.Observable.interval(2000))
//   .take(10)
//   .subscribe(getSubscriber("buffer"));

// Rx.Observable.range(1, 100)
//   .bufferCount(20)
//   .subscribe(getSubscriber("bufferCount"));

// Rx.Observable.interval(1000)
//   .bufferTime(2000)
//   .subscribe(getSubscriber("bufferTime"));

// const obs1$ = Rx.Observable.interval(1000);
// const obs2$ = Rx.Observable.fromEvent(document, 'click');
// const myBuffer = obs1$.buffer(obs2$);
// const subscribe = myBuffer.subscribe(getSubscriber("Buffered Values"));

const source$ = new Rx.Observable(oberver => {
  oberver.next(1);
  // oberver.next(2);
  // oberver.next("Hello");
  // oberver.next("World");
  oberver.complete();
});

// source$
//   .first()
//   .subscribe(getSubscriber("first"));
//
// source$
//   .last()
//   .subscribe(getSubscriber("last"));

source$
  .single()
  .subscribe(getSubscriber("single"));