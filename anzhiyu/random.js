var posts=["posts/2927/","posts/26849/","posts/64685/","posts/53020/","posts/61129/","posts/35809/","posts/64630/","posts/45748/","posts/23318/","posts/13537/","posts/7017/","posts/34532/","posts/38068/","posts/23610/","posts/33655/","posts/38023/","posts/46612/","posts/15160/","posts/52338/","posts/47933/","posts/19952/","posts/13071/","posts/6566/","posts/16107/","posts/21169/","posts/11281/","posts/32623/","posts/24210/","posts/19788/","posts/12893/","posts/14941/","posts/41925/","posts/59955/","posts/7133/","posts/55426/","posts/65/","posts/51175/","posts/50685/","posts/39262/","posts/13597/","posts/31372/","posts/18027/","posts/22648/","posts/3605/","posts/4234/","posts/8193/","posts/30817/","posts/19129/","posts/40362/","posts/38284/","posts/50156/","posts/9978/","posts/14317/","posts/6862/","posts/9168/","posts/29189/","posts/11897/","posts/53572/","posts/12613/","posts/19752/","posts/41461/","posts/35351/","posts/11038/","posts/35130/","posts/39589/","posts/20641/","posts/22222/","posts/1135/","posts/33971/","posts/48761/","posts/50196/","posts/17605/","posts/18884/","posts/20745/","posts/47159/","posts/42877/","posts/50615/","posts/47035/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};