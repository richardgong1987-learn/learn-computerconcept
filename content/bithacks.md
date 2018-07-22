## 判断两个数是是一正一负


书：

https://codeforwin.org/2018/05/10-cool-bitwise-operator-hacks-and-tricks.html


http://www.catonmat.net/blog/low-level-bit-hacks-you-absolutely-must-know/


http://graphics.stanford.edu/~seander/bithacks.html
 
https://www.geeksforgeeks.org/find-ith-index-character-in-a-binary-string-obtained-after-n-iterations-set-2/


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


