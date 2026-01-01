const formatValue = (
  inputValue: string | number | boolean
): string | number | boolean => {
  if (typeof inputValue === "string") {
    return inputValue.toUpperCase();
  } else if (typeof inputValue === "number") {
    return inputValue * 10;
  } else if (typeof inputValue === "boolean") {
    return !inputValue;
  } else {
    throw new Error("Unsupported type");
  }
};
formatValue(5);



const getLength = (inputValue: string | any[]) => {
  if (typeof inputValue === "string") {
    return inputValue.length;
  }
  if(Array.isArray(inputValue)){
    return inputValue.length
  }
};
getLength([10, 20, 30, 40]);



class Person {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name= name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}
const person1 = new Person("John Doe", 30);
person1.getDetails();




type InputArray = {
  title: string;
  rating: number;
};
const filterByRating = (value: InputArray[]):InputArray[] => {
  const filterItems = value.filter((item:InputArray) => item.rating >= 4);
  return filterItems;
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
filterByRating(books);




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  const activeUsers = users.filter((user) => user.isActive === true);
  return activeUsers;
};
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
filterActiveUsers(users);



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (bookDetails: Book):void => {
  const availability = bookDetails.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${bookDetails.publishedYear}, Available: ${availability}`
  );
};
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};
printBookDetails(myBook);




const getUniqueValues = (
  inputArr1: number[],
  inputArr2: number[]
): number[] => {
  const combinedArray = [...inputArr1, ...inputArr2];
  const uniqueValues = new Set(combinedArray);
  return Array.from(uniqueValues);
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
getUniqueValues(array1, array2);




interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  const productsPrice = products.map((product) => {
    const basePrice = product.price * product.quantity;
    const discountAmount = product.discount
      ? basePrice * (product.discount / 100)
      : 0;
    return basePrice - discountAmount;
  });
  const totalPrice = productsPrice.reduce((total, price) => total + price, 0);
  return totalPrice;
};
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
calculateTotalPrice(products);

