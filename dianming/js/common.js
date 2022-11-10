// 名单
/*var students = [
 {"group": 1, "id": 49, "index": 1, "name": "张学业"},
 {"group": 1, "id": 39, "index": 2, "name": "尹伟"},
 {"group": 1, "id": 37, "index": 3, "name": "满意"},
 {"group": 1, "id": 31, "index": 4, "name": "郑斌龙"},
 {"group": 3, "id": 32, "index": 5, "name": "李浩"},
 {"group": 3, "id": 34, "index": 6, "name": "秦佳俊"},
 {"group": 3, "id": 15, "index": 7, "name": "王智勇"},
 {"group": 3, "id": 29, "index": 8, "name": "杨佳缙"},
 {"group": 2, "id": 33, "index": 9, "name": "周琰"},
 {"group": 5, "id": 18, "index": 10, "name": "耿芳芳"},
 {"group": 2, "id": 43, "index": 11, "name": "郭焕斌"},
 {"group": 2, "id": 36, "index": 12, "name": "赵文元"},
 {"group": 2, "id": 26, "index": 13, "name": "郑培文"},
 {"group": 4, "id": 24, "index": 14, "name": "王梁"},
 {"group": 4, "id": 19, "index": 15, "name": "孙梦尧"},
 {"group": 4, "id": 21, "index": 16, "name": "王磊"},
 {"group": 4, "id": 20, "index": 17, "name": "邓鹏飞"},
 {"group": 5, "id": 23, "index": 18, "name": "朱博文"},
 {"group": 5, "id": 25, "index": 19, "name": "高立业"},
 {"group": 5, "id": 22, "index": 20, "name": "卢帅"},
 {"group": 1, "id": 7, "index": 21, "name": "王倩"},
 {"group": 3, "id": 38, "index": 22, "name": "朱琼洁"},
 {"group": 2, "id": 27, "index": 23, "name": "钱玉淳"},
 {"group": 4, "id": 14, "index": 24, "name": "侯亚杰"},
 {"group": 1, "id": 4, "index": 25, "name": "赵东亚"},
 {"group": 8, "id": 1, "index": 26, "name": "王月"},
 {"group": 6, "id": 11, "index": 27, "name": "刘鹏"},
 {"group": 6, "id": 3, "index": 28, "name": "李伟民"},
 {"group": 6, "id": 9, "index": 29, "name": "刘杨诚"},
 {"group": 6, "id": 30, "index": 30, "name": "杨振杰"},
 {"group": 3, "id": 16, "index": 31, "name": "肖磊鑫"},
 {"group": 2, "id": 5, "index": 32, "name": "吴李桃"},
 {"group": 6, "id": 13, "index": 33, "name": "邹玉平"},
 {"group": 5, "id": 46, "index": 34, "name": "杨庚润"},
 {"group": 6, "id": 12, "index": 35, "name": "杨潇"},
 {"group": 7, "id": 45, "index": 36, "name": "曹嘉远"},
 {"group": 7, "id": 48, "index": 37, "name": "王圣红"},
 {"group": 8, "id": 47, "index": 38, "name": "郝熠"},
 {"group": 4, "id": 10, "index": 39, "name": "刘丽娟"},
 {"group": 7, "id": 28, "index": 40, "name": "黄智超"},
 {"group": 7, "id": 17, "index": 41, "name": "蒋吉兆"},
 {"group": 7, "id": 35, "index": 42, "name": "张学泽"},
 {"group": 7, "id": 41, "index": 43, "name": "周圣铠"},
 {"group": 8, "id": 42, "index": 44, "name": "邸鑫"},
 {"group": 8, "id": 2, "index": 45, "name": "张桦"},
 {"group": 8, "id": 44, "index": 46, "name": "李春罗"},
 {"group": 8, "id": 8, "index": 47, "name": "徐光旭"}
 ];*/
var students = [

    {"group": 	1	, "id": 	1	, "index": 	1	, "name": "郭宁瑶"},
    {"group": 	2	, "id": 	2	, "index": 	2	, "name": "邓海涛"},
    {"group": 	3	, "id": 	3	, "index": 	3	, "name": "张义博"},
    {"group": 	4	, "id": 	4	, "index": 	4	, "name": "韩怡帆"},
    {"group": 	5	, "id": 	5	, "index": 	5	, "name": "张子涵"},
    {"group": 	6	, "id": 	6	, "index": 	6	, "name": "杨承硕"},
    {"group": 	7	, "id": 	7	, "index": 	7	, "name": "董畅"},
    {"group": 	8	, "id": 	8	, "index": 	8	, "name": "马仔昂"},
    {"group": 	9	, "id": 	9	, "index": 	9	, "name": "于淏川"},
    {"group": 	10	, "id": 	10	, "index": 	10	, "name": "郭航源"},
    {"group": 	11	, "id": 	11	, "index": 	11	, "name": "杨喻喆"},
    {"group": 	12	, "id": 	12	, "index": 	12	, "name": "潘岩"},
    {"group": 	13	, "id": 	13	, "index": 	13	, "name": "白依鑫"},
    {"group": 	14	, "id": 	14	, "index": 	14	, "name": "王永灿"},
    {"group": 	15	, "id": 	15	, "index": 	15	, "name": "段亚宗"},
    {"group": 	16	, "id": 	16	, "index": 	16	, "name": "李圳港"},
    {"group": 	17	, "id": 	17	, "index": 	17	, "name": "夏艺萌"},
    {"group": 	18	, "id": 	18	, "index": 	18	, "name": "苏文博"},
    {"group": 	19	, "id": 	19	, "index": 	19	, "name": "刘涵茹"},
    {"group": 	20	, "id": 	20	, "index": 	20	, "name": "胡浩宇"},
    {"group": 	21	, "id": 	21	, "index": 	21	, "name": "安泳翰"},
    {"group": 	22	, "id": 	22	, "index": 	22	, "name": "刘亦然"},
    {"group": 	23	, "id": 	23	, "index": 	23	, "name": "杨帅辉"},
    {"group": 	24	, "id": 	24	, "index": 	24	, "name": "冯帅璞"},
    {"group": 	25	, "id": 	25	, "index": 	25	, "name": "杨德良"},
    {"group": 	26	, "id": 	26	, "index": 	26	, "name": "韩雨萌"},
    {"group": 	27	, "id": 	27	, "index": 	27	, "name": "薛星瑶"},
    {"group": 	28	, "id": 	28	, "index": 	28	, "name": "赵一凡"},
    {"group": 	29	, "id": 	29	, "index": 	29	, "name": "刘娅楠"},
    {"group": 	30	, "id": 	30	, "index": 	30	, "name": "张帅良"},
    {"group": 	31	, "id": 	31	, "index": 	31	, "name": "李梓郢"},
    {"group": 	32	, "id": 	32	, "index": 	32	, "name": "陈俊含"},
    {"group": 	33	, "id": 	33	, "index": 	33	, "name": "张子阳"},
    {"group": 	34	, "id": 	34	, "index": 	34	, "name": "冯硕"},
    {"group": 	35	, "id": 	35	, "index": 	35	, "name": "王帅博"},
    {"group": 	36	, "id": 	36	, "index": 	36	, "name": "冯怡珂"},
    {"group": 	37	, "id": 	37	, "index": 	37	, "name": "张怡宁"},
    {"group": 	38	, "id": 	38	, "index": 	38	, "name": "张博博"},
    {"group": 	39	, "id": 	39	, "index": 	39	, "name": "李润博"},
    {"group": 	40	, "id": 	40	, "index": 	40	, "name": "赵硕果"},
    {"group": 	41	, "id": 	41	, "index": 	41	, "name": "郭怡宁"},
    {"group": 	42	, "id": 	42	, "index": 	42	, "name": "杨佳雨"},
    {"group": 	43	, "id": 	43	, "index": 	43	, "name": "程霁"},
    {"group": 	44	, "id": 	44	, "index": 	44	, "name": "张轩恺"},
    {"group": 	45	, "id": 	45	, "index": 	45	, "name": "黄奕"},
    {"group": 	46	, "id": 	46	, "index": 	46	, "name": "陈婉琳"},
    {"group": 	47	, "id": 	47	, "index": 	47	, "name": "张佳欣"},
    {"group": 	48	, "id": 	48	, "index": 	48	, "name": "李凯雯"},
    {"group": 	49	, "id": 	49	, "index": 	49	, "name": "郭世通"},
    {"group": 	50	, "id": 	50	, "index": 	50	, "name": "李林黛"},
    {"group": 	0	, "id": 	0	, "index": 	0	, "name": "你在哪"}
];
/**
 * 通过id重新排序
 * @param arr
 * @returns {*}
 */
function sortStuentsById(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].id > arr[j + 1].id) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
var start = 0;
var end = 47 + 12;
// var random = 0;
function seleteStudent() {
    // if (my$("btnSet").getAttribute("clicked")) {
        // 获取所有学生列表
        var stuBox = document.getElementsByClassName("person");
        // var indexArr = getIndexById(my$("btnSet").getAttribute("from"), my$("btnSet").getAttribute("to"));
        var indexArr =getIndexById(0,51);
        var random = parseInt(Math.random() * indexArr.length);
    // console.log(stuBox[50].id)
        // 排他 清除其他背景色
        for (var i = 0; i < stuBox.length; i++) {
            stuBox[i].style.background = "";
        }

        // 设置选中的背景色
        stuBox[indexArr[random]].style.background = "yellow";
        // console.log(random)
    // random++;
    //
    //
    // } else {
        // 获取所有学生列表
        // var stuBox = document.getElementsByClassName("person");
        // // 获取从start到end的随机数
        // var random = parseInt(Math.random() * (end - start + 1) + start);
        // // 排他 清除其他背景色
        // for (var i = 0; i < stuBox.length; i++) {
        //     stuBox[i].style.background = "";
        // }
        // if (stuBox[random].className !== "person") {
        //     seleteStudent();
        // } else {
        //     // 设置选中的背景色
        //     stuBox[random].style.background = "yellow";
        //
        // }
    // }

}

function selectGroup() {
    var random = parseInt(Math.random() * 8 + 1);
    for (var i = 0; i < stuList.length; i++) {
        stuList[i].style.background = "";
        if (stuList[i].group == random) {
            stuList[i].style.background = "orange";
        }
    }
}
/**
 * 通过指定的id返回, 返回index的数组
 * @param idFrom
 * @param idTo
 * @returns {Array}
 */
function getIndexById(idFrom, idTo) {
    idFrom = Number(idFrom);
    idTo = Number(idTo);

    var arr = [];
    for (var i = idFrom; i <= idTo; i++) {
        for (var j = 0; j < students.length; j++) {
            if (students[j].id === i) {
                arr.push(students[j].index);
            }
        }
    }
    return arr;
}

/**
 * 在node节点之前插入占位框
 * @param node
 */
function zhanwei(node) {
    var s1 = document.createElement("div");
    s1.className = "person road";
    content.insertBefore(s1, node);
}
/**
 * 通过id获取元素节点
 * @param id
 * @returns {Element}
 */
function my$(id) {
    return document.getElementById(id);
}


/**
 * 判断书否在数组中存在
 *
 * @param {any} str
 * @param {any} arr
 * @returns
 */
function isInArray(str, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (str == arr[i]) {
            return true;
        }
    }
    return false;
}


/**
 * 更改五角星的颜色的类
 *
 * @param {any} ele
 * @param {any} count 更改几个
 * @param {any} cls
 */
function changeIClassName(ele, count, cls) {
    var iList = ele.getElementsByTagName("i");
    for (var i = 0; i < count; i++) {
        iList[i].className = cls;
    }
}

function changeBgClassName(ele, path) {
    ele.style.background = "url(" + path + ")";
}
