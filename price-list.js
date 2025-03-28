const aPriceList = {};  

export const setPriceList = (priceList) => {
  aPriceList.list = priceList;  
};

export const getPrice = (itemId, quantity) => {
  console.log(itemId, quantity); // Or simply reference them if you're planning to use them later
  return 500; 
};
