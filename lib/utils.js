export default function formatDate(dateString) {
    // Parse the input date string
    const date = new Date(dateString);
    
    // Define an array of month names
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Extract the day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    // Construct the formatted date string
    return `${day} ${month} ${year}`;
  }


