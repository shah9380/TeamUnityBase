document.addEventListener('DOMContentLoaded',()=>{

    //top section called
    const topSection = document.getElementById('top-section');
    const dateSection = topSection.children[0];
    const invoiceSection = topSection.children[1];

    //calling the bill address section
    const billsection = document.getElementById('bill-address-section')

    const billto = billsection.children[0];
    const billfor = billsection.children[1];

    //calling the table body
    const tableBody = document.getElementById('table-body');
    const tableBodypop = document.getElementById('table-body-pop');
    //add item button called
    const addItem = document.getElementById('add-item');
    //subtotal price 
    let subTotalPrice= 0;
    //get the price section
    const priceSection = document.getElementById('price-section');
    //get the tax rate
    const taxRate = document.getElementById('tax');
    // get the discount rate
    const discount = document.getElementById('discount');
    //get the total section
    const total = document.getElementById('total');
    //currency symbol
    let symbol = total.children[0].innerText;
    //getting the symbol from the currency
    const currency = document.getElementById('currency-alter');
    const mainPopUp = document.getElementById('popup-main');
    //getting the review button 
    const reviewBtn = document.getElementById('review');

    const nameSection = document.getElementById('name-section-pop');


    const billSectionPop = document.getElementById('bill-section-pop');
    const billToPop = billSectionPop.children[0];
    const billForPop = billSectionPop.children[1];
    const billIssueDate = billSectionPop.children[2];

    //function to get the current date in 'dd-mm-yyyy' format
    const date = ()=>{
        const currentdate = new Date();
        const date = currentdate.getDate();
        const month = currentdate.getMonth();
        const year = currentdate.getFullYear();
        const dateNow = date+"-"+month+"-"+year;
        return dateNow;
    };

    //setting up the current date in page
    dateSection.children[0].children[1].innerHTML = date();



    //rendering the subprice 
    const renderSubPrice = (price)=>{
        priceSection.children[0].children[1].children[1].innerHTML = '';
        priceSection.children[0].children[1].children[1].innerHTML = price;
    };

    const renderTotalPrice = ()=>{
        total.children[1].innerHTML = '';
        let num = priceSection.children[0].children[1].children[1].innerText;
        let value = parseFloat(num);
        let numDis = priceSection.children[2].children[1].children[5].innerText;
        let valueTax = parseFloat(numDis);
        let numTax = priceSection.children[1].children[1].children[5].innerText;
        let valueDis = parseFloat(numTax);
        let ans = value-valueDis+valueTax;
        let newAns = ans.toFixed(4);
        total.children[1].innerHTML = newAns;
    }

    //function to call the total price from the items
    const subTotalPriceOfItems = (table)=>{
        //loop for iterating over a table to get the items
          subTotalPrice = 0;
          for(let i=0;i< table.rows.length; i++){
              let qnty=  table.rows[i].children[1].children[0].value;
              // console.log(table.rows[i].children[1].children[0].value);
              let price = table.rows[i].children[2].children[0].children[1].value;
            //   console.log(table.rows[i].children[2].children[0].children[0].innerText);
              subTotalPrice +=(qnty*price);
          }
          renderSubPrice(subTotalPrice);
          return subTotalPrice;
    };

    //dataRow create using tr tag
    const createItem = ()=>{
        //created a row for a table
        const dataRow = document.createElement('tr');
        //adding class for item
        const rowDataStr = 'border-b border-gray-300';
        const rowDataArr = rowDataStr.split(" ");
        dataRow.classList.add(...rowDataArr);
        //created item table data
        const itemData = document.createElement('td');
        //adding class for item
        const itemDataStr = 'p-2 flex flex-col gap-2';
        const itemDataArr = itemDataStr.split(" ");
        itemData.classList.add(...itemDataArr);
        //inserted the required data in item
        itemData.innerHTML = `<input type="text" placeholder="Item name" class="w-[100%] back-every rounded-sm"><input type="text" placeholder="Item description" class="w-[100%] back-every rounded-sm">`;
        //created qty table data
        const qty = document.createElement('td');
        //adding class for qty
        const qtyDataStr = 'p-2';
        const qtyDataArr = qtyDataStr.split(" ");
        qty.classList.add(...qtyDataArr);
        //inserted the required data in qty
        qty.innerHTML = `<input type="number" value="1" min="0" class="w-[100%] back-every rounded-sm">`;
        //created price table data
        const price = document.createElement('td');
        //adding class for price
        const priceDataStr = 'h-[100%] active-symbol';
        const priceDataArr = priceDataStr.split(" ");
        price.classList.add(...priceDataArr);
        //inserted the required data in qty
        price.innerHTML = `<div class="h-[100%] flex justify-center items-center gap-1 back-every rounded-sm"><span class="border-2 border-gray-400 rounded-[100%] w-8 h-auto font-bold text-gray-600 text-center flex justify-center items-center">${currency.value}</span><input type="number" value="1.00" step="0.01" min="0.00" class="w-[100%] back-every rounded-sm"></div>`;
        //created sction table data
        const action = document.createElement('td');
        //adding class for price
        /*
        const actionDataStr = '';
        const actionDataArr = actionDataStr.split();
        action.classList.add(...actionDataArr);
        */
        //inserted the required data in qty
        action.innerHTML = `<div class="flex justify-center items-center"><i class="fa-regular fa-trash-can bg-red-600 p-2 cursor-pointer rounded-sm active:scale-[0.92]" style="color: #ffffff;"></i></div>`;

        //adding the data in a row
        dataRow.append(itemData, qty, price, action);
        //adding the created row in the table
        tableBody.appendChild(dataRow);
        //adding listener for delete icon for deleting the targeted item from the table
        action.children[0].addEventListener('click',()=>{
            dataRow.remove();
            subTotalPriceOfItems(tableBody);
            renderTaxRate(taxRate.value);
            renderDiscountRate(discount.value);
            renderTotalPrice();
        });
        //rendering the sub price on change of price
        price.children[0].children[1].addEventListener('change',()=>{
            subTotalPriceOfItems(tableBody);
            renderTaxRate(taxRate.value);
            renderDiscountRate(discount.value);
            renderTotalPrice();
        })
        //rendering the sub price on change of quantity
        qty.addEventListener('change',()=>{
            subTotalPriceOfItems(tableBody);
            renderTaxRate(taxRate.value);
            renderDiscountRate(discount.value);
            renderTotalPrice();
        })
        
    };
    
    //calling the createItem function to insert a row
    createItem();
    subTotalPriceOfItems(tableBody);

    //adding the listener for add item button button for adding an item in the table
    addItem.addEventListener('click',()=>{
        createItem();
        subTotalPriceOfItems(tableBody);
        renderTaxRate(taxRate.value);
        renderDiscountRate(discount.value);
        renderTotalPrice();
        const symbolic = document.querySelectorAll('.active-symbol');
        for(let i=0;i<symbolic.length;i++){
        //    console.log(symbolic[i]); 
           symbolic[i].children[0].children[0].innerText = currency.value;
        }
    });

    //function for rendering the discount rate
    const renderDiscountRate = (percent)=>{
        if(percent===''){
            percent = 0;
        }
        let priceSub = priceSection.children[0].children[1].children[1].innerText;
        priceSection.children[1].children[1].children[1].innerHTML = '';
        priceSection.children[1].children[1].children[1].innerHTML = percent;
        priceSection.children[1].children[1].children[5].innerHTML = '';
        priceSection.children[1].children[1].children[5].innerHTML = (percent*(priceSub/100));
    }
    renderDiscountRate(0,subTotalPrice);
    //listener for discount change
    discount.addEventListener('change',(event)=>{
        if(event.target.value < 101){
            renderDiscountRate(event.target.value);
            renderTotalPrice();
        }
    });
    //function for rendering the taxRate
    const renderTaxRate = (percent)=>{
        if(percent===''){
            percent = 0;
        }
        let priceSub = priceSection.children[0].children[1].children[1].innerText;
        priceSection.children[2].children[1].children[1].innerHTML = '';
        priceSection.children[2].children[1].children[1].innerHTML = percent;
        priceSection.children[2].children[1].children[5].innerHTML = '';
        priceSection.children[2].children[1].children[5].innerHTML = (percent*(priceSub/100));
    }
    renderTaxRate(0,subTotalPrice);
    //listener for taxRate change
    taxRate.addEventListener('change',(event)=>{
        if(event.target.value < 101){
            renderTaxRate(event.target.value);
            renderTotalPrice();
        }
    });
    

    const apiKey = 'fca_live_vKcoJkOnqLgfIYN0CGOFcjZs5CyOrJfqbWnS0Kbe';

    // Declare a global variable
    let globalData;

    const dataFetch = async () => {
    try {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
        const data = await response.json();
        // Add INR with a value of 83.37 to the data object
        data.data.INR = 83.37;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    };


    //rendering the cureency symbols and related stuffs
    const renderCurrencyStuff = ()=>{
        // console.log(symbol);
        // console.log(currency.value);
        const symbolic = document.querySelectorAll('.active-symbol');
        for(let i=0;i<symbolic.length;i++){
        //    console.log(symbolic[i]); 
           symbolic[i].children[0].children[0].innerText = currency.value;
        }
        //subtotal symbol part
        priceSection.children[0].children[1].children[0].innerHTML = currency.value;
        //tax symbol part
        priceSection.children[2].children[1].children[4].innerHTML = currency.value;
        //discount symbol part
        priceSection.children[1].children[1].children[4].innerHTML = currency.value;
        //total symbol part
        symbol = total.children[0].innerText;
        console.log(symbol);
        total.children[0].innerHTML = currency.value;
        let tempSymbol = total.children[0].innerText;
        console.log(tempSymbol);
        dataFetch()
            .then((data)=>{
                let value1;
                let value2;
                let prinput;
                let afinput;
            for(let i=0;i<symbolic.length;i++){
                for(let key in data.data){
                    if(key === symbol){
                        console.log(key);
                        console.log(data.data[key]);
                        value1 = data.data[key];
                        prinput = parseFloat(symbolic[i].children[0].children[1].value);
                    }
                    if(key === tempSymbol){
                        value2 = data.data[key];
                        afinput = parseFloat(symbolic[i].children[0].children[1].value);
                    }
                }
                console.log(value1,"hello",value2);
                console.log(prinput,"king",afinput);
                console.log((prinput/value1)*(value2));
                symbolic[i].children[0].children[1].value = ((prinput/value1)*(value2));
                subTotalPriceOfItems(tableBody);
                renderTaxRate(taxRate.value);
                renderDiscountRate(discount.value);
                renderTotalPrice();
            }
        })
    };
    //added listener to the currency selector
    currency.addEventListener('change',()=>{
        renderCurrencyStuff();
    });

    reviewBtn.addEventListener('click',()=>{
        //issue date
        const issuedate = dateSection.children[1].children[1].value;
        console.log(issuedate);

        //invoice number
        const invoiceNumber = invoiceSection.children[0].children[1].value;
        console.log(invoiceNumber);

        //bill to
        const nameto = billto.children[2].value;
        const emailto = billto.children[3].value;
        const addressto = billto.children[4].value;

        //bill from
        const namefor = billfor.children[2].value;
        const emailfor = billfor.children[3].value;
        const addressfor = billfor.children[4].value;

        console.log(nameto, namefor, emailto, emailfor, addressto, addressfor);

        nameSection.children[0].children[1].children[0].innerText = invoiceNumber;
        nameSection.children[0].children[0].innerText = nameto;
        console.log(nameSection.children[0].children[0].innerText);
                                        //td         //td inside

        billToPop.children[1].innerText = nameto; 
        billToPop.children[2].innerText = emailto; 
        billToPop.children[3].innerText = addressto; 

        billForPop.children[1].innerText = namefor; 
        billForPop.children[2].innerText = emailfor; 
        billForPop.children[3].innerText = addressfor; 

        billIssueDate.children[1].innerText = issuedate;
                                    
        console.log(tableBody.children.length,"length");

        for(let i=0;i<tableBody.children.length;i++){
            //item name
            const itemName = tableBody.children[i].children[0].children[0].value;
            const itemDescription = tableBody.children[i].children[0].children[1].value;

            console.log(itemName+"-"+itemDescription);

            //updated qty
            const updatedQty = tableBody.children[i].children[1].children[0].value;
            console.log(updatedQty);

            const price = tableBody.children[i].children[1].children[0].value;
            console.log(price);

            const amountu = parseFloat(updatedQty)*parseFloat(price);

            //created a row for a table
            const popupRow = document.createElement('tr');
            //adding class for item
            const prowDataStr = 'border-b border-gray-200';
            const prowDataArr = prowDataStr.split(" ");
            popupRow.classList.add(...prowDataArr);

            popupRow.innerHTML = `<td class="px-4 py-2">${updatedQty}</td>
            <td>${itemName} - ${itemDescription}</td>
            <td>$ ${price}</td>
            <td>$ ${amountu}</td>`;
            tableBodypop.appendChild(popupRow);
        }

        

        

        mainPopUp.style.display = 'block';
        //new one
    })
    mainPopUp.addEventListener('click',()=>{
        mainPopUp.style.display = 'none';
    })

    
})