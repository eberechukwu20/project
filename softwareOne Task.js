
function solution(s) {
    var c = s[0];
    let char = c.charCodeAt()
    if (char >= 65 && char <= 90) {  // please fix condition
        return 'upper';
    } else if (char >= 97 && char <= 122) {  // please fix condition
        return 'lower';
    } else if (char >= 48 && char <= 57) {  // please fix condition
        return 'digit';
    } else {
        return "other";
    }
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    count = 1;
    let letters = '';
    for(let a = 1; a<N; a++){
        letters += "L\n";
    }
    while(count <= N){
        letters += "L"
        count++
    }
    console.log(letters);
}

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    //
    // please note that element.innerText is not supported,
    // you can use element.textContent instead.
    let table = document.querySelectorAll("td");
    content = '';
    table.forEach(a => {
        color = a.style.color;
        background = a.style.backgroundColor;
        if(!(color == background)) content += a.textContent
    })
    return content;
}