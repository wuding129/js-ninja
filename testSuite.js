/**
 * Created by wudin on 2016/5/17.
 */
/*the test suite*/

/*定义assert()方法*/
function assert(value, desc){
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}