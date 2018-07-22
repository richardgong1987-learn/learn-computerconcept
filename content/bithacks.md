## 判断两个数是是一正一负


书：

http://graphics.stanford.edu/~seander/bithacks.html
 

```html

    int x,y;
    (x ^ y) < 0

```

##对比两个值大小

```html

    var x = 5;
    var y = 9;
    
    
    var r = y ^ ((x ^ y) & -(x < y));//min
    
    console.log(r);
    
    var r = x ^ ((x ^ y) & -(x < y));//max
    
    console.log(r);

```


