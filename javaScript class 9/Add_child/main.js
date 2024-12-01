

const addbtn = document.querySelector('#addnew');

const addnew = () => {
    const newlist = document.createElement('li');
    const text = "new item";
    newlist.textContent = text;

    document.querySelector('#mygroup').appendChild(newlist)
}