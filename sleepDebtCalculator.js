onst getSleepHours = day => { 
  switch(day) { 
    case 'monday': 
    return 10 
    break; 
    case 'tuesday': 
    return 9 
    break; 
    case 'wednesday': 
    return 10 
    break; 
    case 'thursday': 
    return 8 
    break; 
    case 'friday': 
    return 11 
    break; 
    case 'saturday': 
    return 12 
    break; 
    case 'sunday': 
    return 11 
    break; 
    default: 
    return "doodoo" 
    } 
  };

const getActualSleepHours = () => 
getSleepHours('monday') + 
getSleepHours('tuesday') + 
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday');

console.log(getSleepHours('friday')); 
console.log(getActualSleepHours());

const getIdealSleepHours = () => { 
  let idealHours = 73; 
return idealHours = 73; 
}; 
const calculateSleepDebt = () => { 
  const actualSleepHours = 
  getActualSleepHours();    
  const idealSleepHours = 
  getIdealSleepHours(); 

if(actualSleepHours === idealSleepHours) {
  console.log ('you sleep good'); 
  }
   else if (actualSleepHours > idealSleepHours) { 
      console.log('you got ' + 
      (idealSleepHours - actualSleepHours) + ' more hours this week you fat loser');

  } else if (actualSleepHours < idealSleepHours){
     console.log('big baby not sleeping you have slept ' +  (idealSleepHours - actualSleepHours ) + ' hours less then you should big baby');
     } 
    
    
else {
console.log('doo doo face')
}  
};





calculateSleepDebt();
