//Q.1    Write an Arrow function to print different menu for different day in a week.

const Menu = (day) => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: Mix-Veg');
        break;
      case 'tuesday':
        console.log('Tuesday Menu: Pudi-Sabji');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Dosa');
        break;
      case 'thursday':
        console.log('Thursday Menu: Pizza');
        break;
      case 'friday':
        console.log('Friday Menu: Sushi');
        break;
      case 'saturday':
        console.log('Friday Menu: Maggi');
        break;
      default:
        console.log('Menu for the day is not available.');
    }
  };
  
console.log("***********************************");
console.log("***********************************");
console.log(" Question 1 output  ");
console.log("***********************************");

  Menu('Monday'); 
  Menu('Wednesday'); 
  Menu('Sunday'); 
  
  
  
  
  