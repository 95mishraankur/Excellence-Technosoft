function validateform(){  
    var name=document.myform.firstname.value;  
    var check=document.myform.check.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(check.checked==false){  
      alert("please fill the check box");  
      return false;  
      }  
    }  