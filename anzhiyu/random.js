var posts=["2023/11/04/Markdown语法/","2023/11/04/hello world/","2023/11/07/【汇总】学习教程/","2023/11/07/二分查找/","2023/11/09/十大排序—选择排序/","2023/11/04/发癫日常（1）（Blog测试√）/","2023/11/07/实验四-常用类和集合框架/","2023/11/03/blog参考网站/","2023/11/08/托更计划（bushi/","2023/11/05/每日一颠（2）/","2023/11/03/空_无/","2023/11/12/萌新九宫格之首的全新解读：里界小CL——假如逝去之人不再归来/","2023/11/07/连续存储数组的算法演示/","2023/11/07/递归—汉诺塔/","2023/11/20/静态-链式二叉树/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};