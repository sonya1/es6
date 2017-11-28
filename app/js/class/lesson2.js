//数组解构赋值
{
	let a,b,rest;
	[a,b] = [1,2];
	console.log(a,b);
}

{
	let a,b,rest;
	[a,b,...rest] = [1,2,3,4,5,6,7];
	console.log(a,b,rest);
}

{
	let a,b;
	({a,b} = {a:1,b:2})
	console.log(a,b);
}

{
	let a,b,c,rest;
	[a,b,c=3] = [1,2];
	console.log(a,b,c);
}

{
	let a=1;
	let b=2;
	[a,b] = [b,a];
	console.log(a,b);  //交换变量
}

{
	function f(){
		return [1,2];  //数量，金额
	}
	let a,b;
	[a,b] = f();  //取函数返回的数组
	console.log(a,b); 
}

{
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,,b] = f();  //可以选择性的接受收某几个值
	console.log(a,b);
}

{
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,...b] = f();  //取第一个值，其他的放在数组中
	console.log(a,b);
}

{
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,...b] = f();  //取第一个值，过第二个值，剩下的放在数组中
	console.log(a,b);
}

//对象解构赋值
{
	let o = {p:42,q:true};
	let {p,q} = o;
	console.log(p,q); //42 true
}

{
	let o = {p:42,q:true};
	let {q,p} = o;
	console.log(p,q); //42 true
}

{
	let o = {p:42,q:true};
	let {a,b} = o;
	console.log(a,b); //undefined undefined
}

{
	let {a=10,b=5}={a:3};
	console.log(a,b);  //3 5 
}

{
	let metaData={
		title:'abc',
		dest:[{
			title:'test',
			desc:'description'
		}]
	};
	let {title:esTitle,dest:[{title:cnTitle}]} = metaData;
	console.log(esTitle,cnTitle);  
}