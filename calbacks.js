const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"}
];

function getPost(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },3000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        console.log('callback is called')
        callback();
    },1000)
}

const countSecond=function(){
    console.log('Next round on clock!')
    let actualTime=+document.getElementById("timer").innerHTML+1;
    document.getElementById("timer").innerHTML=actualTime
}

let timer;


function startTimer(){
    timer=setInterval(countSecond,1000);
}
function stopTimer(){
    clearInterval(timer)
    console.log('Timer stopped!')
}
function resetTimer(){
    document.getElementById("timer").innerHTML=0
}

function sayHi(pOne,pTwo){
    alert(`Hello ${pOne} and ${pTwo}!`)
}


let timeoutPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let myVariable = function(){
            return 'Succezz'
        }
        resolve(myVariable())
    },2000)
})

function returnPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            let myVariable = function(){
                return 'Succezz'
            }
            resolve(myVariable())
        },2000)
    })
}

let storePromise = returnPromise();

storePromise.then($val=>{console.log($val)})


let mockPromise = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('Resolved promise!')
        },5000)
    })
}
async function hello() {
      let response = await mockPromise();

      console.log('I\'ve been waited!');
      return response;

    }


async function helloWithAwait(v1){
    return await new Promise(res=>setTimeout(function(){
        res(v1)
    },3000))
}

// hello().then($val=>helloWithAwait($val)).then($pro2=>console.log($pro2));

// helloWithoutPromise().then(console.log);

// timeoutPromise.then((message)=>{
//     alert(message)
// })

// timeoutPromise.then(alert)
// let greetings = setTimeout(sayHi,5000,'Tomek','Marta');
// const runClock = setInterval(showClock,1000);

// greetings();

// createPost({title:"Post three", body: "This is post three"},getPost);
// getPost();
