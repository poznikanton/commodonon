let orient = 'vertical';
const defaultPos = orient === 'vertical' ? 'zeroOrMax' : 'mid';
console.log(defaultPos); // Output: 'zeroOrMax'

orient = 'horizontal';
const defaultPos2 = orient === 'vertical' ? 'zeroOrMax' : 'mid';
console.log(defaultPos2); // Output: 'mid'
