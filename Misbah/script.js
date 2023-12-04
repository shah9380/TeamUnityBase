document.addEventListener('DOMContentLoaded',()=>{

    //function to get the current date in 'dd-mm-yyyy' format
    const date = ()=>{
        const currentdate = new Date();
        const date = currentdate.getDate();
        const month = currentdate.getMonth();
        const year = currentdate.getFullYear();
        const dateNow = date+"-"+month+"-"+year;
        return dateNow;
    };

    //top section called
    const topSection = document.getElementById('top-section');
    const dateSection = topSection.children[0];
    const invoiceSection = topSection.children[1];
    //setting up the current date in page
    dateSection.children[0].children[1].innerHTML = date();

    const tableBody = document.getElementById('table-body');

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
        const priceDataStr = 'h-[100%]';
        const priceDataArr = priceDataStr.split(" ");
        price.classList.add(...priceDataArr);
        //inserted the required data in qty
        price.innerHTML = `<div class="h-[100%] flex justify-center items-center gap-1 back-every rounded-sm"><span class="border-2 border-gray-400 rounded-[100%] w-8 h-auto font-bold text-gray-600 text-center flex justify-center items-center">$</span><input type="number" value="1.00" step="0.01" min="1.00" class="w-[100%] back-every rounded-sm"></div>`;
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
    };
    
    //calling the createItem function to insert a row
    createItem();
    
})