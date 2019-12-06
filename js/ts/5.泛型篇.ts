// 重用性 可扩展
function identity<T>(x: T): T{
  return x;
}
identity<string>('12')

function identity2<T>(x: T[]): T[]
{
  return x;
}

// 泛型类型