const translations = {
    // 2:{
    //     home: "Home",
    //     about: "About US",
    //     price : "Price Plane",
    //     team: "Team",
    //     contact: "Contact US",
    //     english: "English",
    //     arabic: "Arabic"
    // },
    1: {
        home: "الرئيسية",
        about: "من نحن",
        aboutt: "من نحن",
        price: "الاسعار",
        pricee: "الاسعار",
        team: "الفريق",
        teamm: "الفريق",
        contact: "تواصل معنا",
        contactt: "تواصل معنا",
        english: "الانجليزية",
        arabic: "العربية",
        langu: "العربية",
        Welcome: " EDUCRAFT مرحبا في ",
        slogan: "تعلم اليوم وتقدم غدا",
        p1: "تم تصميم النظام لتلبية احتياجات المؤسسات التعليمية المتوسطة، مثل الأكاديميات ومراكز الدروس. فهو يقدم مجموعة شاملة من الميزات والأدوات التي تساعد على تبسيط المهام الإدارية المختلفة وتعزيز الكفاءة الشاملة لهذه المؤسسات",
        btn1: "انضم الينا الان",
        who: "EDUCRAFT ما هي",
        emp2: " EDUCRAFT تطبيق",
        p2: "ثورة في التعليم للمؤسسات المتوسطة تمكين الأكاديميات المهنية والمراكز التعليمية ومراكز الدروس",
        emp3: "EDUCRAFT استكشف",
        p3: "مستقبل المشاركة التعليمية تطبيق عبارة عن منصة مبتكرة مصممة خصيصًا لتلبية الاحتياجات الفريدة للمؤسسات التعليمية المتوسطة مثل الأكاديميات المهنية والمراكز التعليمية ومراكز الدروس.  يقدم تطبيقنا مجموعة شاملة من الميزات التي تعمل على تغيير الطريقة التي يتفاعل بها الطلاب مع بيئتهم التعليمية، مما يعزز تجربة التعلم والمشاركة المؤسسي",
        emp4: "دلائل الميزات",
        p4: "ابق على اطلاع بأحدث الأخبار: يبقي تطبيقنا الطلاب على اطلاع بأحدث الأحداث والتحديثات من مؤسستهم التعليمية.مشاركة الأخبار بسهولة: يمكن للطلاب مشاركة الأخبار والتحديثات المهمة حول مؤسستهم مباشرةً عبر تطبيق واتساب.الوصول إلى المحاضرات وتنزيلها في أي وقت وفي أي مكان: يمكن للطلاب عرض وتنزيل المحاضرات والمحتوى التعليمي بسهولة.أصبح تتبع الحضور أمرًا بسيطًا: باستخدام تطبيقنا، يمكن للطلاب تسجيل حضورهم بسهولة.التعبير عن آرائك - الاقتراحات والشكاوى: تقدر منصتنا آراء الطلاب وتوفر منصة للاقتراحات أو الشكاوى.التواصل السلس مع المساعدين: يعمل تطبيقنا على سد الفجوة بين الطلاب والموظفين التنظيميين",
        what: "ماهي اسعار الاشتراك",
        our: "فريقنا",
        mob: "الهاتف",
        mail: "البريد الالكتروني",
        say: "قل مرحبا",
        btn2: "ارسل الرسالة",
    }
}
const arbtn = document.querySelector(".ar")
const enbtn = document.querySelector(".en")

enbtn.addEventListener("click", function () {
    window.location.reload();
});
arbtn.addEventListener("click", (event) => {
    setLang(arbtn.value);
});

const setLang = (langu) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const trankey = element.getAttribute("data-i18n");
        console.log(langu);
        element.textContent = translations[langu][trankey];
    });
};
/////////////////////////////////////////////////////////*********************** */
const contactForm = document.querySelector(".php-email-form")
const fullNameInput = document.querySelector("#name")
const emailAddressInput = document.querySelector("#email")
const messageInput = document.querySelector("#message")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        name: fullNameInput.value,
        email: emailAddressInput.value,
        message: messageInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "solutioneducraft@gmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Message From Your Website",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
            emailAddressInput.value = ""
            messageInput.value = ""
        })
})

const getEmailMessage = ({ name, email, message } = {}) => {
    return `
        <p>You Have Received A New Message From EDUCRAFT:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
            <p style="margin: 0;">Name: ${name}</p>
            <p style="margin: 12px 0;">Email: ${email}</p>
            <p style="margin: 0;">Message: ${message}</p>
        </div>
    `
}

////////////////////////////////////////////////////////////////

function CustomAlert() {
    this.alert = function (message, title) {
        document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

        let dialogoverlay = document.getElementById('dialogoverlay');
        let dialogbox = document.getElementById('dialogbox');

        let winH = window.innerHeight;
        dialogoverlay.style.height = winH + "px";

        dialogbox.style.top = "100px";

        dialogoverlay.style.display = "block";
        dialogbox.style.display = "block";

        document.getElementById('dialogboxhead').style.display = 'block';

        if (typeof title === 'undefined') {
            document.getElementById('dialogboxhead').style.display = 'none';
        } else {
            document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
        }
        document.getElementById('dialogboxbody').innerHTML = message;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }

    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

let customAlert = new CustomAlert();
