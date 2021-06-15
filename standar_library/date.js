{
  const date = new Date();
  console.log(date);

  const date2 = new Date(2021, 14, 7);
  console.log(date2);

  const date3 = new Date(2021, 14, 6, 16, 15, 9, 123);
  console.log(date3);

  const date4 = new Date(1623643065956);
  console.log(date4);
}

{
  // Unix Timestamp
  const timesTamp = Date.now();
  console.log(timesTamp);

  const dateUnix = new Date(timesTamp);
  console.log(dateUnix);

  console.log(dateUnix.getTime());

  // Parsing Date
  const parseTimesTamp = Date.parse("2020-06-15T12:50:30.123+07:00");
  console.log(parseTimesTamp);

  const parseDate = new Date(parseTimesTamp);
  console.log(parseDate);
}

{
  // Date Getter & Setter
  const date = new Date();
  date.setFullYear(2021);

  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTimezoneOffset());
}
