import $ from 'jquery';
import Rx from 'rxjs/Rx';
import { getSubscriber, getObjectSubscriber } from './utils/getSubscriber';

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

const source$ = Rx.Observable.range(0, 10)
  .subscribe(getSubscriber('range'));