////string
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match;
    });
};
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
///////////////////////
//array
//////
Array.prototype.where = function (fnPredicate) {
    /// <param name="fnPredicate" type="function">search function delegete (items = self.items().where(function() {return this.ItemID() < currentItemID;}))</param>
    var len = this.length;
    if (typeof fnPredicate != "function") {
        throw new TypeError();
    }
    var matches = [];
    for (var i = 0; i < len; i++) {
        if (i in this) {
            var match = fnPredicate.call((void 0), this[i]);
            if (match)
                matches.push(this[i]);
        }
    }
    return matches;
};
Array.prototype.first = function (fnPredicate) {
    var len = this.length;
    if (typeof fnPredicate != "function")
        throw new TypeError();
    for (var i = 0; i < len; i++) {
        if (i in this) {
            var match = fnPredicate.call((void 0), this[i]);
            if (match)
                return this[i];
        }
    }
    return null;
};
Array.prototype.select = function (fnPredicate) {
    var len = this.length;
    if (typeof fnPredicate != "function")
        throw new TypeError();
    var vals = [];
    for (var i = 0; i < len; i++) {
        if (i in this) {
            var value = fnPredicate.call((void 0), this[i]);
            vals.push(value);
        }
    }
    return vals;
};
//# sourceMappingURL=common.js.map