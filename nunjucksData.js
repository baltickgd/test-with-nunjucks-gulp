var items = require('./src/scripts/sql.json');
var used = {};
var uniqueDate = [];
var finalObj = [];
var dataMonth = ['Января', 'Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

items.forEach(function (item) {
    var newData = new Date(item.date);
    var newDay = newData.getDate();
    var newMonth = newData.getMonth();

    item.date = newDay + ' ' + dataMonth[newMonth];

    uniqueDate.push(item);
});


var uniqueDateSort = uniqueDate.filter(function(obj) {
    return obj.date in used ? 0 : (used[obj.date]=1);
});

var uniqueDocsSort = uniqueDate.filter(function(obj) {
    return obj.id in used ? 0 : (used[obj.id]=1);
});

uniqueDateSort.forEach(function (item) {
    finalObj.push({date: item.date, childrens:[]});

});

finalObj.forEach(function (item,i) {
    uniqueDocsSort.forEach(function (doc) {
        if (finalObj[i].date == doc.date)  {
            finalObj[i].childrens.push({
                docDate: doc.date,
                docId: doc.id,
                name:doc.name,
                products:[]
            })
        }
    });
    uniqueDate.forEach(function (product) {
        finalObj[i].childrens.forEach(function (d) {
            if (product.id == d.docId) {
                var fullPrice = product.price * product.quantity;
                d.products.push({
                    name: product.prName,
                    img: product.image,
                    prPrice:product.price,
                    prQuantity: product.quantity,
                    fullPrice: fullPrice
                })
            }
        })
    })
});


module.exports = function dataFunction() {
    return {
        items,
        finalObj
    }
};