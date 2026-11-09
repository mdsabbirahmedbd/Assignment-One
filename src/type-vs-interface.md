type alias এবং tnterface: TypeScript-এ পার্থক্য

type Alias কী?
type Alias হলো কোনো ডেটার type এর জন্য নতুন নাম তৈরি করার পদ্ধতি। এটি object, string, number, union এবং intersection-এর ক্ষেত্রে ব্যবহার করা যায়।

Interface কী?
Interface হলো কোনো Object এর structure বানানোর নিয়ম 

প্রধান পার্থক্য
Type Alias: বিভিন্ন ধরনের Type তৈরি করতে পারে।
Interface:মূলত object-এর structure নির্ধারণে ব্যবহৃত হয়।
Declaration Merging:Interface একই নামে একাধিকবার তৈরি হলে merge হয়, কিন্তু type alias হয় না।
union ও intersection:type alias দিয়ে সরাসরি তৈরি করা যায়।

কখন কোনটি ব্যবহার করবেন?
Object Structure তৈরি করতে interface ব্যবহার করা ভালো।
Union, Intersection এবং complex type তৈরি করতে type ব্যবহার করা ভালো।

