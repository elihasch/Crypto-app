const convertData = (data, type) => {
  //chon type besorate reshte tarif shode mitavan be rahati in gone gereftesh dargheire in sorat khata midad

  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1], //dakhele [] gozashtim ke dynamik bashe
    };
  });
  return convertedData;
};
export { convertData };
