var posts=["posts/64685/","posts/26849/","posts/2927/","posts/53020/","posts/35809/","posts/64630/","posts/61129/","posts/23318/","posts/7017/","posts/45748/","posts/13537/","posts/38068/","posts/34532/","posts/33655/","posts/46612/","posts/23610/","posts/38023/","posts/19952/","posts/47933/","posts/15160/","posts/52338/","posts/6566/","posts/13071/","posts/315/","posts/29328/","posts/59891/","posts/5823/","posts/16107/","posts/9222/","posts/14423/","posts/56947/","posts/5270/","posts/24827/","posts/15856/","posts/2105/","posts/7133/","posts/49149/","posts/40778/","posts/21169/","posts/48904/","posts/11281/","posts/14317/","posts/22648/","posts/35130/","posts/42877/","posts/50615/","posts/24210/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};