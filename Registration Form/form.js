
		function validate(){

			var ename=document.mypage.ename.value;
			if(ename==""){
				alert("Name is mandatory");
				return false;
			}


			var email=document.mypage.email.value;
			if(email==""){
				alert("Email is mandatory");
				return false;
			}
			
			
}

  function Store1()
  {
    var sub1=document.getElementById("F1").value;
      localStorage.setItem("Svalue",sub1 );
     

      var sub2=document.getElementById("F2").value;
      localStorage.setItem("Svalue1",sub2 );
      
      var sub3=document.getElementById("F3").value;
      localStorage.setItem("Svalue2",sub3 );
      

      var sub4=document.getElementById("F4").value;
      localStorage.setItem("Svalue3",sub4 );
      

      var sub5=document.getElementById("F5").value;
      localStorage.setItem("Svalue4",sub5 );

      var sub6=document.getElementById("F6").value;
      localStorage.setItem("Svalue5",sub6 );





      var sub7=document.getElementById("F7").value;
      localStorage.setItem("Svalue6",sub7 );
      var sub8=document.getElementById("F8").value;
      localStorage.setItem("Svalue7",sub8 );
      var sub9=document.getElementById("F9").value;
      localStorage.setItem("Svalue8",sub9 );
      var sub10=document.getElementById("F10").value;
      localStorage.setItem("Svalue9",sub10 );
      return false;
  }
