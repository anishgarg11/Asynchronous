// Callback hell - multiple asynchronous operations are nested inside one another through callbacks.
setTimeout(function () {
  console.log("Hello");
  setTimeout(function () {
    console.log("Anish");
    setTimeout(function () {
      console.log("garg");
    });
  });
}, 5000);


// Example - this is nested callback are also called "Callback Hell"
function getData(dataId, getNextdata) {
  setTimeout(() => {
    console.log("Anish", dataId);
    if (getNextdata) {
      getNextdata();
    }
  }, 2000);
}

getData(1, () => {
  console.log("getting data2......");
  getData(2, () => {
    console.log("getting data3.....");
getData(3, () => {
      console.log("getting data4....");
      getData(4);
    });
  });
});
