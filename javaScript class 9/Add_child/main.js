

const addbtn = document.querySelector('#addnew');
const removebtn = document.querySelector('#remove');

const addnew = () => {
    const newlist = document.createElement('li');
    const text = "new item";
    newlist.textContent = text;

    document.querySelector('#mygroup').appendChild(newlist)
}

removebtn.addEventListener('click', () => {
    const list = document.querySelector('#mygroup');
    list.removeChild(list.lastChild);
})
