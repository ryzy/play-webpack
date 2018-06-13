import $ from 'jquery';

export function doSthAmazingWithjQuery() {
  console.log('jQuery loaded');
  $('h1').after(`<p>Hey, that's added by jQuery</p>`);
}
