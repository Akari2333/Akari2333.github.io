var posts=["2023/11/04/hello world/","2023/11/03/blog参考网站/","2023/11/04/发癫日常（1）（Blog测试√）/","2023/11/03/空_无/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};