TypeScript-এ any, unknown এবং never: কাজ ও ব্যবহার

TypeScript-এর Type System-এ any, unknown এবং never তিনটি গুরুত্বপূর্ণ Type। এগুলোর কাজ এবং ব্যবহার একে অপরের থেকে আলাদা। 

any কী?
any এমন একটি type যা ব্যবহার করলে typescript এর স্বাভাবিক যে গুন টাইপ সেফটি সেটা আর থাকে না সেটা একদম বন্দ হয়ে যায়।

এর ফলে একটি ভেরিয়েবলে বিভিন্ন ধরনের ডেটা রাখা সম্ভব হয়। ভুল ডেটা ব্যবহার করলেও অনেক সময় typescript কোনো সতর্ক করে না।
তাই any একদম ব্যবহার করা উচিত নয়।

unknown কী?
unknown যেকোনো ডেটা গ্রহণ করে, তবে ব্যবহারের আগে তার type নিশ্চিত করতে হয়। এটি any এর চেয়ে নিরাপদ।
এর ফলে ভুল ধরনের ডেটা ব্যবহারের ঝুঁকি কমে যায়।


never কী?
never এমন একটি type, যা কোনো স্বাভাবিক মান return করে না। যেমন, error throw করা বা কখনো শেষ না হওয়া function।


Type Hierarchy কী?
unknown হলো Top Type।
never হলো Bottom Type।
any type checking এড়িয়ে চলে।

কখন কোনটি ব্যবহার করবেন?

নিরাপদ code লেখার জন্য any এড়িয়ে unknown ব্যবহার করা ভালো। 
আর যেসব function স্বাভাবিকভাবে return করে না, সেখানে never ব্যবহার করা হয়।

