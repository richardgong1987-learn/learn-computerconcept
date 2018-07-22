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

在java HashMap 取模算法中，可以简写成：

    num & (length - 1)


    index = e.hash & (newCap - 1) 

    等同于：

    index = e.hash % newCap
    
````

## HashMap的初始化大小16和下载因子0.75f的原因如下：
```html
    initial capacity of hashmap * Load factor of hashmap =  16 * 0.75 = 12. 
    
    initial capacity of hashmap * Load factor of hashmap =  32 * 0.75 = 24.
    
    initial capacity of hashmap * Load factor of hashmap =  64 * 0.75 = 48.
    
    initial capacity of hashmap * Load factor of hashmap =  128 * 0.75 = 96.
    
    ....
 
```

## java HashMap tableSizeFor方法
````html
    
    static final int tableSizeFor(int cap) {
            int n = cap - 1;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
            return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
        }

````

### 详解：

tableSizeFor的目的就是为了把传进来的值

tableSizeFor方法保证函数返回值是大于等于给定参数initialCapacity最小的2的幂次方的数值。

是什么意思呢?

比如，传 16,它的最小2的幂次方值16。   12 => 16 - 1 = 15> 0000 1111,利用这个数来给HashMap取模

```html

            int n = cap - 1;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
           
           这里作的一切是为了把cap二进制的0都变成1，1也是1，然后
           
           (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
           
           这里的n + 1是为了给
           
           num & (length - 1)时，
           这个 1，减掉，就会变成二进制都为1111数，比如16 - 1 = 15，然后。就有0000 1111，这样就是为了取模  
           
```

