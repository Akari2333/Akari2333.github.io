var posts=["2023/11/04/Markdown语法/","2023/11/03/blog参考网站/","2023/11/04/hello world/","2023/11/07/二分查找/","2023/11/04/发癫日常（1）（Blog测试√）/","2023/11/06/小站日记/","2023/11/07/实验四-常用类和集合框架/","2023/11/03/空_无/","2023/11/05/每日一颠（2）/","2023/11/07/连续存储数组的算法演示/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};