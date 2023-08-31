function validateForm() {

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let occupation = document.getElementById("occupation").value;
  let areaCode = document.getElementById("areacode").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let address2 = document.getElementById("address2").value;
  let message = document.getElementById("message").value;
  let upload = document.getElementById("upload").value;

  if (firstName === "") {
    alert("Please enter your first name.");
    return false;
  }

  if (lastName === "") {
    alert("Please enter your last name.");
    return false;
  }

  if (email === "") {
    alert("Please enter a valid email address.");
    return false;
  }

  if (occupation === "") {
    alert("Please select a gender.");
    return false;
  }

  if (areaCode === "" || phone === "") {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (age === "") {
    alert("Please enter the position you are applying for.");
    return false;
  }

  if (dob === "") {
    alert("Please enter your availability date.");
    return false;
  }

  if (address === "") {
    alert("Please enter your address.");
    return false;
  }

  if (message === "") {
    alert("Please enter your cover letter.");
    return false;
  }

  if (upload === "") {
    alert("Please upload your resume.");
    return false;
  }

  return true;
}