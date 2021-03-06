# 位运算

## -- 求： 奇 偶  

- 二进制的最低位是 1 奇数,0 偶数

- 二进制的位数（由低到高）分别代表着1 2 4 8, 16 32 64 128, 256 512 1024

- 只有最低位的这个是1或0

- 于是有：
-  二进制最低位为1时=>奇数
    
-  二进制最低位为0时=>偶数

```html

(value & 0x1) == 1 //为奇

(value & 0x1) == 0 //为偶

执行细节如下：

  0000 0000 0000 0011 = 3
&   
  0000 0000 0000 0001 = 1 
----------------------
  0000 0000 0000 0001 = 1
    
 
```

## -- 求： 最低4位的二进制保存的数据

```html
 
 由于
 
0000 0000 0000 11111 = 15

所以，只要用 & 操作，即可取出 最低4位的保存数据

  0 1 1 1 0 0 1 0 = 114
&                        Bitmask of 0x0F to find out the lower nibble
  0 0 0 0 1 1 1 1 = 15 
 -----------------
  0 0 0 0 0 0 1 0 = 2
 
 .....


0000 0000 11111 11111 = 255 

同理可以求出：最低8位的保存数据


0000 11111 11111 11111 = 4095 

同理可以求出：最低12位的保存数据

 
0000 11111 11111 11111 = 65535 


同理可以求出：最低16位的保存数据

  ....
  
``` 

## -- 颜色RGB色素操作

RGB色素:

\#CCDDEE

这里R,G,B表示红绿蓝。各位两位16进制数

在这里CC就是红，DD绿，EE蓝

如，只保留红色值：

```html
 
       1100 1100 1101  1101  1110  1110 = 13426158 = 0xCCDDEE 
     &
       1111 1111 0000  0000  0000  0000 = 16711680 = 0xff0000 
     ---------------------------------------------------------------
       1100 1100 0000  0000  0000  0000 = 13369344 = 0xCC0000  

```


//只保留红色色素

```html
 
    redColour = 0xCCDDEE;
    
    byte redColour = imagePixel & 0xFF0000; /*Bitmasking with AND operator */

```


获取颜色的值如下：

```html

    //Now, we only want red colour
    redColour = (redColour >> 16) & 0xFF;  /* This now returns a red colour between 0x00 and 0xFF.

```

1100 1100 1101  1101  1110  1110 向右往16位后为：0000 0000 0000 0000 1100 1100
  
```html

      ... 0000 0000 0000  0000  1100 1100
    &    
      ... 0000 0000 0000  0000  1111 1111
    ------------------------------------------
      ... 0000 0000 0000  0000  1100 1100

```    
  
  
  
同理，保留绿色部分

````html

    redColour = 0xCCDDEE;
    
    byte redColour = imagePixel & 0x00FF00; /*Bitmasking with AND operator */


取值
   
   redColour = (redColour >> 8) & 0xFF;
          
     
````


同理，保留蓝色部分

````html

    redColour = 0xCCDDEE;
    
    byte redColour = imagePixel & 0x0000FF; /*Bitmasking with AND operator */


取值
   
   redColour = redColour & 0xFF;
          
````

## - 关于 1 >> 32 == 1的问题

 n >> m,
  
 it only looks at the last five bits of m 
 
 so any number greater than 31 will be reduced to that number mod 32. So,
  
 (256 >> 37) == 8 is true.
 
 * 在移位运算中,不管是左移还是右移。
 
 如果移动的位置大于31，就会被 32 **取模** ，然后，再进行移动
 
 所以这里 257 >> 37 == 257 >> (37 % 32) true
 
 永远都是**取模32**
  
 
 

