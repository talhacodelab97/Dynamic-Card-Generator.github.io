let label1 = document.createElement("label")
  label1.setAttribute("class", "label")
  label1.innerHTML = "Choose Thumbnail :"
  let imageInput = document.createElement("input");
  imageInput.setAttribute("type", "file");
  imageInput.setAttribute("class", "imginput");
  imageInput.setAttribute("accept", "image/*");


  document.querySelector(".btn").before(label1)
  document.querySelector(".btn").before(imageInput)




  
// Assuming there is an 'imginput' element and a submit button with class 'btn' in your HTML

let selectedImageFile = null; // This will store the selected image file

// Event listener for the image input change
document.querySelector(".imginput").onchange = function(e) {
  selectedImageFile = e.target.files[0]; // Store the file
};

function submit1() {
  let inputValues = Array.from(document.getElementsByClassName('input')).map(input => input.value);

  if (selectedImageFile) { // Check if there is a selected image file
    const url = URL.createObjectURL(selectedImageFile);
    inputValues.push(url); // Add the image URL to inputValues
  } else {
    inputValues.push(''); // Or a default thumbnail path
  }

  cardgenerator.apply(null, inputValues);
}






function cardgenerator(title, cname, views, uploadtime, duration, thumbnail) {
  if (views > 1000) {
    views = (views/1000).toFixed(1)
    views = views + "K" + " views";
  } else {
    views = views + " views"
  }
  
  if (uploadtime > 12) {
    let year = Math.floor(uploadtime/12) + " years ago"
    uploadtime = year
  }
  else{
    uploadtime = uploadtime + " months ago";
  }
  
  

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let left = document.createElement("div");
  left.setAttribute("class", "left");
  
  let img = document.createElement("img"); // Create the img element
  img.setAttribute("class", "thumbnail");
  if (thumbnail) {
    img.src = thumbnail; // Set the thumbnail URL passed from submit1
  }

  
  



  let d = document.createElement("div");
  d.innerHTML = duration;
  d.setAttribute("class", "duration");

  let right = document.createElement("div");
  right.setAttribute("class", "right");

  let r1 = document.createElement("div");
  r1.setAttribute("class", "r1");

  let t = document.createElement("div");
  t.setAttribute("class", "title");
  t.innerHTML = title;

  let r2 = document.createElement("div");
  r2.setAttribute("class", "r2");

  let cn = document.createElement("div");
  cn.setAttribute("class", "cn");
  cn.innerHTML = cname;
  let v = document.createElement("div");
  v.setAttribute("class", "v");
  v.innerHTML = views;
  let ut = document.createElement("div");
  ut.setAttribute("class", "ut");
  ut.innerHTML = uploadtime;

  // Corrected appending logic

  


  card.append(left);
  left.append(img);
  left.append(d);

  card.append(right);
  right.append(r1);
  r1.append(t);

  right.append(r2);
  r2.append(cn);
  r2.append(v);
  r2.append(ut);

  // Append the new card to the .cards container
  document.querySelector(".cards").append(card);


  
  
}


    

    