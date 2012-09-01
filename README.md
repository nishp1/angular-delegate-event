angular-delegate-event
======================

Angular Delegate Event is a directive that adds event delegation support.

What is Event Delegation?:
    - http://www.nczonline.net/blog/2009/06/30/event-delegation-in-javascript/

Supported Events:
    - click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove, mouseenter, mouseleave

Usage:
  - Load DelegateEvent module:
        var myApp = angular.module('yourApp', ['DelegateEvent'])

  - dg-click="click(tweet)"
  - dg-click="clicked=true"

Example:

- http://jsfiddle.net/nishp1/dqbaa/