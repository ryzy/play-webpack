import $ from 'jquery';

export function doSomething() {
  console.log('doSomething:', 2**32);
}

export function testJQuery() {
  console.log('jQuery loaded, click on the headline');
  $('h1').after(`<p>Hey, that's added by jQuery.</p>`);
}
