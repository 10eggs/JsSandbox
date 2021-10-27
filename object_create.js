const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear()-
        this.year;
        return `${this.title} is ${years} old`;
    }
};

//Create object
const book1 = Object.create(bookProtos);
book1.title="Bialy kiel";
book1.author="J.O Currwood";
book1.year='2013';

console.log(book1);
console.log(book1.getSummary());

const book2 = Object.create(bookProtos,{
    title: {value: "Harry Potter"},
    author: {value: "J.K.K Rowling"},
    year: {value: "2010"},
});

console.log(book2.getSummary());