var posts=["posts/26849/","posts/2927/","posts/35809/","posts/64685/","posts/53020/","posts/61129/","posts/64630/","posts/45748/","posts/23318/","posts/13537/","posts/7017/","posts/23610/","posts/34532/","posts/38068/","posts/33655/","posts/15160/","posts/38023/","posts/47933/","posts/46612/","posts/19952/","posts/52338/","posts/6566/","posts/13071/","posts/16107/","posts/24210/","posts/11281/","posts/32623/","posts/21169/","posts/19788/","posts/12893/","posts/14941/","posts/59955/","posts/7133/","posts/41925/","posts/65/","posts/55426/","posts/51175/","posts/50685/","posts/31372/","posts/18027/","posts/13597/","posts/39262/","posts/22648/","posts/3605/","posts/8193/","posts/30817/","posts/19129/","posts/4234/","posts/50156/","posts/38284/","posts/40362/","posts/14317/","posts/42877/","posts/9978/","posts/35130/","posts/50615/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};