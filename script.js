console.log('script loaded')
function dispnum(n1) {
	console.log(n1);
	forms.display.value +=n1;
}
function ageFinder(){
	var month = [ 31, 28, 31, 30, 31, 30, 31, 
                          31, 30, 31, 30, 31 ];
                     
	var d = new Date();
	var current_date = d.getDate();
	var current_month = d.getMonth()+1;
	var current_year = d.getFullYear();
	
	var birth_year = prompt("Enter your Birth Year");
	var birth_month = prompt("Enter your Birth Month");
	var birth_date = prompt("Enter your Birth Date");
	

	 if (birth_date > current_date) {
        current_date = current_date + month[birth_month - 1];
        current_month = current_month - 1;
    }

     if (birth_month > current_month) {
        current_year = current_year - 1;
        current_month = current_month + 12;
    }

   var calculated_date = current_date - birth_date;
   var calculated_month = current_month - birth_month;
   var  calculated_year = current_year - birth_year;

    forms.display.value = "Age: "+ calculated_year + " Year, " + calculated_month + " Months, " + calculated_date +" Days. " ;

}