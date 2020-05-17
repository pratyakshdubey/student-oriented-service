// buttons
const unique_key = document.getElementById("unique_key");
const unique_key2 = document.getElementById("unique_key2");

const regForKeyModalbg = document.getElementById("regForKeyModalbg");
const regForKeyModal = document.getElementById("regForKeyModal");
const regForKeyModalClose = document.getElementById("regForKeyModalClose");
const enterkeymodal = document.getElementById("enterkeymodal");
const enterkeymodalinner = document.getElementById("entereymodalinner");

unique_key.addEventListener("click", e => {
    //console.log("sohaisodaos")
    // regForKeyModalbg.classList.remove("hidden")
    // regForKeyModal.classList.remove("hidden")
    regForKeyModalbg.style.display = "flex";
    regForKeyModal.style.display = "block";
});

regForKeyModalClose.addEventListener("click", e => {
    regForKeyModalbg.style.display = "none";
    regForKeyModal.style.display = "none";
})

unique_key2.addEventListener("click", e => {
    //console.log("sohaisodaos")
    enterkeymodal.classList.remove("hidden")
    enterkeymodalinner.classList.remove("hidden")
    enterkeymodalcontent.classList.remove("hidden")
});

document.querySelector(".close").addEventListener("click", e => {
    regForKeyModalbg.classList.add("hidden")
    regForKeyModal.classList.add("hidden") 
})

let closeid;
if(document.querySelector(".closeid")) {
    closeid = document.querySelector(".closeid")
    closeid.addEventListener("click", e => { 
        document.getElementById("id-modal").classList.add("hidden");
        document.getElementById("id-modal-inner").classList.add("hidden");
    })
}



document.querySelector(".closekey").addEventListener("click", e => {
    // document.querySelector(".bg-modal2").classList.add("hidden")
    document.getElementById("modal2").style.display = "none";
    document.querySelector(".modal2-content").classList.add("hidden")
    // yaha ?
})

document.getElementById("unique_key2").addEventListener("click", e => {
    document.getElementById("modal2").style.display = "flex";
});regForKeyModalbg.style.display = "flex";
regForKeyModal.style.display = "block";

/*document.getElementById("submit-addstudent").addEventListener("click", e => {
        fetch("http://localhost:3000/add-student")

})

*/

 /*let result = <%= result %>;

if(result) {
    alert("You have registered successfully. You id no is " + result.idno);
}
*/
//alert("Working?")


document.getElementById("studentKeyBtn").addEventListener("click", e => {
    
    const id = document.getElementById("studentKey").value;
    //window.location.href = `http://localhost:3000/get-student/${id}`;
      
    fetch(`http://localhost:3000/get-student/${id}`).then(res => {
        console.log(res);
        return res.json();
    }).then(data => {
        console.log(data)
        document.getElementById("id-modal").style.display = "flex";
        document.getElementById("contento").innerHTML = `
        <div>ID:&nbsp;&nbsp;&nbsp;&nbsp;${data.idno}</div>
        <div>NAME:&nbsp;&nbsp;&nbsp;&nbsp;${data.name}</div>
        <div>COLLEGE:&nbsp;&nbsp;&nbsp;&nbsp;${data.college}</div>
        <div>ADHAAR:&nbsp;&nbsp;&nbsp;&nbsp;${data.adhaar}</div>
        <div>EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;${data.email}</div>
        <div>PHONE NUMBER:&nbsp;&nbsp;&nbsp;&nbsp;${data.phoneno}</div>
        `;
    }) 
});

document.getElementById("idModalClose").addEventListener("click", e => {
    document.getElementById("id-modal").style.display = "none";
});
