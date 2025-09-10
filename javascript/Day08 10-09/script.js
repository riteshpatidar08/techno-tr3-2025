const headingFirst = document.getElementById('heading');
console.log(headingFirst);
//NOTE ACCESSING THE CLASS NAMES
console.log(headingFirst.className);
// headingFirst.className = 'new_heading'
console.log(headingFirst.classList);
headingFirst.classList.add('new_heading');

headingFirst.classList.remove('head');
console.log(headingFirst.classList);

//get attribute ;
console.log(headingFirst.getAttribute('class'));

//set attribute ;
headingFirst.setAttribute('title', 'this is a heading');

//remove attribute ;
headingFirst.removeAttribute('title');

//applying style
const styles = [
  { propertyName: 'color', value: 'red' },
  { propertyName: 'backgroundColor', value: 'blue' },
];
styles.forEach(({ propertyName, value }) => {
  console.log(propertyName, value);
  headingFirst.style[propertyName] = value;
});
// headingFirst.style.color = 'blue';;
// headingFirst.style.backgroundColor = 'red' ;

//NOTE ADD AN ELEMENT TO THE DOM ;

//step 1 create an element by accessing the document ;

const container = document.createElement('div');
console.log(container);
container.textContent = 'lorem';

//directly text
container.innerHTML = `<p><span>hello</span></p>`;
console.log(container);
//nested <p><span>hello</span></p>

//add this div to the html file
document.body.append(container);

// const cardData = [{name : ''}]

const userData = [
  {
    name: 'test1',
    email: 'test1@gmail.com',
    designation: 'Support Engineer',
    profileUrl: 'https://myprofile.in',
    avatar : 'https://placehold.co/100x100'
  },
  {
    name: 'test2',
    email: 'test2@gmail.com',
    designation: 'Mern stack engineer',
    profileUrl: 'https://profile.in',
        avatar : 'https://placehold.co/100x100'
  },
];
