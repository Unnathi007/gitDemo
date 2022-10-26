function process(){
    let s = document.getElementById("sentence").value;
    document.write(s.split(" "));
    document.writeln(s.split(" ").length);
}