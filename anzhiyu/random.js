var posts=["posts/2927/","posts/26849/","posts/64685/","posts/35809/","posts/53020/","posts/61129/","posts/64630/","posts/45748/","posts/23318/","posts/13537/","posts/7017/","posts/38068/","posts/34532/","posts/23610/","posts/33655/","posts/15160/","posts/38023/","posts/46612/","posts/47933/","posts/6566/","posts/52338/","posts/13071/","posts/19952/","posts/16107/","posts/21169/","posts/24210/","posts/11281/","posts/19788/","posts/32623/","posts/12893/","posts/14941/","posts/59955/","posts/41925/","posts/7133/","posts/55426/","posts/51175/","posts/65/","posts/39262/","posts/13597/","posts/18027/","posts/50685/","posts/14317/","posts/31372/","posts/22648/","posts/35130/","posts/42877/","posts/50615/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};