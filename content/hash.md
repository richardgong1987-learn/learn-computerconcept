#hash 算法

## java hashcode算法,是由取模方式实现的

````html
看以下规律
    x % 2 == x & 1
    x % 4 == x & 3
    x % 8 == x & 7 
    ...

推出偶数取模：位运算公式，

    n % 2^i = n & (2^i - 1)//我们约定这里的的"^",不是位运算符，而是表示开方
    
注意：奇数不能套用本公式

在java HashMap算法中，可以简写成：

    num & (length - 1)


````

## HashMap的初始化大小16和下载因子0.75f的原因如下：
```html
    initial capacity of hashmap * Load factor of hashmap =  16 * 0.75 = 12. 
    
    initial capacity of hashmap * Load factor of hashmap =  32 * 0.75 = 24.
    
    initial capacity of hashmap * Load factor of hashmap =  64 * 0.75 = 48.
    
    initial capacity of hashmap * Load factor of hashmap =  128 * 0.75 = 96.
    
    ....
 
```

