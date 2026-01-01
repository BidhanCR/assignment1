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

