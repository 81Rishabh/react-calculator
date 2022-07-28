import {Stack} from './Stack';
export function Evaluation(expression) {  
    // Add Expression into array
    // debugger;
   var exp = AddExpressionIntoArr(expression);
   var postFixArr = ConverInfixToPost(exp);
}

// Add expression into arr
function AddExpressionIntoArr(str) {
    // debugger;
    const s = new Stack();
    const expArr = [];

    for(var i = str.length - 1; i >= 0; i--) {
        s.push(str.charAt(i));
    }

      while(!s.isEmpty()) {
          var exp = "";
          if(s.peek().charCodeAt(0) >= 48 && s.peek().charCodeAt(0) <= 57) {
              while(!s.isEmpty() && s.peek().charCodeAt(0) >= 48 && s.peek().charCodeAt(0) <= 57) {
                  exp += s.peek();
                  s.pop();
              }
              expArr.push(exp);
          }
          else {
              exp += s.peek();
              expArr.push(exp);
              if(!s.isEmpty()) {
                s.pop();
              }
            }
        //  s.pop();
      }
      return expArr;
}


// convert infix to postfix
function converInfixToPost(str) {
   var s = new Stack();
   var ans = [];
    for(var i = 0; i < str.length; i++) {
        if(s.isEmpty()) {
            if(str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
                s.push(str[i]);
            }
            else {
                ans.push(str[i]);
            }
        }
        else {
            if (str[i] === "+") {
                if (s.peek() === "*" || s.peek() === "/") {
                    var peek = s.pop();
                    s.push(str[i]);
                    ans.push(peek);
                } else {
                  s.push(str[i]);
                }
            }
            else  if (str[i] === "*") {
                if (s.peek() === "/") {
                    var peek = s.pop();
                    s.push(str[i]);
                    ans.push(peek);
                } else {
                    s.push(str[i]);
                }
            }
            else  if (str[i] === "/") {
                if (s.peek().equals("*")) {
                    var peek = s.pop();
                    s.push(str[i]);
                    ans.push(peek);
                } else {
                    s.push(str[i]);
                }
            }
            else  if (str.get(i).equals("-")) {
                if (s.peek().equals("*") || s.peek().equals("/") || s.peek().equals("+")) {
                    var peek = s.pop();
                    s.push(str[i]);
                    ans.push(peek);
                } else {
                    s.push(str[i]);
                }
            }
            else {
                ans.add(str.get(i));
            }
        }
    }
    while(!s.isEmpty()) {
        ans.add(s.pop());
    }
    return ans;
}