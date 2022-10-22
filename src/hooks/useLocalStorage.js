import React from 'react';

//Save info In local storage
function useLocalStorage(itemName, initialValue){
  
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  //Verificar si existe y parse
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
  
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    //Usar estado
    const [item, setItem] = React.useState(parsedItem);
  
     //funcion para persistencia
     const saveItem = (newItem) =>{
      const stringifiedItem =JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem);
    }
    return [
      item,
      saveItem
    ];
  }

  export {useLocalStorage};