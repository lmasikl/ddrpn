var dimple = require('dimple');

module.exports = {
    create: function (element, data){
        var svg = dimple.newSvg(element, '100%', 600);
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis("x", "date_joined");
        chart.addMeasureAxis("y", "id");
        chart.addSeries(null, dimple.plot.bar);
        chart.draw();
    }
}
