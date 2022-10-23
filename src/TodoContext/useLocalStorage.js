import React from "react";

//Save info In local storage
function useLocalStorage(itemName, initialValue) {
  //Usar estado inicial, luego se actualiza
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        //Simulacion de tiempo de espera en una api
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      //Verificar si existe y parse
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      //Despues de que cargue se cambia el estado
      setLoading(false);

      }catch(error){
        setError(error);
      }
    }, 5000);
  });

  //funcion para persistencia
  const saveItem = (newItem) => {
    try{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    }catch(error){
        setError(error);
    }
  };
  return {item, saveItem,loading,error}
}

export { useLocalStorage };
