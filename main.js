var b = document.getElementById("upImage");
   var uploaded_image = ""
   var c = document.getElementById("pictures");
b.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        c.style.backgroundImage = `url(${uploaded_image})`;  

    });
    reader.readAsDataURL(this.files[0]);
});


        window.addEventListener('scroll', function(){
          const header = document.querySelector('header');
          header.classList.toggle("sticky", window.scrollY > 0);
        });


        function toggleMenu(){
         const menuToggle = document.querySelector('.menuToggle');
         const navigation = document.querySelector('.navigation');
         menuToggle.classList.toggle('active');
         navigation.classList.toggle('active');
        }

document.getElementById("myButton").addEventListener("click", function() {
  alert("Are you sure you want to send it?");
});
