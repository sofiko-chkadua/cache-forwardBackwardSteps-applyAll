
const cache = (func) => {
const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');
const cachearr = {};
return (...args) => {
    const key = generateKey(args);
    const val = cachearr[key];
    if (val) return val;
    const res = func(...args);
    cachearr[key] = res;
    return res;
}
}


const forwardBackwardSteps = {
        step: 0,
        forward(){
            this.step++;
            return this;
        },
        backward(){
            this.step--;
            return this;
        },
        revealStep(){
            console.log(this.step);
            return this;
        }
    };


const applyAll = (func, ...rest) => {
    return func(...rest);
}
const sum = (...rest) => {
    return rest.reduce((acc, item) => acc + item);
}

const mul = (...rest) => {
    return rest.reduce((acc, item) => acc * item);
}



module.exports = {cache, forwardBackwardSteps, applyAll, sum, mul}
