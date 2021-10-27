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

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;

            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        },5000);
    })
}

async function init(){
    await createPost({title:"Title for post from await", body: "This is a post three"});

    getPost();
}
// createPost({title:"Post three", body: "This is post three"})
//     .then(getPost)
//     .catch(err=>console.log(err))
// getPost();

//Promise.all
// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Goodbye')
// );
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res=>
//     res.json()
// );

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>
// console.log(values));

init();