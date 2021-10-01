const input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  let z = 0;
  const result = input.map(key => ((key.x * key.x) + (key.y * key.y)));

  console.log(Math.sqrt(result[0]) === 5);
  console.log(Math.sqrt(result[1]) === 13);
  console.log(Math.sqrt(result[2]) === 17);
  