import patterns from '../config/patterns';
const
  validation = (data) => {
    let valid = true;
    data.map((input) => {
      input.error = false;
      if (input.mandatory && input.type!='date_input'&&(!input.value || input.value === '')) {
        input.error = true;
        input.errorText = `This field is required.`;
        valid = false;
      }
      if (input.value && input.pattern && input.type!='date_input' && ! patterns[input.pattern].test(input.value)) {
        input.error = true;
        if(input.pattern =='PASSWORD_PATTERN')
        input.errorText = `password length should be in between 6-16`;
        else
        if(input.pattern =='EMAIL_PATTERN')
        input.errorText = `Please enter valid email id`;
        else
        if(input.pattern =='ONLY_LETTERS_PATTERN'){
          if(input.value.length>20)
            input.errorText = `Max 20 charecters`;
          else
            input.errorText = `Only letters are allowed`;
        }
        else
        if(input.pattern =='VALID_PHONE_NO')
        input.errorText = `Enter valid 10 digit Phone Number`;
        else
        if(input.pattern =='ALPHANUMERIC_PATTERN')
        input.errorText = `Enter alphanumeric character only`;
        else
        if(input.pattern =='ONLY_NUMBER_PATTERN')
        input.errorText = `Only numbers are allowed`;
        valid = false;
      }
      if(input.pattern&&input.type=='date_input')
       {
       if(input.value == null){
          input.error = true;  
          input.errorText = `Please enter valid date`;
          valid = false;
         }
        else
        if((parseInt(input.value.split('-')[2])>(new Date().getFullYear()))){
          input.error = true;  
          input.errorText = `Please enter valid date`;
          valid = false;
         }
        }
      return input;
    });
    data.valid = valid;
    return data;
  },
  questionnaireProgress = (data) => {
    let total = 0, completed = 0;
    data.map((section) => {
      section.subSections.map((subsection) => {
        subsection.questions.map((question) => {
            total++;
            if (question.value) {
              completed++;
            }
        });
      });
    });
    // return Math.round((completed / total) * 100);
    return ((completed / total) * 100).toFixed(1);
  };

export default {
  validation,
  questionnaireProgress,
};
