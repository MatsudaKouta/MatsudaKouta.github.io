"use strict";
{
  //contactフォーム
  const company = document.getElementById("company");
  const responsibility = document.getElementById("responsibility");
  const email = document.getElementById("email");
  const question = document.getElementById("question");
  const submit = document.getElementById("submit");
  const form = document.querySelector('.contact-form');

  company.textContent = "サンプル";

  form.addEventListener('submit', e => {
    if (company.value === "" || responsibility.value === "" || email.value === "" || (question.value === "")) {
      e.preventDefault();
      alert("項目に入力をお願いします");
    } else {
      const content = document.createElement('p');
      content.textContent = "承りました。一両日中には返信させていただきます。"
      const contentWrap = document.querySelector('.contact-wrap')
      contentWrap.appendChild(content);

      content.classList.add('submitDesign')
    }
  });


}
