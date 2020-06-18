function dataTime(time) {
    var newData = new Date(time);
    var dataMonth = ['Января', 'Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    var day = newData.getDate();
    var month = newData.getMonth();
    var correctProductDate = day + ' ' + dataMonth[month];
    return correctProductDate;
}
