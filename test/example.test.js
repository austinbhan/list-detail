// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { vegetables } from '../vegetables.js';
import { renderVegetable } from '../utils.js';

const test = QUnit.test;

test('Vegetable Function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id = "Carrot"><img src = ".assets/carrot.jpg"><h2>Say hi to Carrot. They're Orange and cost $1</h2></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderVegetable(vegetables[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
