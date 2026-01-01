# assignment-1
<p>
2. keyof অপারেটর কোনো object type-এর সব property নামকে union type হিসেবে তৈরি করে। এটি টাইপ-সেফভাবে object-এর key ব্যবহার নিশ্চিত করে।

উদাহরণ:
interface User {
  id: number;
  name: string;
}
type UserKeys = keyof User; // "id" | "name"
<p>

<p>
4. enum নির্দিষ্ট নামকৃত মানের একটি সেট তৈরি করতে ব্যবহৃত হয়, যা কোডকে আরও পরিষ্কার ও নিয়ন্ত্রিত করে।

Numeric Enum এর উদাহরণ:
enum Direction {
  Up,       
  Down,     
  Left,     
  Right,    
}

let move: Direction = Direction.Left;
console.log(move); // Output: 2
এখানে enum-এর মানগুলো স্বয়ংক্রিয়ভাবে 0 থেকে শুরু হয় 

String Enum এর উদাহরণ:

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: "SUCCESS"
<p>
