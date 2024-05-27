const phone = document.querySelector("#phone");
let im = new Inputmask("+7(999)999-99-99");
im.mask(phone)

let validation = new JustValidate("#form",{
    errorLabelStyle: {
        color: "var(--error-color)",
        fontSize: "16px",
    }
});
validation.addField("#name",[
    {
        rule: "required",
        errorMessage: "Введите имя"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа"
    },
])
.addField("#phone",[
    {
        validator: () => {
            const numberPhone = phone.inputmask.unmaskedvalue();
            return Boolean(Number(numberPhone) && numberPhone.length > 0);
        },
        errorMessage: "Введите телефое"
    },
    {
        validator: () => {
            const numberPhone = phone.inputmask.unmaskedvalue();
            return Boolean(Number(numberPhone) && numberPhone.length === 10);
        },
        errorMessage: "Введите телефое полностью"
    },
])
.addField("#email",[
    {
        rule: "required",
        errorMessage: "Введите почту"
    },
    {
        rule: "email",
        errorMessage: "Введен не верный формат"
    },
])
.addField("#message",[
    {
        rule: "required",
        errorMessage: "Введите текст комментария"
    },
    {
        rule: "minLength",
        value: 5,
        errorMessage: "Минимум 5 символов"
    },
])
.addField(
    '#checkbox',[
      {
        rule: 'required',
        errorMessage: "Поставьте галочку"
      },
    ],
  )
  .onSuccess(() => {
    const formElements = document.querySelectorAll(".form_element");
    formElements.forEach((elem) => {
        elem.value = "";
    })
    document.querySelector("#checkbox").checked = false;
    const onePopup = document.querySelector(".popup_one");
    onePopup.classList.toggle("hiden");
    const secondPopup = document.querySelector(".popup_second");
    secondPopup.classList.toggle("hiden");
    window.scrollTo(pageXOffset, 150);
});