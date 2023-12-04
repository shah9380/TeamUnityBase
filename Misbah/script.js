document.addEventListener('DOMContentLoaded',()=>{

    //top section called
    const topSection = document.getElementById('top-section');
    const dateSection = topSection.children[0];
    const invoiceSection = topSection.children[1];
    //calling the table body
    const tableBody = document.getElementById('table-body');
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
    const symbol = total.children[0].innerText;
    //getting the symbol from the currency
    const currency = document.getElementById('currency-alter');
    
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
        let valueDis = parseFloat(numDis);
        let numTax = priceSection.children[1].children[1].children[5].innerText;
        let valueTax = parseFloat(numTax);
        let ans = value-valueDis-valueTax;
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
        qty.innerHTML = `<input type="number" value="1" min="1" class="w-[100%] back-every rounded-sm">`;
        //created price table data
        const price = document.createElement('td');
        //adding class for price
        const priceDataStr = 'h-[100%] active-symbol';
        const priceDataArr = priceDataStr.split(" ");
        price.classList.add(...priceDataArr);
        //inserted the required data in qty
        price.innerHTML = `<div class="h-[100%] flex justify-center items-center gap-1 back-every rounded-sm"><span class="border-2 border-gray-400 rounded-[100%] w-8 h-auto font-bold text-gray-600 text-center flex justify-center items-center">${currency.value}</span><input type="number" value="1.00" step="0.01" min="1.00" class="w-[100%] back-every rounded-sm"></div>`;
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
        renderDiscountRate(event.target.value);
        renderTotalPrice();
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
        renderTaxRate(event.target.value);
        renderTotalPrice();
    });
    
    //rendering the cureency symbols and related stuffs
    const renderCurrencyStuff = ()=>{
        // console.log(symbol);
        // console.log(currency.value);
        const symbolic = document.querySelectorAll('.active-symbol');
        symbolic[0].children[0].children[0].innerText = currency.value;
        //subtotal symbol part
        priceSection.children[0].children[1].children[0].innerHTML = currency.value;
        //tax symbol part
        priceSection.children[2].children[1].children[4].innerHTML = currency.value;
        //discount symbol part
        priceSection.children[1].children[1].children[4].innerHTML = currency.value;
        //total symbol part
        total.children[0].innerHTML = currency.value;
    };
    //added listener to the currency selector
    currency.addEventListener('change',()=>{
        renderCurrencyStuff();
    });
})