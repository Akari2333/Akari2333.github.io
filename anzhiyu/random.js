var posts=["posts/2927/","posts/26849/","posts/64685/","posts/53020/","posts/35809/","posts/61129/","posts/64630/","posts/23318/","posts/45748/","posts/13537/","posts/34532/","posts/7017/","posts/38068/","posts/23610/","posts/33655/","posts/38023/","posts/46612/","posts/15160/","posts/47933/","posts/16107/","posts/7133/","posts/22648/","posts/35130/","posts/42877/","posts/14317/","posts/50615/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};