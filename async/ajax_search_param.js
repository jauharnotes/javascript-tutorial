function doSearch() {
  const ajax = new XMLHttpRequest();

  const param = new URLSearchParams();
  param.append("search", document.getElementById("search_value").value);

  ajax.open("GET", `https://hookb.in/JK1MVePo1OTg0l990R7j?${param.toString()}`);
  ajax.onload = function () {
    console.info(ajax.responseText);
  };

  ajax.send(param);
}

document.getElementById("search").onclick = doSearch;
