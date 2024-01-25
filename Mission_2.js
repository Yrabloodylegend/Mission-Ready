let arr = [];

function onClick() {
  const val = document.getElementById("value").value;
  if (val.length > 0) arr.push(val)

  let listVals = "";
  for (let i = 0; i <arr.length; ++i)
{
    listVals += `<li>${arr[i]} </li>`;
}
document.getElementById("list").innerHTML = listVals
}

