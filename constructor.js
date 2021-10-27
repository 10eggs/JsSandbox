function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    console.log('Book initialized...')

    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

Book.prototype.getYear=function(){
    const years = new Date().getFullYear()-this.year;
    return `${this.title} is ${years} old`
}

//Instantiate an Object
const book1 = new Book('Book one','author','2013');
console.log(book1.getYear())
const book2 = new Book('Book two','author2', '2024');


//Inheritance
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;  
}
//To inherit prototype - using Book constructor
Magazine.prototype = Object.create(Book.prototype);

//To use Magazine constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Wedkarski Swiat","Tomek","2020","January")
console.log(mag1);