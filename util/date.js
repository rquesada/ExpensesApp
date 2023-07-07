export function getFormattedDate(date){
   
    /*if (!date || !(date instanceof Date) || isNaN(date)) {
        return 'Invalid Date';
      }
    
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;*/

    const parsedDate = new Date(date);
    if (isNaN(parsedDate)){
        return 'Invalid Date';
    }

    return `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}`;
}

export function getDateMinusDays(date, days){  
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}