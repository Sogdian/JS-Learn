interface Foo {
  bar: number;
}

function isFoo(obj: any): obj is Foo {
  return typeof(obj?.bar) === 'number';
}

function processFooObj(obj: any) {
  if (isFoo(obj)) {
    // Здесь obj имеет тип Foo
    console.log(obj.bar);
  } else {
    console.log("Invalid foo data");
  }
}
