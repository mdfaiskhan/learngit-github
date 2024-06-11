let p = new Promise((resolve,reject) => {
    let isTrue = true;
    if(isTrue){
        resolve(`Promise resolved`);
    } else {
        reject(`Promise Rejected`)
    }
}) ;
p
.then(message => console.log(`Promise Resolved : ${message}`))
.catch(message => console.log(`Promise Rejected : ${message}`))


isPhoneStore = false
isPhoneAvailable = true

function resolveCallBack(response) {
    console.log("Resolve:", response);
}

// Define the reject callback function
function rejectCallBack(error) {
    console.log("Reject:", error);
}

function processMessage(resolveCallBack , rejectCallBack) {
    if(!isPhoneStore){
        rejectCallBack({
            name:`Wrong Store`,
            message:` Sorry, this is a Dog Store  `,
        })
    }
    else if(!isPhoneAvailable){
        rejectCallBack({
            name:`Out of STock!`,
            message:`SOrry, The phone X is out of Stock`,
        })
    }
        else {
            resolveCallBack({
                name:`Ok`,
                message:`Yes , The Phone X is Available , how many do you want ?`
            })
        }
    }
    processMessage(resolveCallBack, rejectCallBack);
