
const num = 5;

const ParentArray = [] // Every Child Array would be Added Here
for (let i = 1; i <= num; i++) { //Parrent will be Creat

    const ChildArray = [] // Every Child Array would be Added Here

    for (let j = 1; j <= num; j++) { //Child will be Creat
        ChildArray.push(j * i);
    }
    ParentArray.push(ChildArray); //child Array will be added to Parent Array
}

console.log(ParentArray); ///print generated Array .


//====================================================
//
//        Thanks TO Reach Me.
//        If you have any question or need help
//        Please feel free to ask me
//
//        github   : github.com/azizarrahmanmiju
//        LinkedIn : linkedin.com/in/marmiju
//
// ======================================================

