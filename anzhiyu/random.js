var posts=["2023/11/26/0-碎碎念/","2023/11/03/1. 空_无/","2023/11/07/10. 【汇总】学习教程/","2023/11/07/11. 递归—汉诺塔/","2023/11/12/14. 萌新九宫格之首的全新解读：里界小CL——假如逝去之人不再归来/","2023/11/08/12. 托更计划（bushi/","2023/11/09/13. 十大排序—选择排序/","2023/11/20/15. 静态-链式二叉树/","2023/11/23/16. 单链表/","2023/11/23/17. 队列——循环队列/","2023/11/23/19. 栈——线性结构的应用之一/","2023/11/23/18. 队列——链式队列/","2023/11/26/21-拖更—炸蛋纽er-计组小科普/","2023/11/24/20. 以文学视角评价超越时代的巅峰之作——《白色相簿2》/","2023/11/04/2. 发癫日常（1）（Blog测试√）/","2023/11/27/22-十大排序—快速排序/","2023/11/28/23-语录001/","2023/11/03/4. blog参考网站/","2023/11/04/5. Markdown语法/","2023/11/04/3. hello world/","2023/11/05/6. 每日一颠（2）/","2023/11/07/7. 连续存储数组的算法演示/","2023/11/07/8. 二分查找/","2023/11/07/9. 实验四-常用类和集合框架/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};