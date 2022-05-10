// This Page is Connected to vegetable-page HTML

import { findById } from '../utils.js';
import { vegetables } from '../vegetables.js';

console.log('Your JS is fully functional');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const veggieName = findById(params.get('id'), vegetables);


const vegetableDiv = document.getElementById('vegetable-div');
vegetableDiv.textContent = veggieName;

console.log(vegetables[0]);