module.exports = {
    controller: {},
    add: function() {
        let a; // to tell the difference between no number and 0
        let args = process.argv.slice(2);
        let pre_a = Number(args[0]);
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        let b;
        let pre_b = Number(args[1]);
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        this.controller.add(a, b);
    }
};