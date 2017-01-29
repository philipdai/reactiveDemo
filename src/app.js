import $ from 'jquery';
import Rx from 'rxjs/Rx';

const input = $('#input');
const button = $('#button');
const coords = $('#coords');

const buttonStream$ = Rx.Observable.fromEvent(button, 'click');

buttonStream$.subscribe((x) => {
  console.log('Clicked!');
}, (err) => {
  console.log(err);
}, () => {
  console.log('Completed!');
});

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(x => console.log(x.target.value));

const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove')
  .subscribe((x) => {
    // console.log(x.clientX, x.clientY);
    coords.html('X: ' + x.clientX + ' Y: ' + x.clientY);
  });

