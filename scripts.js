// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
// let image = document.getElementById("image");
// image.src="./images/moon.jpg";

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// // let title = document.getElementById("caption");
// console.log(title);
// // title.innerHTML=" القمر "

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function planetswitch () {
let title =document.getElementById("caption");
if(title.innerHTML=="القمر") {
    title.innerHTML="الشمس";
    let image = document.getElementById("image");
        image.src="./images/sun.jpg";
   document.body.style.background = 'white';
} else {
title.innerHTML="القمر";
let image = document.getElementById("image");
image.src="./images/moon.jpg";
document.body.style.background = 'grey';

}
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
