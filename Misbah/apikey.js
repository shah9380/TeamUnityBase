
// const apiKey = 'fca_live_vKcoJkOnqLgfIYN0CGOFcjZs5CyOrJfqbWnS0Kbe';4

// let globalData;

// const dataFetch = async ()=>{
//   try{
//     const response =   await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vKcoJkOnqLgfIYN0CGOFcjZs5CyOrJfqbWnS0Kbe`);
//     const data = await response.json();
//     return data;
//   }catch(error){
//     console.error('error fetching the data', error);
//     throw error;
//   }
// };
// dataFetch()
//   .then((data)=>{
//     // Assign the data to the global variable
//     globalData = data;
//   })
//   .catch((error)=>{
//     console.error('Error', error);
//   });

// console.log(globalData);

const apiKey = 'fca_live_vKcoJkOnqLgfIYN0CGOFcjZs5CyOrJfqbWnS0Kbe';

// Declare a global variable
let globalData;

const dataFetch = async () => {
  try {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Call the function and assign data to the global variable
dataFetch()
  .then((data) => {
    console.log('Data:', data);
    // Assign the data to the global variable
    globalData = data;
    // You can do further processing with the data here
    handleData();
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle the error if needed
  });
  //getting the symbol from the currency
  const currency = document.getElementById('currency-alter');
  currency.innerHTML = "";
  const handleData = () => {
    // Now you can use the globalData variable here
    for(let e in globalData.data){
      const opt = document.createElement('option');
      opt.value = e;
      opt.innerText = e;
      currency.appendChild(opt);
    }
    const symbolic = document.querySelectorAll('.active-symbol');
    for(let i=0;i<symbolic.length;i++){
        //    console.log(symbolic[i]); 
           symbolic[i].children[0].children[0].innerText = currency.value;
           console.log(symbolic[i].children[0].children[0].innerText);
           console.log(symbolic[i].children[0].children[1].value);
    }
    // Perform other actions that depend on the data
  };