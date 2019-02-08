let equalButton = {
    calculate(s) {
        let str = this.replaceXWithAsterisk(s);
        str = this.replaceCheckWithMath(str);
        if (this.stringIsParsable(str)) {
            return eval(str);
        }
        else {
            return 'ERROR';
        }
    },

    // Let eval() evaluate if the user input is a valid piece of code
    stringIsParsable(s) {
        try {
            // We don't return eval() directly because the result might be zero, 
            // i.e. false
            eval(s);
            return true;
        }
        catch (err) {
            return false;
        }
    },

    // Product requires x as the times symbol. eval() can't parse that 
    // so replace with asterisks
    replaceXWithAsterisk(s) {
        return s.replace('x', '*');
    },

    //Square Root functionality
    replaceCheckWithMath(s) {
        let stuff = s.replace('√', 'Math.sqrt(');
        if (!s.includes('√')) {
            return s;
        }
        return stuff+')';
    }
}

export default equalButton;
