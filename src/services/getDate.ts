export function getDate () {
    var day = new Date().getDate().toString()
    var month = (new Date().getMonth() + 1).toString()
    var year = new Date().getFullYear()
    var hour = new Date().toLocaleTimeString()

    if ( day.length === 1 ) {
        day = '0'.concat(day)
    };

    if (month === '1') { month = 'Janeiro' } 
    else if (month === '2') {month = 'Fevereiro'}
    else if (month === '3') {month = 'Março'}
    else if (month === '4') {month = 'Abril'}
    else if (month === '5') {month = 'Maio'}
    else if (month === '6') {month = 'Junho'}
    else if (month === '7') {month = 'Julho'}
    else if (month === '8') {month = 'Agosto'}
    else if (month === '9') {month = 'Setembro'}
    else if (month === '10') {month = 'Outubro'}
    else if (month === '11') {month = 'Novembro'}
    else if (month === '12') {month = 'Dezembro'}

    return { day, month, year, hour }
} 


