let readMore=document.querySelector("#read-more");
let readMore1=document.querySelector("#read-more1");
let readMore2=document.querySelector("#read-more2");
let readMore3=document.querySelector("#read-more3");

// remove button
function displayBtn(){
    let readMoreBtn=document.querySelector("#read-more");
    readMoreBtn.remove();
}
function displayBtn1(){
    let readMoreBtn1=document.querySelector("#read-more1");
    readMoreBtn1.remove();
}
function displayBtn2(){
    let readMoreBtn2=document.querySelector("#read-more2");
    readMoreBtn2.remove();
}
function displayBtn3(){
    let readMoreBtn3=document.querySelector("#read-more3");
    readMoreBtn3.remove();
}

// Read-more button functionality
readMore.addEventListener('click',()=>{
    let paragraph=document.createElement('p');
    let aboutContent=document.querySelector(".about-content");
    paragraph.textContent = "Born on 1995. Likes to Travel and play Chess. Enthusiastic to learn new skills and work on it. Good Team Player. Worked and Developed websites like 'Algolia(Search Engine)', 'Voice-bot', 'Restaurant' & 'Furnifuture'."
    aboutContent.append(paragraph);
    displayBtn()
})
// Read-more button for Portfolio cards functionality
readMore1.addEventListener('click',()=>{
    let paragraph1=document.createElement('p');
    let anchorTag1=document.createElement('a');
    let aboutContent1=document.querySelector(".portfolio-layer1");
    paragraph1.textContent="It searches the products according to the commands used inside the Search bar. With the help of API we gonna recieve the details of the products."
    anchorTag1.setAttribute('href',"https://vishnualgoliasearch1.netlify.app/");
    anchorTag1.innerText="Click here to view";
    anchorTag1.style.color="blue";
    aboutContent1.append(paragraph1);
    aboutContent1.append(anchorTag1);
    displayBtn1()
})
readMore2.addEventListener('click',()=>{
    let paragraph2=document.createElement('p');
    let anchorTag2=document.createElement('a');
    let aboutContent2=document.querySelector(".portfolio-layer2");
    paragraph2.textContent="This project is exact replica of 'Alexa'. With the help of voice commands it works. To make it functional we should click on the button and pass the commands like 'Open Google'."
    anchorTag2.setAttribute('href',"https://njsvoicebot.netlify.app/");
    anchorTag2.innerText="Click here to view";
    anchorTag2.style.color="blue";
    aboutContent2.append(paragraph2);
    aboutContent2.append(anchorTag2);
    displayBtn2()
})
readMore3.addEventListener('click',()=>{
    let paragraph3=document.createElement('p');
    let anchorTag3=document.createElement('a');
    let aboutContent3=document.querySelector(".portfolio-layer3");
    paragraph3.textContent="In this project we have designed the exact replica of the furniture website. By clicking the 'Explore the collection' button it navigates to the page in which ther we can find the sections like 'Product details', 'Colors-available', 'Customers Feedback' and 'Ratings'."
    anchorTag3.setAttribute('href',"https://vishnu-ffuture-project.netlify.app/");
    anchorTag3.innerText="Click here to view";
    anchorTag3.style.color="blue";
    aboutContent3.append(paragraph3);
    aboutContent3.append(anchorTag3);
    displayBtn3();
})