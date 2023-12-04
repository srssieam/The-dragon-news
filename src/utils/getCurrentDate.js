export function getCurrentDateTime() {
    let currentDate = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
  
    let currentDateTime = `${day}, ${month} ${date}, ${year}`;
    return currentDateTime;
  }
  
  // To display the result:
//   console.log(getCurrentDateTime());
  