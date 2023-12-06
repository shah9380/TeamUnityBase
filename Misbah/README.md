# TeamUnityBase - Misbah

Welcome to TeamUnityBase's Misbah project! This application is designed to streamline the process of generating invoices with dynamic currency conversion, real-time price updates, and the ability to download invoices as PDFs.

## Project Links

- Hosted Link: [Misbah](https://shah9380.github.io/TeamUnityBase/Misbah/)
- Repository Link: [GitHub Repository](https://github.com/shah9380/TeamUnityBase/tree/main/Misbah)

## Functionalities

### Currency Conversion

The `dataFetch` function fetches the latest currency conversion rates using the Free Currency API. This function is invoked when the application loads, and the data is stored in the `globalData` variable. The `handleData` function processes this data, dynamically populating the currency dropdown menu and updating the displayed symbols.

```javascript
// Function to fetch currency conversion rates
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

// Handling the fetched data
const handleData = () => {
  // Populate currency dropdown menu
  for (let e in globalData.data) {
    const opt = document.createElement('option');
    opt.value = e;
    opt.innerText = e;
    currency.appendChild(opt);
  }

  // Update displayed symbols
  const symbolic = document.querySelectorAll('.active-symbol');
  for (let i = 0; i < symbolic.length; i++) {
    symbolic[i].children[0].children[0].innerText = currency.value;
  }
};
```
![image](https://github.com/shah9380/TeamUnityBase/assets/130676464/85ba4e75-ef41-4d8b-b9bc-77f52c188ec9)
![image](https://github.com/shah9380/TeamUnityBase/assets/130676464/ae09f0fe-7843-40fd-80c8-61cd4c29a56d)



### Real-time Price Updates

The `subTotalPriceOfItems` function calculates the subtotal of items in the invoice table. It iterates through the table rows, retrieving quantities and prices to calculate the total. This function is invoked whenever there's a change in item quantity or price, ensuring real-time updates.

```javascript
// Function to calculate subtotal of items in the table
const subTotalPriceOfItems = (table) => {
  subTotalPrice = 0;
  for (let i = 0; i < table.rows.length; i++) {
    let qnty = table.rows[i].children[1].children[0].value;
    let price = table.rows[i].children[2].children[0].children[1].value;
    subTotalPrice += qnty * price;
  }
  renderSubPrice(subTotalPrice);
  return subTotalPrice;
};
```

### PDF Download

The `downloadpdf` event listener handles the PDF download functionality. It uses the html2pdf library to convert the invoice section into a downloadable PDF. The filename is set to include the invoice number.

```javascript
// Event listener for PDF download button
downloadpdf.addEventListener('click', (event) => {
  const invoiceNo = invoiceSection.children[0].children[1].value;
  event.preventDefault();
  const downloadPart = document.querySelector('.pdf-section');
  html2pdf(downloadPart, {
    filename: `Invoice-${invoiceNo}.pdf`,
    margin: 10,
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });
});
```

These functions play a crucial role in achieving the stated functionalities of currency conversion, real-time price updates, and PDF downloads within the Misbah project.

### Adding Items to the Table

The `createItem` function is responsible for dynamically creating a new row in the invoice table when the user clicks the "Add Item" button. This function is called both during the initialization of the page and when the user manually clicks the "Add Item" button.

```javascript
// Function to create a new row for an item in the table
const createItem = () => {
  const dataRow = document.createElement('tr');
  // ... (creating and configuring item, qty, price, and action cells)

  // Adding the data row to the table body
  tableBody.appendChild(dataRow);

  // Adding a listener for the delete icon to remove the item
  action.children[0].addEventListener('click', () => {
    dataRow.remove();
    subTotalPriceOfItems(tableBody);
    renderTaxRate(taxRate.value);
    renderDiscountRate(discount.value);
    renderTotalPrice();
  });

  // Adding listeners for price and quantity changes to update the total
  price.children[0].children[1].addEventListener('change', () => {
    subTotalPriceOfItems(tableBody);
    renderTaxRate(taxRate.value);
    renderDiscountRate(discount.value);
    renderTotalPrice();
  });

  qty.addEventListener('change', () => {
    subTotalPriceOfItems(tableBody);
    renderTaxRate(taxRate.value);
    renderDiscountRate(discount.value);
    renderTotalPrice();
  });
};
```

The `addItem` event listener triggers the `createItem` function when the "Add Item" button is clicked, ensuring that a new row is added to the table. Subsequently, the total and related values are updated in real-time.

```javascript
// Event listener for the "Add Item" button
addItem.addEventListener('click', (event) => {
  event.preventDefault();
  createItem();
  subTotalPriceOfItems(tableBody);
  renderTaxRate(taxRate.value);
  renderDiscountRate(discount.value);
  renderTotalPrice();

  // Setting the currency symbol for the newly added item
  const symbolic = document.querySelectorAll('.active-symbol');
  for (let i = 0; i < symbolic.length; i++) {
    symbolic[i].children[0].children[0].innerText = currency.value;
  }
});
```

These functions contribute to the seamless addition of items to the invoice table, along with real-time updates of the total and related values in the Misbah project.
## Additional Details

- **API Key Handling:** The application securely handles the API key for the Free Currency API to fetch the latest currency conversion rates.

- **Responsive Design:** The application features a responsive design to ensure a consistent and user-friendly experience across various devices and screen sizes.

- **Popup Confirmation:** A popup confirmation is displayed when the user attempts to download the PDF, ensuring that essential details such as the issue date, invoice number, and billing details are provided before generating the invoice.

- **Custom Styling:** The application incorporates custom styling for a professional and visually appealing appearance.

We hope you find TeamUnityBase's Misbah project valuable for your invoicing needs. Feel free to explore the hosted link, and for any issues or suggestions, please open an [issue](https://github.com/shah9380/TeamUnityBase/issues) on our GitHub repository.

Thank you for using Misbah!
