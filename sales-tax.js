const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

const numbers = [100, 200, 300];

// expected results:
// { Telus: { totalSales: 1300, totalTaxes: 144 },
// Bombardier: { totalSales: 800, totalTaxes: 40 }}

// function to sum sales
const sumSales = (arr) => {
  let sales = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sales;
};

const calculateSalesTax = (salesData, taxRates) => {
  // create object for each company
  let result = {};
  for (const company of salesData) {
    console.log(company.province);
    if (!result[company.name]) {
      result[company.name] = {
        totalSales: sumSales(company.sales),
        totalTaxes: sumSales(company.sales) * taxRates[company.province],
      };
      // if the company exists in the object, add that result to existing object
    } else {
      result[company.name].totalSales += sumSales(company.sales);
      result[company.name].totalTaxes +=
        sumSales(company.sales) * taxRates[company.province];
    }
  }
  return result;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
