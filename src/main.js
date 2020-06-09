let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*大家好,我是薯条君
接下来我要加样式了
我要加的样式是*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    
}
/*接下来我要把div变成一个太极图
 *看好了！
 *首先：把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
 *接下来使用背景渐变是一黑一白两条鱼
 *https://cssgradient.io/
*/
#div1{  
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
     rgba(255,255,255,1) 50%, 
     rgba(255,255,255,1) 50%, 
     rgba(0,0,0,1) 50%);
}
/*接下来让阴中有阳，阳中有阴*/
#div1::before{
     width:100px;
     height:100px;
     top:0;
     left:50%;
     transform:translateX(-50%);
     background:#000;
     border-radius:50%;
     background: radial-gradient(circle, rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%);rgba(0,0,0,1) 25%); rgba(0,0,0,1) 100%);
 }
 #div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff ;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);
}
`;
//这里使用正则表达式完成换行，如果不使用，只会完成第一个换行，这种方法会出现每行末尾出现'<',所以不采用这种方法
// string = string.replace(/\n/g,'<br>');
let string2 = '';
let n = 0;
// demo.innerHTML = string.substring(0,n); //parcel的方便之处，会自动刷新内容

//这里使用递归的好处是可以设置什么时候停止，比setInterval更自由地控制什么时候
let step = () => {
    // console.log('递归调用');
    setTimeout(() => {
        //如果是回车就不照搬
        //如果不是回车就照搬

        // string2 += string[n] === '\n'?'<br>':string[n];
        if(string[n] === '\n'){
            string2 += '<br>';
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,9999);
        if (n < string.length-1) {
            //n不是最后一个
            n += 1
            step();
        }
    }, 50);
};
step();

