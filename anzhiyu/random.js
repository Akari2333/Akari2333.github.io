var posts=["posts/2927/","posts/53020/","posts/26849/","posts/64685/","posts/35809/","posts/61129/","posts/64630/","posts/45748/","posts/13537/","posts/23318/","posts/7017/","posts/34532/","posts/38068/","posts/33655/","posts/23610/","posts/46612/","posts/38023/","posts/15160/","posts/47933/","posts/52338/","posts/19952/","posts/6566/","posts/13071/","posts/16107/","posts/59891/","posts/315/","posts/29328/","posts/5823/","posts/9222/","posts/56947/","posts/5270/","posts/22648/","posts/14317/","posts/7133/","posts/42877/","posts/50615/","posts/35130/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};