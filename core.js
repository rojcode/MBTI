

const $ = document;

//Results 

// Part one
let e = 0;
let i = 0;
let resultPartOne = null;

// Part two
let s = 0;
let n = 0;
let resultPartTwo = null;

// Part three
let t = 0;
let f = 0;
let resultPartThree = null;

// Part Four
let j = 0;
let p = 0;
let resultPartFour = null;

// Final Result

let finalResult = 'ISTJ';


/// scroll && progressBar
const title = $.querySelector('#user-title');

// form and container 
const quizForm = $.querySelector('form');
const containerClass = $.querySelector('.container');
const resultContainer = $.querySelector('#results-quiz');
const loginContainer = $.querySelector('#login');
const spanName = $.querySelector('#span-name');
const settingContainerParent = $.querySelector('.main-container');
let globalName = '';


let quizHistory = [''];


const resultQuizContainer = {
   hide:()=>{
      resultContainer.style.display = 'none';

   },
   show:()=>{
      resultContainer.style.display = 'block';
   },
   results:()=>{
      
      const searchResult = rojArray.searchObjectsByField(mbtiResults,'name',finalResult.toUpperCase());
      

      //  START Container One
      const container = $.createElement('div');
      container.id = 'container-title';
      container.className = 'container';

      const divider = $.createElement('div');
      divider.id = 'divider';
      divider.style.height = '50px';

      const title = $.createElement('h1');
      title.textContent = searchResult[0].name;
      title.style.color = '#4a90e2';

      const content = $.createElement('p');
      content.textContent = searchResult[0].summeryInfo;

      container.appendChild(divider);
      container.appendChild(title);
      container.appendChild(content);

      // END Container One

      // START Container Two
      const summaryContainer = $.createElement('div');
      summaryContainer.id = 'container-summary';
      summaryContainer.className = 'container';

      const summaryTitle = $.createElement('h1');
      summaryTitle.textContent = 'رضایت شغلی تیپ شخصیتی شما با انجام کارهایی با شرایط زیر حاصل می شود';
      summaryTitle.style.color = '#4a90e2';
      summaryContainer.appendChild(summaryTitle);
      searchResult[0].moreInfo.forEach(mor=>{
         const summaryContent = $.createElement('p');
         summaryContent.textContent = mor;
         summaryContainer.appendChild(summaryContent);
      })
      
      
      
      
      // END Container Two

      // START CONTAINER THREE
      const jobsContainer = $.createElement('div');
      jobsContainer.id = 'container-jobs';
      jobsContainer.className = 'container';

      const jobsTitle = $.createElement('h1');
      jobsTitle.textContent = 'شغل های مناسب شما';
      jobsTitle.style.color = '#4a90e2';
      jobsContainer.appendChild(jobsTitle);

      searchResult[0].jobs.forEach(job=>{
         const jobsContent = $.createElement('p');
         jobsContent.textContent = job;
         jobsContainer.appendChild(jobsContent);
      });

      // END CONTAINER THREE




      resultContainer.append(container,summaryContainer,jobsContainer)


   },
};

const quizContainer = {
   show:()=>{
      containerClass.style.display = 'block';
   },
   hide :()=>{
      containerClass.style.display = 'none';
   }
};

const login = {
   show:()=>{
         title.textContent = '👋 خوش آمدید';
         
         const h1Element = document.createElement('h1');
         h1Element.textContent = 'اطلاعات خود را وارد کنید';

         const label1Element = document.createElement('label');
         label1Element.textContent = 'نام و نام خانوادگی';
         label1Element.setAttribute('for', 'username');

         const input1Element = document.createElement('input');
         input1Element.setAttribute('type', 'text');
         input1Element.setAttribute('id', 'username');
         input1Element.setAttribute('name', 'username');
         input1Element.setAttribute('placeholder', 'نام کاربری خود را وارد نمایید');

         const label2Element = document.createElement('label');
         label2Element.textContent = 'سن';
         label2Element.setAttribute('for', 'age');

         const input2Element = document.createElement('input');
         input2Element.setAttribute('type', 'number');
         input2Element.setAttribute('id', 'age');
         input2Element.setAttribute('name', 'age');
         input2Element.setAttribute('placeholder', 'سن خود را وارد نمایید');

         const buttonElement = document.createElement('button');
         buttonElement.setAttribute('type', 'button');
         buttonElement.textContent = 'شروع آزمون';

         const hrInfo = $.createElement('hr');
         const pInfo = $.createElement('p');
         
         pInfo.textContent = `
            دربارە آزمون : 
            این آزمون توسط دو روانشناس به نام های مایرز و بریگز و بر اساس نظریات و پژوهش های روانکاو مشهور یعنی آقای کارل گوستاو یونگ ایجاد شد ,تست شخصیت  پرسشنامه ای برای خودشناسی بهتر افراد است که با بررسی ٤ بعد از شخصیت افراد، ١٦ تیپ شخصیتی را در آنها شناسایی می کند. 
            این آزمون شامل ٨٧ تست می باشد کە در چهار قسمت انجام میشود
            در واقع هدف از انجام این آزمون این است کە افراد ، ویژگی های شخصی خود را از جملە علاقەمندی ها ، نقاط قوت ،ضعف ، اولویت های شغلی  احتمالی و سازگاری با افراد دیگر را بیشتر کشف و درک کنند
         `

         buttonElement.addEventListener('click',e=>{
            const nameValue = input1Element.value;
            title.innerHTML = `خوش آمدی ! 👋` + ' '+ `${nameValue}`; 

            login.hide();
            toast.show('در جواب دادن سوالات ترسی نداشتە باش اشتباه و درست وجود ندارد ! 😊🚀')
            storage.save('name',input1Element.value);
            storage.save('age',input2Element.value);
            pages.quiz();

         });

         loginContainer.append(h1Element,label1Element,input1Element,label2Element,input2Element,buttonElement,hrInfo,pInfo);

   },
   hide:()=>{
      loginContainer.style.display = 'none';
   },
};

const rojScroll = {
   startText:()=>{
      
      const scrollPercentage = (containerClass.scrollTop / (containerClass.scrollHeight - containerClass.clientHeight)) * 100;
      
      if(scrollPercentage <= 10 && scrollPercentage<30){
         title.textContent = 'این تست برای کمک بە تو است 😊'
      }
      if (scrollPercentage >= 20 && scrollPercentage < 50) {
         title.textContent = '♥️خیلی عالی است کە بە خود اهمیت می دهید';
      } else if (scrollPercentage >= 50 && scrollPercentage < 70) {
        title.textContent = "🚀٥٠ درصد راه رو اومدی ! ادامە بده";
      } else if (scrollPercentage >= 70) {
        title.textContent = ' 🏔آگاهی یعنی زندگی بهتر'
      }
},
}

const progressBar = {
   start: () => {
      const progressBar = document.getElementById('progress-bar');

      containerClass.addEventListener('scroll', () => {
         var scrollHeight = containerClass.scrollHeight - containerClass.clientHeight;
         var scrolledPercentage = (containerClass.scrollTop / scrollHeight) * 100;
         progressBar.style.height = scrolledPercentage + 'px';
      });
   },
   scrollUp: () => {
      containerClass.scrollTo(0, 0);
   },
   
};

const toast  = {
   show:(text)=>{
      const toast = $.getElementById('myToast');
      const progressBarFill = toast.querySelector('.progress-bar-fill');
      const pToast = $.querySelector('#p-toast');


      progressBarFill.style.width = '0';

      toast.classList.add('show');

      pToast.textContent = text;

      setTimeout(function () {
         progressBarFill.style.width = '100%';
      }, 10);


      setTimeout(function () {
         toast.classList.remove('show');
      }, 5000);
   },
   hide:()=>{
      const toast = $.getElementById('myToast');
      toast.innerHTML = '';
   },
};

const storage = {
   save:(name,value)=>{
      localStorage.setItem(name,value);
   },
   get:(name)=>{
      const items = localStorage.getItem(name);
      return items;
   },
};



containerClass.addEventListener('scroll',()=>{
   rojScroll.startText();
})

const convertToPersianNumber = (number) => {
   const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
   const result = String(number).replace(/\d/g, (digit) => persianNumbers[digit]);
   return result;
};




const MBTI = {

   startTestOne: () => {
      questionsPartOne.forEach((ques, index) => {

         const questionDiv = $.createElement('div');
         questionDiv.className = 'question';
         const questionNumber = $.createElement('p');
         questionNumber.setAttribute('id', 'number-question');
         const questionParagraph = $.createElement('p');
         questionParagraph.setAttribute('id', 'question');
         const numebrQuestion = convertToPersianNumber(ques.id);
         questionNumber.innerHTML = '-' + numebrQuestion;
         questionParagraph.textContent = ques.question;

         const labelOption1 = $.createElement('label');
         const inputOption1 = $.createElement('input');

         labelOption1.innerHTML = ques.answer[0].text;
         inputOption1.type = 'radio';
         // inputOption1.name = ques.answer[0].text;
         inputOption1.name = 'question' + index;
         inputOption1.value = JSON.stringify(ques.answer[0].socres);
         labelOption1.appendChild(inputOption1);

         const labelOption2 = $.createElement('label');
         const inputOption2 = $.createElement('input');
         labelOption2.innerHTML = ques.answer[1].text
         inputOption2.type = 'radio';
         // inputOption2.name = ques.answer[1].text;
         inputOption2.name = 'question' + index;
         inputOption2.value = JSON.stringify(ques.answer[1].socres);
         labelOption2.appendChild(inputOption2);


         const hr = $.createElement('hr');

         const divider = $.createElement('div');
         divider.setAttribute('id','divider');
         questionDiv.append(divider,questionNumber, questionParagraph, labelOption1, labelOption2, hr)
         

         quizForm.append(questionDiv)

      })

      const submitButton = $.createElement('input');
      submitButton.type = 'submit';
      submitButton.innerHTML = 'ds'
      submitButton.value = 'ارسال پاسخ های جواب دادە شد و ادامە دادن';

      quizForm.append(submitButton)


      quizForm.addEventListener('submit', event => {
         event.preventDefault();
         const radiosButtons = $.querySelectorAll(`input[type='radio']:checked`);
         radiosButtons.forEach(butt => {
            const selectScore = JSON.parse(butt.value);
            e += selectScore[0].e;
            i += selectScore[0].i;

         })

         if (e > i) {
            resultPartOne = 'e';
         } else if (e == i || i == e) {
            resultPartOne = 'i';
         } else if (i > e) {
            resultPartOne = 'i';
         }

         console.log('e=>' + e);
         console.log('i=>' + i);
         console.log('-----');
         console.log(resultPartOne);


         containerClass.innerHTML = '';
         toast.show('جواب های این قسمت  ثبت شد ! ادامە بده ✌️😎')
         MBTI.startTestTwo();
      })

   },
   startTestTwo: () => {


      progressBar.scrollUp();
      const questionForm = $.createElement('form');
      questionForm.setAttribute('action', '#');
      questionForm.setAttribute('method', 'post');

      questionPartTwo.forEach((ques, index) => {

         const questionDiv = $.createElement('div');
         questionDiv.className = 'question';
         const questionNumber = $.createElement('p');
         questionNumber.setAttribute('id', 'number-question');
         const questionParagraph = $.createElement('p');
         questionParagraph.setAttribute('id', 'question');
         const numebrQuestion = convertToPersianNumber(ques.id);
         questionNumber.innerHTML = '-' + numebrQuestion;
         questionParagraph.textContent = ques.question;

         const labelOption1 = $.createElement('label');
         const inputOption1 = $.createElement('input');

         labelOption1.innerHTML = ques.answer[0].text;
         inputOption1.type = 'radio';
         // inputOption1.name = ques.answer[0].text;
         inputOption1.name = 'question_2'+index;
         inputOption1.value = JSON.stringify(ques.answer[0].socres);
         labelOption1.appendChild(inputOption1);

         const labelOption2 = $.createElement('label');
         const inputOption2 = $.createElement('input');
         labelOption2.innerHTML = ques.answer[1].text
         inputOption2.type = 'radio';
         // inputOption2.name = ques.answer[1].text;
         inputOption2.name = 'question_2'+index;
         inputOption2.value = JSON.stringify(ques.answer[1].socres);
         labelOption2.appendChild(inputOption2);


         const hr = $.createElement('hr');

         const divider = $.createElement('div');
         divider.setAttribute('id','divider');
         questionDiv.append(divider,questionNumber, questionParagraph, labelOption1, labelOption2, hr)
         


         questionForm.append(questionDiv)
         containerClass.append(questionForm);

      })

      const submitButton = $.createElement('input');
      submitButton.type = 'submit';
      submitButton.innerHTML = 'ds'
      submitButton.value = 'ارسال پاسخ های جواب دادە شد و ادامە دادن';

      questionForm.append(submitButton)


      questionForm.addEventListener('submit', event => {
         event.preventDefault();
         const radiosButtons = $.querySelectorAll(`input[type='radio']:checked`);
         radiosButtons.forEach(butt => {
            const selectScoreTwo = JSON.parse(butt.value);
            s += selectScoreTwo[0].s;
            n += selectScoreTwo[0].n;


         })

         if (s > n) {
            resultPartTwo = 's';
         } else if (s == n || n == s) {
            resultPartTwo = 'n';
         } else if (n > s) {
            resultPartTwo = 'n';
         }

         console.log('s=>' + s);
         console.log('n=>' + n);
         console.log('-----');
         console.log(resultPartTwo);

         containerClass.innerHTML = '';
         MBTI.startTestThree();
         toast.show('جواب های این قسمت  ثبت شد ! ادامە بده ✌️😎')

      })

   },
   startTestThree: () => {

      progressBar.scrollUp();
      const questionForm = $.createElement('form');
      questionForm.setAttribute('action', '#');
      questionForm.setAttribute('method', 'post');

      questionPartThree.forEach((ques, index) => {

         const questionDiv = $.createElement('div');
         questionDiv.className = 'question';
         const questionNumber = $.createElement('p');
         questionNumber.setAttribute('id', 'number-question');
         const questionParagraph = $.createElement('p');
         questionParagraph.setAttribute('id', 'question');
         const numebrQuestion = convertToPersianNumber(ques.id);
         questionNumber.innerHTML = '-' + numebrQuestion;
         questionParagraph.textContent = ques.question;

         const labelOption1 = $.createElement('label');
         const inputOption1 = $.createElement('input');

         labelOption1.innerHTML = ques.answer[0].text;
         inputOption1.type = 'radio';
         inputOption1.name = 'question_3'+index;
         inputOption1.value = JSON.stringify(ques.answer[0].socres);
         labelOption1.appendChild(inputOption1);

         const labelOption2 = $.createElement('label');
         const inputOption2 = $.createElement('input');
         labelOption2.innerHTML = ques.answer[1].text
         inputOption2.type = 'radio';
         inputOption2.name = 'question_3'+index;
         inputOption2.value = JSON.stringify(ques.answer[1].socres);
         labelOption2.appendChild(inputOption2);


         const hr = $.createElement('hr');


         const divider = $.createElement('div');
         divider.setAttribute('id','divider');
         questionDiv.append(divider,questionNumber, questionParagraph, labelOption1, labelOption2, hr)


         questionForm.append(questionDiv)
         containerClass.append(questionForm);

      })

      const submitButton = $.createElement('input');
      submitButton.type = 'submit';
      submitButton.innerHTML = 'ds'
      submitButton.value = 'ارسال پاسخ های جواب دادە شد و ادامە دادن';

      questionForm.append(submitButton)


      questionForm.addEventListener('submit', event => {
         event.preventDefault();
         const radiosButtons = $.querySelectorAll(`input[type='radio']:checked`);
         radiosButtons.forEach(butt => {
            const selectScoreThree = JSON.parse(butt.value);
            f += selectScoreThree[0].f;
            t += selectScoreThree[0].t;


         })

         if (f > t) {
            resultPartThree = 'f';
         } else if (f == t || t == f) {
            resultPartThree = 'f';
         } else if (t > f) {
            resultPartThree = 't';
         }

         console.log('f=>' + f);
         console.log('t=>' + t);
         console.log('-----');
         console.log(resultPartThree);

         containerClass.innerHTML = '';

         MBTI.startTestFour();
         toast.show('جواب های این قسمت  ثبت شد ! ادامە بده ✌️😎')

      })

   },
   startTestFour: () => {

      progressBar.scrollUp();
      const questionForm = $.createElement('form');
      questionForm.setAttribute('action', '#');
      questionForm.setAttribute('method', 'post');

      questionPartFour.forEach((ques, index) => {

         const questionDiv = $.createElement('div');
         questionDiv.className = 'question';
         const questionNumber = $.createElement('p');
         questionNumber.setAttribute('id', 'number-question');
         const questionParagraph = $.createElement('p');
         questionParagraph.setAttribute('id', 'question');
         const numebrQuestion = convertToPersianNumber(ques.id);
         questionNumber.innerHTML = '-' + numebrQuestion;
         questionParagraph.textContent = ques.question;

         const labelOption1 = $.createElement('label');
         const inputOption1 = $.createElement('input');

         labelOption1.innerHTML = ques.answer[0].text;
         inputOption1.type = 'radio';
         inputOption1.name = 'question_4'+index;
         inputOption1.value = JSON.stringify(ques.answer[0].socres);
         labelOption1.appendChild(inputOption1);

         const labelOption2 = $.createElement('label');
         const inputOption2 = $.createElement('input');
         labelOption2.innerHTML = ques.answer[1].text
         inputOption2.type = 'radio';
         inputOption2.name = 'question_4'+index;
         inputOption2.value = JSON.stringify(ques.answer[1].socres);
         labelOption2.appendChild(inputOption2);


         const hr = $.createElement('hr');

         const divider = $.createElement('div');
         divider.setAttribute('id','divider');
         questionDiv.append(divider,questionNumber, questionParagraph, labelOption1, labelOption2, hr)
         questionDiv.append(questionNumber, questionParagraph, labelOption1, labelOption2, hr)


         questionForm.append(questionDiv)
         containerClass.append(questionForm);

      })

      const submitButton = $.createElement('input');
      submitButton.type = 'submit';
      submitButton.innerHTML = 'ds'
      submitButton.value = 'نمایش تحلیل';

      questionForm.append(submitButton)


      questionForm.addEventListener('submit', event => {
         event.preventDefault();
         const radiosButtons = $.querySelectorAll(`input[type='radio']:checked`);
         radiosButtons.forEach(butt => {
            const selectScoreFour = JSON.parse(butt.value);
            p += selectScoreFour[0].p;
            j += selectScoreFour[0].j;
         })

         if (p > j) {
            resultPartFour = 'p';
         } else if (p == j || j == p) {
            resultPartFour = 'p';
         } else if (j > p) {
            resultPartFour = 'j';
         }

         console.log('j=>' + j);
         console.log('p=>' + p);
         console.log('-----');
         console.log(resultPartFour);

         console.log('-----');
         console.log('Final Results');
         finalResult = resultPartOne + resultPartTwo + resultPartThree + resultPartFour;
         const getHistoryQuiz = storage.get('history');
         if(getHistoryQuiz){
            quizHistory = JSON.parse(getHistoryQuiz);
            quizHistory.push(finalResult);
            storage.save('history',JSON.stringify(quizHistory));
         }else{
            quizHistory.push(finalResult);
            storage.save('history',JSON.stringify(quizHistory));
            console.log(JSON.parse(getHistoryQuiz))
         }
         
         
         console.log(finalResult);


         pages.results();
         toast.show('از شخصیت کشف شده خود لذت ببر 🚀😊');
         

      })

   },

}




const pages = {
   quiz:()=>{
      MBTI.startTestOne();
      progressBar.start();
      quizContainer.show();
      resultQuizContainer.show();

   },
   login:()=>{
      login.show();
   },

   results:()=>{
      quizContainer.hide();
      resultQuizContainer.show();
      resultQuizContainer.results();
   },
}


const infoContainer = $.querySelector('#info-button');
infoContainer.addEventListener('click',e=>{
   window.open('detail.html','_blank')
})





pages.login();












